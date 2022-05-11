<?php
namespace Phobrv\BrvCore\Services;

use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\ConfigLangService;

class HandleMenuServices
{
    protected $termRepository;
    protected $configLangService;
    protected $postRepository;
    protected $langMain;
    public function __construct(
        ConfigLangService $configLangService,
        PostRepository $postRepository,
        TermRepository $termRepository
    ) {
        $this->configLangService = $configLangService;
        $this->termRepository = $termRepository;
        $this->postRepository = $postRepository;
        $this->langMain = $configLangService->getMainLang();
    }
    public function getMenus($configs, $menu_key, $disablePrivateMenu = null)
    {
        if (!isset($configs[$menu_key])) {
            return "";
        }
        $term = $this->termRepository->with('posts')->findWhere(['id'=>$configs[$menu_key]])->first();
        if($term){
            $posts = $term->posts()->where('lang', config('app.locale'))->orderBy('order')->with('postMetas')->get();
            return $this->handleMenuItem($posts, ['disablePrivateMenu' => $disablePrivateMenu]);
        }
        return [];
    }
    public function handleMenuItem($posts, $option = [])
    {
        $menus = array();
        $curRequest = str_replace("/", "", $_SERVER['REQUEST_URI']);
        foreach ($posts as $p) {
            if (!isset($option['disablePrivateMenu']) || $p->status == 1) {
                $p->active = $this->handleMenuAcitve($p, $curRequest);
                $icon = $p->postMetas->where('key', 'icon')->first();
                $p->icon = isset($icon->value) ? $icon->value : '';
              
                $p->url = $this->handleUrlMenu($p);
               
                if (isset($option['langButton'])) {
                    $p->langButtons = $this->configLangService->genLangButton($p->id);
                }

                if ($p->parent == 0) {
                    if (isset($option['disablePrivateMenu'])) {
                        $childs = $posts->where('parent', $p->id)->where('status', '1')->sortBy('order')->all();
                    } else {
                        $childs = $posts->where('parent', $p->id)->sortBy('order')->all();
                    }

                    if ($childs) {
                        foreach($childs as $idx => $val){
                            if($childs[$idx]->url == $curRequest )
                                $p->active = "active";
                            $childs[$idx]->url = $this->handleUrlMenu($childs[$idx]);
                            if (isset($option['langButton'])) {
                                $childs[$idx]->langButtons = $this->configLangService->genLangButton($childs[$idx]->id);
                            }
                        }
                        $p->childs = $childs;
                    }
                    array_push($menus, $p);
                }
            }

        }
        return $menus;
    }

    public function handleMenuAcitve($p, $curRequest)
    {
        if ($p->subtype == "home" && $curRequest == "") {
            $active = "active";
        } elseif ($curRequest == $p->slug) {
            $active = "active";
        } else {
            $active = "";
        }

        return $active;
    }
    public function handleUrlMenu($p)
    {
        $url = "";
        if ($p->subtype == "home" && $p->lang == config('option.langMain')) {
            $url = route('home');
        } elseif ($p->subtype == "link") {
            $url = $p->excerpt;
        } else {
            $url = route('level1', ['slug' => $p->slug]);
        }
        if ($url == '#') {
            $url = 'javascript:void(0)';
        }

        return $url;
    }
}
