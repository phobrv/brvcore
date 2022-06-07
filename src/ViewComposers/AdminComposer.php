<?php
namespace Phobrv\BrvCore\ViewComposers;

use Illuminate\View\View;
use Phobrv\BrvCore\Repositories\OptionRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\ConfigLangService;
use Phobrv\BrvCore\Services\PostServices;
use Phobrv\BrvCore\Services\OptionServices;

class AdminComposer
{
    public $arrayAlbum = [];
    public $arrayMenu = [];
    public $arrayVideo = [];
    public $arrayVideoItem = [];
    public $arrayCategory = [];
    public $arrayPosts = [];
    public $arrayBoxSidebar = [];
    public $admin_language;
    public $arrayProductGroup = [];
    public $arrayQuestionGroup = [];
    public $arrayBuildProjectGroup = [];
    public $arrayBrand = [];
    public $sidebarDisable = [];
    public $configs = [];
    protected $langMain;
    protected $langArray;

    public $arrayTaxonomyTmp1 = [];
    public $arrayTaxonomyTmp2 = [];
    public $arrayTaxonomyTmp3 = [];
    public $arrayTaxonomyTmp4 = [];
    public $arrayTaxonomyTmp5 = [];

    /**
     * Create a movie composer.
     *
     * @return void
     */
    public function __construct(
        OptionServices $optionService,
        TermRepository $termRepository, 
        PostRepository $postRepository, 
        PostServices $postService, 
        OptionRepository $optionRepository, 
        ConfigLangService $configLangService)
    {

        $this->arrayAlbum = $termRepository->getArrayTerms(config('term.taxonomy.albumgroup'));
        $this->arrayVideo = $termRepository->getArrayTerms(config('term.taxonomy.videogroup'));
        $this->arrayCategory = $termRepository->getArrayTerms(config('term.taxonomy.category'));
        $this->arrayQuestionGroup = $termRepository->getArrayTerms(config('term.taxonomy.questiongroup'));
        $this->arrayMenu = $termRepository->getArrayTerms(config('term.taxonomy.menugroup'));
        $this->arrayBrand = $termRepository->getArrayTerms(config('term.taxonomy.brand'));
        $this->arrayProductGroup = $termRepository->getArrayTerms(config('term.taxonomy.productgroup'));
        $this->arrayBuildProjectGroup = $termRepository->getArrayTerms(config('term.taxonomy.buildprojectgroup'));

        $this->arrayTaxonomyTmp1 = $termRepository->getArrayTerms(config('term.taxonmyTmp.tmp1'));
        $this->arrayTaxonomyTmp2 = $termRepository->getArrayTerms(config('term.taxonmyTmp.tmp2'));
        $this->arrayTaxonomyTmp3 = $termRepository->getArrayTerms(config('term.taxonmyTmp.tmp3'));
        $this->arrayTaxonomyTmp4 = $termRepository->getArrayTerms(config('term.taxonmyTmp.tmp4'));
        $this->arrayTaxonomyTmp5 = $termRepository->getArrayTerms(config('term.taxonmyTmp.tmp5'));

        $this->arrayVideoItem = $postService->getArrayPostByType(config('option.post_type.video'));
        $this->arrayPosts = $postService->getArrayPostByType(config('option.post_type.post'));
        $this->arrayBoxSidebar = $optionRepository->takeArraySidebarBoxTitle();
        $this->configs = $optionService->getConfigs($optionRepository->all());
        $this->sidebarDisable = isset($this->configs['sidebar_disable']) ? json_decode($this->configs['sidebar_disable'], true) : [];
        $this->langMain = $configLangService->getMainLang();
        $this->langArray = $configLangService->hanleLangActive();

    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('arrayBuildProjectGroup', $this->arrayBuildProjectGroup);
        $view->with('arrayAlbum', $this->arrayAlbum);
        $view->with('arrayVideo', $this->arrayVideo);
        $view->with('arrayVideoItem', $this->arrayVideoItem);
        $view->with('arrayPosts', $this->arrayPosts);
        $view->with('arrayCategory', $this->arrayCategory);
        $view->with('arrayMenu', $this->arrayMenu);
        $view->with('arrayBrand', $this->arrayBrand);
        $view->with('arrayBoxSidebar', $this->arrayBoxSidebar);
        $view->with('arrayProductGroup', $this->arrayProductGroup);
        $view->with('arrayQuestionGroup', $this->arrayQuestionGroup);
        $view->with('configs', $this->configs);
        $view->with('sidebarDisable', $this->sidebarDisable);
        $view->with('langMain', $this->langMain);
        $view->with('langArray', $this->langArray);

        $view->with('arrayTaxonomyTmp1', $this->arrayTaxonomyTmp1);
        $view->with('arrayTaxonomyTmp2', $this->arrayTaxonomyTmp2);
        $view->with('arrayTaxonomyTmp3', $this->arrayTaxonomyTmp3);
        $view->with('arrayTaxonomyTmp4', $this->arrayTaxonomyTmp4);
        $view->with('arrayTaxonomyTmp5', $this->arrayTaxonomyTmp5);

    }
}
