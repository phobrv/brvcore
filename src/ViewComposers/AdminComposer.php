<?php
namespace Phobrv\BrvCore\ViewComposers;

use Illuminate\View\View;
use Phobrv\BrvConfigs\Services\ConfigLangService;
use Phobrv\BrvCore\Repositories\OptionRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;

class AdminComposer {
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

	/**
	 * Create a movie composer.
	 *
	 * @return void
	 */
	public function __construct(TermRepository $termRepository, PostRepository $postRepository, OptionRepository $optionRepository, ConfigLangService $configLangService) {

		$this->arrayAlbum = $termRepository->getArrayTerms(config('term.taxonomy.albumgroup'));
		$this->arrayVideo = $termRepository->getArrayTerms(config('term.taxonomy.videogroup'));
		$this->arrayVideoItem = $postRepository->getArrayPostByType(config('term.taxonomy.video'));
		$this->arrayPosts = $postRepository->getArrayPostByType(config('option.post_type.post'));
		$this->arrayCategory = $termRepository->getArrayTerms(config('term.taxonomy.category'));
		$this->arrayQuestionGroup = $termRepository->getArrayTerms(config('term.taxonomy.questiongroup'));
		$this->arrayMenu = $termRepository->getArrayTerms(config('term.taxonomy.menugroup'));
		$this->arrayBoxSidebar = $optionRepository->takeArraySidebarBoxTitle();
		$this->arrayBrand = $termRepository->getArrayTerms(config('term.taxonomy.brand'));
		$this->arrayProductGroup = $termRepository->getArrayTerms(config('term.taxonomy.productgroup'));
		$this->configs = $optionRepository->handleOptionToArray($optionRepository->all());
		$this->sidebarDisable = isset($this->configs['sidebar_disable']) ? json_decode($this->configs['sidebar_disable'], true) : [];
		$this->langMain = $configLangService->getMainLang();
		$this->langArray = $configLangService->hanleLangActive();
		$this->arrayBuildProjectGroup = $termRepository->getArrayTerms(config('term.taxonomy.buildprojectgroup'));

	}

	/**
	 * Bind data to the view.
	 *
	 * @param  View  $view
	 * @return void
	 */
	public function compose(View $view) {
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

	}
}