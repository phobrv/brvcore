<?php

namespace Phobrv\BrvCore\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Repositories\UserRepository;
use Phobrv\BrvCore\Services\ConfigLangService;
use Phobrv\BrvCore\Services\HandleMenuServices;
use Phobrv\BrvCore\Services\UnitServices;
use Phobrv\BrvCore\Services\VString;
use Phobrv\BrvCore\Services\PostServices;

class MenuController extends Controller
{

    protected $unitService;
    protected $termRepository;
    protected $postRepository;
    protected $userRepository;
    protected $handleMenuService;
    protected $type;
    protected $taxonomy;
    protected $vstring;
    protected $configLangService;
    protected $langMain;
    protected $postService;

    public function __construct(
        VString $vstring,
        UserRepository $userRepository,
        TermRepository $termRepository,
        PostServices $postService,
        PostRepository $postRepository,
        HandleMenuServices $handleMenuService,
        ConfigLangService $configLangService,
        UnitServices $unitService
    ) {
        $this->postService = $postService;
        $this->vstring = $vstring;
        $this->handleMenuService = $handleMenuService;
        $this->configLangService = $configLangService;
        $this->userRepository = $userRepository;
        $this->postRepository = $postRepository;
        $this->termRepository = $termRepository;
        $this->unitService = $unitService;
        $this->type = config('option.post_type.menu_item');
        $this->taxonomy = config('term.taxonomy.menugroup');
        $this->langMain = $configLangService->getMainLang();
    }

