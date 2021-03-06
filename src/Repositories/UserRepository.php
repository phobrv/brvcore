<?php

namespace Phobrv\BrvCore\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface UserRepository.
 *
 * @package namespace App\Repositories;
 */
interface UserRepository extends RepositoryInterface {
	public function insertMeta($user, $arrayMeta);

	public function getMetaValueByKey($user, $key);

	public function getArrayMailReport();

}
