<?php

namespace Phobrv\BrvCore\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Faker\Generator as Faker;
use Illuminate\Http\Request;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Repositories\UserRepository;
use Phobrv\BrvCore\Services\ConfigLangService;
use Phobrv\BrvCore\Services\PostServices;
use Phobrv\BrvCore\Services\UnitServices;
use Phobrv\BrvCore\Services\VString;
use Yajra\Datatables\Datatables;

class PostController extends Controller {

	protected $configLangService;
	protected $userRepository;
	protected $postRepository;
	protected $termRepository;
	protected $unitService;
	protected $postService;
	protected $type;
	protected $category;
	protected $tag;
	protected $langMain;
	protected $vstring;

	public function __construct(
		VString $vstring,
		ConfigLangService $configLangService,
		UserRepository $userRepository,
		PostRepository $postRepository,
		PostServices $postService,
		TermRepository $termRepository,
		UnitServices $unitService) {
		$this->vstring = $vstring;
		$this->postService = $postService;
		$this->userRepository = $userRepository;
		$this->configLangService = $configLangService;
		$this->postRepository = $postRepository;
		$this->termRepository = $termRepository;
		$this->unitService = $unitService;
		$this->type = config('option.post_type.post');
		$this->category = config('term.taxonomy.category');
		$this->tag = config('term.taxonomy.tag');
		$this->langMain = $configLangService->getMainLang();
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {

		//Breadcrumb
		$data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
			[
				['text' => 'Posts', 'href' => ''],
			]
		);

		try {
			$user = Auth::user();
			$data['select'] = $this->userRepository->getMetaValueByKey($user, 'category_select');
			$data['arrayCategory'] = $this->termRepository->getArrayTerms($this->category);
			$data['arrayTag'] = $this->termRepository->getArrayTerms($this->tag);
			return view('phobrv::post.index')->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}

	}

	public function getData() {
		$user = Auth::user();
		$data['select'] = $this->userRepository->getMetaValueByKey($user, 'category_select');
		if ($data['select']) {
			$data['posts'] = $this->termRepository->getPostsByTermID($data['select'])->where('lang', $this->langMain);
		} else {
			$data['posts'] = $this->postRepository->orderBy('created_at', 'desc')->with('user')->all()->where('type', 'post')->where('lang', $this->langMain);
		}

		$langArray = $this->configLangService->getArrayLangConfig();

		foreach ($data['posts'] as $key => $value) {
			$data['posts'][$key]->author_name = $value->user->name;
			$data['posts'][$key]->create_date = date('d/m/Y', strtotime($value->created_at));
			$data['posts'][$key]->status = $value->status;
			$data['posts'][$key]->buttons = $this->configLangService->genLangButton($value->id, $langArray);
		}
		return Datatables::of($data['posts'])
			->addColumn('title', function ($post) {
				return view('phobrv::post.components.viewTitle', ['post' => $post]);
			})
			->addColumn('edit', function ($post) {
				return view('phobrv::post.components.editBtn', ['post' => $post]);
			})
			->addColumn('status', function ($post) {
				return view('phobrv::post.components.statusLabel', ['post' => $post]);
			})
			->addColumn('langButtons', function ($post) {
				return view('phobrv::post.components.langButtons', ['buttons' => $post->buttons]);
			})
			->addColumn('delete', function ($post) {
				return view('phobrv::post.components.deleteBtn', ['post' => $post]);
			})
			->make(true);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		//Breadcrumb
		$data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
			[
				['text' => 'Posts', 'href' => ''],
				['text' => 'Create Post', 'href' => ''],
			]
		);

