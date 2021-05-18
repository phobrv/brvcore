<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class TermMeta.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class Translate extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'translate';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'source_id', 'post_id', 'lang',
	];

	public function post() {
		return $this->hasOne('Phobrv\BrvCore\Models\Post', 'post_id');
	}
	public function source() {
		return $this->hasOne('Phobrv\BrvCore\Models\Post', 'source_id');
	}

}
