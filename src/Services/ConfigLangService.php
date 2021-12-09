<?php
namespace Phobrv\BrvCore\Services;

use Phobrv\BrvCore\Repositories\OptionRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\UnitServices;

class ConfigLangService
{
    protected $optionRepository;
    protected $postRepository;
    protected $unitService;
    protected $termRepository;

    public function __construct(
        TermRepository $termRepository,
        PostRepository $postRepository,
        OptionRepository $optionRepository,
        UnitServices $unitService
    ) {
        $this->postRepository = $postRepository;
        $this->optionRepository = $optionRepository;
        $this->unitService = $unitService;
        $this->termRepository = $termRepository;
    }
    public function getArrayLangConfig()
    {
        $lang = $this->optionRepository->findWhere(['name' => 'langArray'])->first();
        $langArray = (!empty($lang)) ? json_decode($lang->value, true) : [];
        return $langArray;
    }

    public function genLangTranslateBox($post)
    {
        $langArray = $this->getArrayLangConfig();
        if (count($langArray) < 2) {
            return '';
        }
        if (($key = array_search($post->lang, $langArray)) !== false) {
            unset($langArray[$key]);
        }
        $out = '<a href="#"> <strong>CurLang:</strong> ' . strtoupper($post->lang) . ' </a> | <a href="#"><strong>Translate To:</strong> </a>';
        $out .= $this->genLangButton($post->id, $langArray);
        return $out;
    }

    public function genLangButton($post_id, $langArray)
    {
        $out = '';
        $termLang = $this->postRepository->find($post_id)->terms()->where('taxonomy', config('term.taxonomy.lang'))->first();
        if (empty($termLang)) {
            $out = '<a class="btn-default btn" href="javascript:void(0)">VI</a>';
            return $out;
        }
        $posts = $this->termRepository->with('posts')->find($termLang->id)->posts;
        foreach ($langArray as $value) {
            $post = $posts->where('lang', $value)->first();
            if (empty($post)) {
                $out .= '<a class="btn-default btn" href="' . route('configlang.createTranslatePost', ['source_id' => $post_id, 'lang' => $value]) . '">' . strtoupper($value) . '</a>&nbsp;&nbsp;&nbsp;';
            } else {
                switch ($post['type']) {
                    case 'post':
                        $out .= '<a  class="btn-primary btn" href="' . route('post.edit', ['post' => $post->id]) . '">' . strtoupper($value) . ' </a>&nbsp;&nbsp;&nbsp;';
                        break;
                    case 'menu_item':
                        $out .= '<a class="btn-primary btn" href="' . route('menu.edit', ['menu' => $post->id]) . '"> ' . strtoupper($value) . ' </a>&nbsp;&nbsp;&nbsp;';
                        break;
                }
            }
        }
        return $out;
    }

    public function getMainLang()
    {
        $langArray = $this->getArrayLangConfig();
        return (empty($langArray)) ? 'vi' : $langArray[0];
    }

    public function createTermLang($post)
    {
        $langArray = $this->getArrayLangConfig();
        if (!empty($langArray) && count($langArray) > 1) {
            $termName = "lang-group-" . $post->id;
            $term = $this->termRepository->create([
                'name' => $termName,
                'slug' => $this->unitService->renderSlug($termName),
                'taxonomy' => config('term.taxonomy.lang'),
            ]);
            $term->posts()->attach($post->id);
        }
    }

    public function syncPostTagAndCategory($post, $tag, $category)
    {
        $term = $post->terms->where('taxonomy', config('term.taxonomy.lang'))->first();
        if ($term) {
            $posts = $this->termRepository->find($term->id)->posts;
            foreach ($posts as $post) {
                $this->postRepository->updateTagAndCategory($post, $tag, $category);
            }
        }
    }

    public function syncMenuLangGroup($menu)
    {
        $term = $menu->terms->where('taxonomy', config('term.taxonomy.lang'))->first();
        if ($term) {
            $menus = $this->termRepository->find($term->id)->posts;
            foreach ($menus as $_m) {
                $m = $this->postRepository->find($_m->id);
                $m->subtype = $menu->subtype;
                $m->save();
            }
        }
    }

    public function hanleLangActive()
    {
        $langArray = $this->getArrayLangConfig();
        if (count($langArray) < 2) {
            return config('langCode.langActive');
        } else {
            return $langArray;
        }
    }

    public function changeLangMain($lang)
    {
        $langArray = $this->getArrayLangConfig();
        if (($key = array_search($lang, $langArray)) !== false) {
            unset($langArray[$key]);
            array_unshift($langArray, $lang);
        }
        $this->optionRepository->updateOption([
            'langArray' => json_encode($langArray),
        ]);
        return true;
    }

    public function handleTransPage($data)
    {
        $trans = [];
        \App::setLocale($data['post']->lang);
        $term = $data['post']->terms->where('taxonomy', 'lang')->first();
        if (!empty($term)) {
            $pageTrans = $term->posts;
            foreach ($pageTrans as $key => $value) {
                if ($value->lang == config('option.langMain') && $value->subtype == 'home') {
                    $trans[$value->lang] = route('home');
                } else {
                    $trans[$value->lang] = route('level1', ['slug' => $value->slug]);
                }
            }
            $data['trans'] = $trans;
        }

        return $data;
    }

    public function handleHomeTrans()
    {
        $langArray = $this->getArrayLangConfig();
        foreach ($langArray as $key => $value) {
            // code...
        }
    }
}
