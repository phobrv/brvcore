<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class User.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class UserMeta extends Model implements Transformable {
	use TransformableTrait;

	/**
	 * [$timestamps description]
	 * @var boolean
	 */
	public $timestamps = false;

	/**
	 * [$table description]
	 * @var string
	 */
	protected $table = 'brv_user_meta';

	/**
	 * [$fillable description]
	 * @var [type]
	 */
	protected $fillable = [
		'user_id', 'key', 'value',
	];

	/**
	 * [user description]
	 * @return [type] [description]
	 */
	public function user() {
		return $this->belongsTo('Phobrv\BrvCore\User');
	}

}