		try {
			$data['lang'] = $this->configLangService->getMainLang();
			return view('phobrv::post.create')->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		$request->merge(['slug' => $this->vstring->standardKeyword($request->title)]);
		$data = $request->all();

		$request->validate(
			[
				'slug' => 'required|unique:posts',
			],
			[
				'slug.unique' => 'Title đã tồn tại',
				'slug.required' => 'Title không được phép để rỗng',
			]
		);

		$data['user_id'] = Auth::id();

		$data['type'] = $this->type;
		$post = $this->postRepository->create($data);
		$this->updatePostInfo($post, $request, $data);
		$this->configLangService->createTermLang($post);
		$this->postService->renderSiteMap();
		$msg = __('Create post success!');
		if ($request->typeSubmit == 'save') {
			return redirect()->route('post.index')->with('alert_success', $msg);
		} else {
			return redirect()->route('post.edit', ['post' => $post->id])->with('alert_success', $msg);
		}

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id) {
		try {

		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id) {
		//Breadcrumb
		$data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
			[
				['text' => 'Posts', 'href' => ''],
				['text' => 'Edit Post', 'href' => ''],
			]
		);

		try {
			$data['categorys'] = $this->termRepository->getTermsOrderByParent($this->category);
			$data['post'] = $this->postRepository->find($id);
			$data['arrayCategoryID'] = $this->termRepository->getArrayTermIDByTaxonomy($data['post']->terms, 'category');
			$data['tags'] = $this->termRepository->getArrayTermByTaxonomy($data['post']->terms, 'tag');
			$data['meta'] = $this->postRepository->getMeta($data['post']->postMetas);
			$data['boxTranslate'] = $this->configLangService->genLangTranslateBox($data['post']);
			return view('phobrv::post.edit')->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) {
		if (isset($request->auto_gen) && $request->auto_gen == 1) {
			$request->merge(['slug' => $this->vstring->standardKeyword($request->title)]);
		}

		$request->validate(
			[
				'slug' => 'required|unique:posts,slug,' . $id,
			],
			[
				'slug.unique' => 'Title đã tồn tại',
				'slug.required' => 'Title không được phép để rỗng',
			]
		);

		$data = $request->all();
		$data['slug'] = $this->vstring->standardKeyword($data['slug']);
		$data = $this->postService->handleMenuPost($data);
		$post = $this->postRepository->update($data, $id);

		$this->updatePostInfo($post, $request, $data);
		$this->postService->renderSiteMap();

		$msg = __('Update post success!');
		if ($request->typeSubmit == 'save') {
			return redirect()->route('post.index')->with('alert_success', $msg);
		} else {
			return redirect()->route('post.edit', ['post' => $post->id])->with('alert_success', $msg);
		}

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) {
		// $this->postRepository->destroy($id);
		$this->postRepository->destroyAllLang($id);

		$msg = __("Delete post success!");
		return redirect()->route('post.index')->with('alert_success', $msg);
	}

	public function tagSearchAjax(Request $request) {
		$tags = $this->termRepository->getTermSuggest($request['query'], config('term.taxonomy.tag'));
		$output = '<ul class="dropdown-menu" style="display:block; position:relative">';
		foreach ($tags as $tag) {
			$output .= '<li><a>' . $tag->name . '</a></li>';
		}
		$output .= '</ul>';
		return $output;
	}

	public function updatePostInfo($post, $request) {
		$arrayMeta = [];
		$arrayMeta['auto_gen'] = empty($request->auto_gen) ? 0 : $request->auto_gen;
		$this->postRepository->insertMeta($post, $arrayMeta);
		$this->postRepository->updateTagAndCategory($post, $request->tag, $request->category);
		$this->configLangService->syncPostTagAndCategory($post, $request->tag, $request->category);
		$this->postRepository->handleSeoMeta($post, $request);
	}

	public function updateUserSelectCategory(Request $request) {
		$user = Auth::user();
		$this->userRepository->insertMeta($user, array('category_select' => $request->select));
		return redirect()->route('post.index');
	}

	/**
	 * Auto create post draft
	 */
	public function autoCreatePostDraft(Request $request) {

		$_data = $request->data;
		$data = [];
		$data['user_id'] = Auth::id();
		$data['type'] = $this->type;
		foreach ($_data as $key => $value) {
			$data[$value['name']] = $value['value'];
		}
		$id_draft = 0;
		if ($data['id_draft'] == 0) {
			if ($data['title']) {
				$data['slug'] = $this->unitService->renderSlug($data['title']);
				$data['content'] = $data['content_draft'];
				$post = $this->postRepository->create($data);
				$id_draft = $post->id;
			}
		} else {
			$id_draft = $data['id_draft'];
			$data['slug'] = $this->unitService->renderSlug($data['title']);
			$data['content'] = $data['content_draft'];
			$this->postRepository->update($data, $id_draft);
		}
		return $id_draft;
	}

	/**
	 * Change status Post
	 */
	public function changeStatus(Request $request) {
		$id = $request->id;

		$p = $this->postRepository->findWhere(['id' => $id])->first();

		if ($p->status == 2) {
			return 2;
		}

		$status = ($p->status == 1) ? 0 : 1;

		$this->postRepository->update(['status' => $status], $p->id);

		return $status;

	}
	/**
	 * Auto update post content when update post
	 */

	public function autoUpdatePostContent(Request $request) {
		$_data = $request->data;
		$data = [];
		foreach ($_data as $key => $value) {
			$data[$value['name']] = $value['value'];
		}
		$data = $this->postService->handleMenuPost($data);
		$data['content'] = $data['content_draft'];
		$this->postRepository->update($data, $data['id_post']);
		return "Auto update post success";
	}

	/**
	 * Create post Demo
	 */
	public function autoCreatePost(Faker $faker) {
		//Create Group New
		$term = $this->termRepository->updateOrCreate(
			[
				'name' => 'News',
				'slug' => 'news',
				'taxonomy' => 'category',
			]
		);

		//Create 20 post
		for ($i = 0; $i < 20; $i++) {
			$title = $faker->sentence;
			$slug = $this->unitService->renderSlug($title);
			$post = $this->postRepository->create([
				'user_id' => '1',
				'title' => $title,
				'slug' => $slug,
				'type' => 'post',
				'excerpt' => $faker->text,
				'content' => $faker->text,
			]);
			$post->terms()->sync([$term->id]);
			$meta['meta_title'] = $faker->sentence;
			$meta['meta_description'] = $faker->sentence;
			$meta['meta_keywords'] = $faker->sentence;
			$this->postRepository->insertMeta($post, $meta);
		}
		return redirect()->route('post.index');
	}
}