    public function index(){

        $user = Auth::user();
        $data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
            [
                ['text' => 'Manager Menu', 'href' => ''],
                ['text' => 'Manager Menu Item', 'href' => ''],
            ]
        );
        $data['select'] = $this->userRepository->getMetaValueByKey($user, 'menu_select');
        try {
            $data['term'] = $this->termRepository->findWhere(['id' => $data['select']])->first();
            $data['lang'] = $this->langMain;
            $data['arrayMenuParent'] = [];
            if ($data['term']) {
                $posts = $data['term']->posts()->where('lang', $this->langMain)->orderBy('order')->get();
                $data['menus'] = $this->handleMenuService->handleMenuItem($posts, ['langButton' => true]);
                $data['arrayMenuParent'] = $this->postService->createArrayMenuParent($data['term']->posts, 0);
            }

            $data['submit_label'] = "Create";
            return view('phobrv::menu.index')->with('data', $data);
        } catch (Exception $e) {
            return back()->with('alert_danger', $e->getMessage());
        }
    }
    public function setMenuGroupSelect($id){
        $user = Auth::user();
        $this->userRepository->insertMeta($user, array('menu_select' => $id));
        return redirect()->route('menu.index');
    }

    public function create(){
    }

    public function store(Request $request){
        $user = Auth::user();
        if ($request->subtype == 'link') {
            $request->merge(['slug' => $this->vstring->standardKeyword($request->title) . "-" . rand(0, 9999)]);

        } else {
            $request->merge(['slug' => $this->vstring->standardKeyword($request->title)]);
        }

        $request->validate(
            [
                'slug' => 'required|unique:brv_posts',
                'subtype' => 'required|not_in:0',
            ],
            [
                'slug.unique' => 'Name ???? t???n t???i',
                'slug.required' => 'Name kh??ng ???????c ph??p ????? r???ng',
            ]
        );
        try {

            $data = $request->all();
            $menu = $this->termRepository->find($data['term_id']);
            $data['order'] = ($menu->posts->count() > 0) ? (($menu->posts->sortByDesc('order')->first()['order']) + 1) : 1;
            $data['user_id'] = $user->id;
            $data['status'] = config('brvcore.post_status.publish');
            $data['type'] = $this->type;
            $post = $this->postRepository->create($data);
            $this->configLangService->createTermLang($post);
            $post->terms()->attach($data['term_id']);
            $this->handleSeoMeta($post, $data);

            $msg = __('Create menu success!');
            return redirect()->route('menu.index')->with('alert_success', $msg);

        } catch (Exception $e) {
            return back()->with('alert_danger', $e->getMessage());
        }
    }

    public function show($id){
    }

    public function edit($id){
        $data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
            [
                ['text' => 'Manager Menu', 'href' => ''],
                ['text' => 'Edit Menu Item', 'href' => ''],
            ]
        );
        try {
            $data['post'] = $this->postRepository->find($id);
            $data['term'] = $data['post']->terms()->where('taxonomy', $this->taxonomy)->first();
            $data['arrayMenuParent'] = $this->postService->createArrayMenuParent($data['term']->posts, $id);
            $data['submit_label'] = "Update";
            $data['meta'] = $data['post']->meta;
            $data['meta']['box_sidebars'] = $this->postService->getMultiMetaByKey($data['post']->postMetas, 'box_sidebar');
            $data['post']['childs'] = $this->postRepository->findChilds($id);
            $data['boxTranslate'] = $this->configLangService->genLangTranslateBox($data['post']);
            return view('phobrv::menu.edit')->with('data', $data);
        } catch (Exception $e) {
            return back()->with('alert_danger', $e->getMessage());
        }
    }

    public function update(Request $request, $item_id){
        $request->validate(
            [
                'slug' => 'required|unique:brv_posts,slug,' . $item_id,
                'subtype' => 'required|not_in:0',
            ],
            [
                'slug.unique' => 'Name ???? t???n t???i',
                'slug.required' => 'Name kh??ng ???????c ph??p ????? r???ng',
            ]
        );
        try {
            $menuItemData = $request->all();
            $menu_item = $this->postRepository->update($menuItemData, $item_id);
            $this->configLangService->syncMenuLangGroup($menu_item);
            $this->handleSeoMeta($menu_item, $menuItemData);

            $msg = __('Update menu success!');
            if (isset($request->typeSubmit) && $request->typeSubmit == 'update') {
                return redirect()->route('menu.edit', ['menu' => $item_id])
                ->with('alert_success', $msg);
            } else {
                return redirect()->route('menu.index')
                ->with('alert_success', $msg);
            }

        } catch (Exception $e) {
            return back()->with('alert_danger', $e->getMessage());
        }
    }

    public function updateContent(Request $request, $item_id){
        $data = $request->all();
        if ($request->hasFile('thumb')) {
            $path = $this->unitService->handleUploadImage($request->thumb);
            $data['thumb'] = $path;
        }
        $post = $this->postRepository->update($data, $item_id);
        $msg = __('Update menu success!');
        if (isset($request->typeSubmit) && $request->typeSubmit == 'update') {
            return redirect()->route('menu.edit', ['menu' => $item_id])
            ->with('alert_success', $msg);
        } else {
            return redirect()->route('menu.index')
            ->with('alert_success', $msg);
        }
    }

    public function updateMeta(Request $request, $id){
        $menu = $this->postRepository->find($id);
        $arrayNotMeta = ['_token'];

        $arrayMeta = array();
        foreach ($request->all() as $key => $value) {
            if (!in_array($key, $arrayNotMeta) && $value) {
                $arrayMeta[$key] = $value;
            }
        }
        if (count($arrayMeta) > 0) {
            $this->postRepository->insertMeta($menu, $arrayMeta);
        }

        $msg = __('Update metas success!');

        return redirect()->route('menu.edit', ['menu' => $id])
        ->with('alert_success', $msg);
    }

    public function updateMetaAPI(Request $request){
        $data = $request->data;
        $menu = $this->postRepository->find($data['menu_id']);
        $arrayMeta = array();
        foreach ($data as $key => $value) {
            $arrayMeta[$key] = $value;
        }
        if (count($arrayMeta) > 0) {
            $this->postRepository->insertMeta($menu, $arrayMeta);
        }

        return response()->json([
            'msg' => 'success',
            'message' => 'Update meta success!',
        ]);
    }

    public function uploadFileAPI(Request $request){
        $data = $request->all();
        if ($request->hasFile('file')) {
            $menu = $this->postRepository->find($data['menu_id']);
            $key = $request->key;
            $path = $this->unitService->handleUploadImage($request->file);
            $arrayMeta[$key] = $path;

            $this->postRepository->insertMeta($menu, $arrayMeta);
            return \Storage::url($path);
        }
        return "";
    }

    public function updateMultiMeta(Request $request, $id){
        $menu = $this->postRepository->find($id);
        $arrayNotMeta = ['_token'];

        $arrayMeta = array();
        foreach ($request->all() as $key => $value) {
            $this->postRepository->insertMeta($menu, [$key => $value], 'multi');
        }

        $msg = __('Update metas success!');

        return redirect()->route('menu.edit', ['menu' => $id])
        ->with('alert_success', $msg);
    }

    public function removeMeta(Request $request){
        $data = $request->all();
        $this->postRepository->removeMeta($data['meta_id']);
        return $data['meta_id'];
    }

    public function destroy($id){
        $menus = $this->postRepository->find($id)->terms;
        $this->postRepository->destroyAllLang($id);
        $msg = __('Delete menu item success!');
        return redirect()->route('menu.index', ['menu' => $menus[0]->id])->with('alert_success', $msg);
    }

    public function updateOrder(Request $request){
        $data = $request->all();
        foreach ($data['id'] as $key => $value) {
            $this->postRepository->update(['order' => $data['order'][$key]], $value);
        }
        return redirect()->route('menu.index')->with('alert_success', "Update order success");
    }

    public function changeOrder(Request $request, $menu_id, $type){

        $menu = $this->postRepository->find($menu_id);
        $term = $menu->terms->first();
        $this->postRepository->resetOrderPostByTermID($term->id);
        $parent = $menu->parent;
        $curOrder = $menu->order;
        if ($type == 'plus') {
            if ($parent == 0) {
                $menuReplace = $term->posts()->where('parent', '0')->where('order', '<', $curOrder)->orderBy('order', 'desc')->first();
            } else {
                $menuReplace = $term->posts()->where('parent', $parent)->where('order', '<', $curOrder)->orderBy('order', 'desc')->first();
            }
        } else {
            if ($parent == 0) {
                $menuReplace = $term->posts()->where('parent', '0')->where('order', '>', $curOrder)->orderBy('order')->first();
            } else {
                $menuReplace = $term->posts()->where('parent', $parent)->where('order', '>', $curOrder)->orderBy('order')->first();
            }
        }

        if ($menuReplace) {
            $newOrder = $menuReplace->order;
            $this->postRepository->update(['order' => $newOrder], $menu->id);
            $this->postRepository->update(['order' => $curOrder], $menuReplace->id);
        }

        return redirect()->route('menu.index')->with('alert_success', __('Change menu item order success'));
    }

    public function updateUserSelectMenu(Request $request){
        $user = Auth::user();
        $this->userRepository->insertMeta($user, array('menu_select' => $request->select));
        return redirect()->route('menu.index');
    }
    
    private function handleSeoMeta($menu_item, $data){
        $arrayMeta = [
            'meta_thumb' => isset($data['meta_thumb']) ? $data['meta_thumb'] : "",
            'meta_title' => isset($data['meta_title']) ? $data['meta_title'] : $data['title'],
            'meta_description' => isset($data['meta_description']) ? $data['meta_description'] : $data['title'],
            'meta_keywords' => isset($data['meta_keywords']) ? $data['meta_keywords'] : $data['title'],
        ];
        $this->postRepository->insertMeta($menu_item, $arrayMeta);
    }
}
