<?php

namespace Phobrv\BrvCore\Services;

use KubAT\PhpSimple\HtmlDomParser;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\VString;

class PostServices
{
    protected $termRepository;
    protected $postRepository;
    protected $vstring;
    public function __construct(
        PostRepository $postRepository,
        TermRepository $termRepository,
        VString $vstring) {
        $this->vstring = $vstring;
        $this->postRepository = $postRepository;
        $this->termRepository = $termRepository;
    }
    public function handleMenuPost($post)
    {
        if (!empty($post->content)) {
            $html = HtmlDomParser::str_get_html($post->content);
            if ($html != "") {
                $post->content = str_replace("<br />", "", $post->content);
                $menu = "<ul class='post__menu'>";
                foreach ($html->find('h2,h3') as $h) {
                    $class = $h->tag == 'h2' ? 'l1' : 'l2';
                    $outertext = $h->outertext;
                    $plaintext = trim($h->plaintext);
                    if (strlen($plaintext) > 4) {
                        $id = $this->vstring->standardKeyword($plaintext);
                        $menu .= "<li class='" . $class . "'><a href='#" . $id . "' >" . $plaintext . "</a></li>";
                        $outertextChange = '<' . $h->tag . ' id="' . $id . '" >' . $h->innertext . "</" . $h->tag . ">";
                        $post->content = str_replace($outertext, $outertextChange, $post->content);
                    }
                }
                $menu .= "</ul>";
                $post->submenu = $menu;
            }
        }

        return $post;
    }
    public function takeRatting($postMeta)
    {
        $out = ['count' => '1', 'sum' => '5', 'value' => '5', 'value_true' => '5', 'percent' => '100'];
        $out['count'] = isset($postMeta['countRatting']) ? $postMeta['countRatting'] : 1;
        $out['sum'] = isset($postMeta['sumRatting']) ? $postMeta['sumRatting'] : 5;
        $out['value'] = round($out['sum'] / $out['count']);
        $out['value_true'] = round($out['sum'] / $out['count'], 1);
        $out['percent'] = round((($out['sum'] / $out['count']) / 5) * 100, 1);
        return $out;
    }
    public function renderSiteMap()
    {
        $sitemap = fopen("sitemap.xml", "w") or die("Unable to open file!");
        $string = '<?xml version="1.0" encoding="utf-8"?>
		<urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        $posts = $this->postRepository->whereIn('type', ['post', 'menu_item', 'product', 'video'])->get();
        foreach ($posts as $post) {
            $string .= '<url><loc>' . \URL::route('level1', ['slug' => $post->slug]) . '</loc></url>';
        }
        $string .= '</urlset>';
        fwrite($sitemap, $string);
        fclose($sitemap);
        return 1;
    }
    public function getMeta($postMetas, $meta_child = true) {
        $out = array();
        foreach ($postMetas as $meta) {
            $out[$meta->key] = $meta->value;
        }
        foreach ($postMetas as $meta) {
            if (strpos($meta->key, '_term') && $meta->value) {
                $term = $this->termRepository->with('posts')->findWhere(['id' => $meta->value])->first();
                if (!empty($term)) {
                    $posts = $term->posts()->where('status', '>', 0)->orderBy('status', 'desc')->orderBy('order')->orderBy('created_at', 'desc');
                    if ($term['taxonomy'] == 'category' || $term['taxonomy'] == 'productgroup') {
                        $posts = $posts->where('lang', config('app.locale'));
                    }

                    if (strpos($meta->key, '_paginate')) {
                        $paginate_number_key = str_replace("_term_paginate", "_number", $meta->key);
                        $paginate = !empty($out[$paginate_number_key]) ? $out[$paginate_number_key] : 10;
                        $out['paginate'] = $paginate;
                        $posts = $posts->paginate($paginate);
                    } else {
                        $number_key = str_replace("_term", "_number", $meta->key);
                        if (empty($out[$number_key])) {
                            $posts = $posts->get();
                        } else {
                            $posts = $posts->limit($out[$number_key])->get();
                        }
                    }
                    if (!empty($posts) && $meta_child) {
                        for ($i = 0; $i < count($posts); $i++) {
                            $posts[$i]['meta'] = $this->getMeta($posts[$i]->postMetas);
                        }
                    }
                    $out[$meta->key . "_source"] = $posts;
                    $out[$meta->key . "_term"] = $term;
                }
            } elseif (strpos($meta->key, '_post') && $meta->value) {
                $out[$meta->key . "_source"] = Post::find($meta->value);
            }
        }
        return $out;
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
    public function getArrayPostByType($type) {
        $out = ['0' => '-'];
        $posts = $this->postRepository->where('type', $type)->get();
        if ($posts) {
            foreach ($posts as $p) {
                $out[$p->id] = $p->title;
            }
        }
        return $out;
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
    public function getTotalView() {
        $out = 0;
        $all = $this->postRepository->all();
        foreach ($all as $p) {
            $out += $p->view;
        }
        return $out;
    }
    public function handleSlugUniquePost($slug) {
        $ck = $this->postRepository->where('slug', $slug)->first();
        if ($ck) {
            $slug = $slug . "-" . rand(100, 999);
        }
        return $slug;
    }
}
