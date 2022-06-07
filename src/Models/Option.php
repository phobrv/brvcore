<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Option.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class Option extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'brv_options';

	protected $fillable = [
		'name', 'value', 'autoload',
	];

	public $timestamps = false;
}
