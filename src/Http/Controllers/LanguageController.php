<?php

namespace Phobrv\BrvCore\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Phobrv\BrvConfigs\Services\ConfigLangService;
use Phobrv\BrvCore\Repositories\UserRepository;

class LanguageController extends Controller {
	protected $userRepository;
	protected $configLangService;
	private $langActive;

	public function __construct(UserRepository $userRepository, ConfigLangService $configLangService) {
		$this->userRepository = $userRepository;
		$this->configLangService = $configLangService;
		$this->langActive = $configLangService->hanleLangActive();
	}

	public function changeLang(Request $request, $lang) {
		$user = Auth::user();
		if (in_array($lang, $this->langActive)) {
			$this->userRepository->insertMeta($user, array('admin_locale' => $lang));
			$this->configLangService->changeLangMain($lang);
			return redirect()->back();
		}
	}

}
