<?php

namespace Phobrv\BrvCore\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface OptionRepository.
 *
 * @package namespace App\Repositories;
 */
interface OptionRepository extends RepositoryInterface
{

	public function updateOption($data);

	public function takeArraySidebarBoxTitle();
}
