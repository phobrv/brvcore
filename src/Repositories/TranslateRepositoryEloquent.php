<?php

namespace Phobrv\BrvCore\Repositories;

use Phobrv\BrvCore\Models\Translate;
use Phobrv\BrvCore\Repositories\TranslateRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class TranslateRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class TranslateRepositoryEloquent extends BaseRepository implements TranslateRepository {
	/**
	 * Specify Model class name
	 *
	 * @return string
	 */
	public function model() {
		return Translate::class;
	}

	/**
	 * Boot up the repository, pushing criteria
	 */
	public function boot() {
		$this->pushCriteria(app(RequestCriteria::class));
	}

}
