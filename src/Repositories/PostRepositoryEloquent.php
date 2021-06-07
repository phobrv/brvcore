<?php

namespace Phobrv\BrvCore\Repositories;
use Illuminate\Container\Container as Application;
use Illuminate\Support\Collection as collect;
use Phobrv\BrvCore\Models\Post;
use Phobrv\BrvCore\Models\PostMeta;
use Phobrv\BrvCore\Models\Term;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\UnitServices;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

class PostRepositoryEloquent extends BaseRepository implements PostRepository {
	private $unitServices;
	private $termRepository;
	private $paginate;

	public function __construct(
		Application $app,
		UnitServices $unitServices,
		TermRepository $termRepository
	) {
		parent::__construct($app);
		$this->unitServices = $unitServices;
		$this->termRepository = $termRepository;
		$this->paginate = config('option.paginate');
	}
	public function model() {
		return Post::class;
	}
	public function boot() {
		$this->pushCriteria(app(RequestCriteria::class));
	}
	public function updateTagAndCategory($post, $arrayTagName, $arrayCategoryID) {
		if (!empty($arrayCategoryID)) {
			foreach ($arrayCategoryID as $key => $value) {
				$term = $this->termRepository->find($value);
				if ($term->parent != 0) {
					array_push($arrayCategoryID, $term->parent);
				}
			}
		}

		$arrayTermID = $arrayCategoryID;

		$arrayTermIDCategory = $this->termRepository->getArrayTermIDByTaxonomy($post->terms, 'category');
		$post->terms()->detach($arrayTermIDCategory);
		$arryTermIDTag = $this->termRepository->getArrayTermIDByTaxonomy($post->terms, 'tag');
		$post->terms()->detach($arryTermIDTag);

		if (isset($arrayTagName) && count($arrayTagName) > 0) {
			foreach ($arrayTagName as $tag) {
				$slug = $this->unitServices->renderSlug($tag);
				$tagSeacrhOrCreate = Term::firstOrCreate(
					['slug' => $slug],
					['name' => $tag, 'taxonomy' => 'tag']
				);
				array_push($arrayTermID, $tagSeacrhOrCreate->id);
			}

		}

		$post->terms()->attach($arrayTermID);
	}
	public function getArrayPostByType($type) {
		$out = ['0' => '-'];
		$posts = $this->model->where('type', $type)->get();
		if ($posts) {
			foreach ($posts as $p) {
				$out[$p->id] = $p->title;
			}
		}
		return $out;
	}
	public function insertMeta($post, $arrayMeta) {
		foreach ($arrayMeta as $key => $value) {
			$meta = $post->postMetas()->where('key', $key)->get()->first();
			if ($meta) {
				$meta->value = $value;
				$meta->save();
			} else {
				$meta = new PostMeta(['post_id' => $post->id, 'key' => $key, 'value' => $value]);
				$post->postMetas()->save($meta);
			}
		}
	}
	public function getMeta($postMetas, $meta_child = true) {
		$out = array();
		foreach ($postMetas as $meta) {
			if (strpos($meta->key, '_term') && $meta->value) {
				$term = $this->termRepository->with('posts')->findWhere(['id' => $meta->value])->first();
				if ($term) {
					$posts = $term->posts()->where('status', '1')->orderBy('order')->orderBy('created_at', 'desc');
					if ($term['taxonomy'] == 'category') {
						$posts = $posts->where('lang', config('app.locale'));
					}

					if (strpos($meta->key, '_paginate')) {
						$posts = $posts->simplePaginate($this->paginate);
					} else {
						$posts = $posts->get();
					}

					if (count($posts) && $meta_child) {
						for ($i = 0; $i < count($posts); $i++) {
							$posts[$i]['meta'] = $this->getMeta($posts[$i]->postMetas);
						}
					}
					$out[$meta->key . "_source"] = $posts;
					$out[$meta->key . "_term"] = $term;
				}
			} elseif (strpos($meta->key, '_post') && $meta->value) {
				$out[$meta->key . "_source"] = $this->model->findWhere(['id' => $meta->value]);
			}
			$out[$meta->key] = $meta->value;
		}
		return $out;
	}
	public function insertMultiMeta($post, $key, $value) {
		$meta = $post->postMetas()->where('key', $key)->where('value', $value)->get()->first();
		if (!$meta) {
			$meta = new PostMeta(['post_id' => $post->id, 'key' => $key, 'value' => $value]);
			$post->postMetas()->save($meta);
		}
	}
	public function getMultiMetaByKey($postMetas, $key) {
		$out = [];
		foreach ($postMetas as $meta) {
			if ($meta->key == $key) {
				$out[$meta->id] = $meta->value;
			}
		}
		return $out;
	}
	public function destroy($id) {
		$post = $this->find($id);
		$post->terms()->detach();
		$post->postMetas()->delete();
		$this->model::destroy($id);
		return true;
	}
	public function destroyAllLang($post_id) {
		$term = $this->find($post_id)->terms()->where('taxonomy', config('term.taxonomy.lang'))->first();
		if ($term) {
			$posts = $this->termRepository->with('posts')->find($term->id)->posts;
			foreach ($posts as $p) {
				$this->destroy($p->id);
			}
			$this->termRepository->destroy($term->id);
		} else {
			$this->destroy($post_id);
		}
	}
	public function createArrayMenuParent($posts, $expel_id) {
		$out = array();
		$out[0] = '-';
		foreach ($posts as $p) {
			if ($p->parent == 0 && $p->id != $expel_id) {
				$out[$p->id] = $p->title;
			}
		}
		return $out;
	}
	public function findChilds($id) {
		return $this->model->where('parent', $id)->get();
	}
	public function handleSeoMeta($post, $request) {
		$arrayMeta = array();
		$arrayMeta['meta_title'] = ($request->meta_title) ? $request->meta_title : $request->title;
		if (isset($request->meta_description) && $request->meta_description) {
			$meta_des = $request->meta_description;
		} elseif (isset($request->content) && $request->content) {
			$meta_des = $this->unitServices->getStrByNumberCharacter($request->content, 156);
		} else {
			$meta_des = $request->title;
		}
		$arrayMeta['meta_description'] = $meta_des;
		$arrayMeta['meta_keywords'] = ($request->meta_keywords) ? $request->meta_keywords : "";
		if ($arrayMeta) {
			$this->insertMeta($post, $arrayMeta);
		}
	}
	public function getConcern($post) {
		$terms = $post->terms;
		$concerts = new collect();
		foreach ($terms as $t) {
			foreach ($t->posts as $p) {
				if ($p->id != $post->id) {
					$concerts->push($p);
				}
			}
		}
		return $concerts;
	}
	public function handleSlugUniquePost($slug) {
		$ck = $this->model->where('slug', $slug)->first();
		if ($ck) {
			$slug = $slug . "-" . rand(100, 999);
		}
		return $slug;
	}
	public function resetOrderPostByTermID($term_id) {
		$posts = $this->termRepository->find($term_id)->posts()->orderBy('order')->get();
		$order = 1;
		foreach ($posts as $p) {
			$this->update(['order' => $order], $p->id);
			$order++;
		}
	}
	public function removeMeta($meta_id) {
		PostMeta::destroy($meta_id);
	}
	public function renderSiteMap() {
		$sitemap = fopen("sitemap.xml", "w") or die("Unable to open file!");
		$string = '<?xml version="1.0" encoding="utf-8"?>
		<urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
		$posts = $this->model->whereIn('type', ['post', 'menu_item', 'product', 'video'])->get();
		foreach ($posts as $post) {
			$string .= '<url><loc>' . \URL::route('level1', ['slug' => $post->slug]) . '</loc></url>';
		}
		$string .= '</urlset>';
		fwrite($sitemap, $string);
		fclose($sitemap);
		return 1;
	}
}
