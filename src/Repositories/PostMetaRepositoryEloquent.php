<?php

namespace Phobrv\BrvCore\Repositories;

use Phobrv\BrvCore\Models\PostMeta;
use Phobrv\BrvCore\Repositories\PostMetaRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

class PostMetaRepositoryEloquent extends BaseRepository implements PostMetaRepository
{
	/**
	 * Specify Model class name
	 *
	 * @return string
	 */
	public function model()
	{
		return PostMeta::class;
	}

	/**
	 * Boot up the repository, pushing criteria
	 */
	public function boot()
	{
		$this->pushCriteria(app(RequestCriteria::class));
	}
}
