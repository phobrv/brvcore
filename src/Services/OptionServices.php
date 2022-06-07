<?php
namespace Phobrv\BrvCore\Services;

use Phobrv\BrvCore\Repositories\OptionRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\UnitServices;

class OptionServices
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

	public function getConfigs($options){
		$configs = [];
		foreach ($options as $key => $option) {
			$configs[$option->name] = $option->value;
		}
		foreach ($options as $key => $option) {
			$configs = $this->getConfigPostType($configs,$option);
			$configs = $this->getConfigByTermID($configs,$option);
		}
		$configs = $this->handleConfigsWithLang($configs);
		return $configs;
	}

	public function getConfigPostType($configs,$option){
		if (strpos($option->name, "_post")) {
			$configs[$option->name . "_source"] = $this->postRepository->findWhere(['id' => $option->value])->first();
		}
		return $configs;
	}

	public function getConfigByTermID($configs,$option){
		if(strpos($option->name, '_term')){
			$number_key = str_replace("_term", "_number", $option->name);
			$number = !empty($configs[$number_key]) ? $configs[$number_key] : 30;

			$term = $this->termRepository->with('posts')->findWhere(['id' => $option->value])->first();
			if ($term) {
				$configs[$option->name . "_source"] = $term->posts->sortByDesc('created_at')->where('lang', config('app.locale'))->where('status', '>', '0')->take($number);
			}
		}
		return $configs;
	}

	public function handleConfigsWithLang($configs){
		$localePrefix = "_" . config('app.locale');
        foreach ($configs as $key => $value) {
            if (strpos($key, $localePrefix) != false) {
                $newKey = str_replace($localePrefix, "", $key);
                $configs[$newKey] = $value;
            }
        }
        return $configs;
	}
}