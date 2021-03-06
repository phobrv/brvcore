<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class ReceiveDataMeta.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class ReceiveDataMeta extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'brv_receive_data_meta';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'receive_data_id', 'key', 'value',
	];
	public $timestamps = false;

	public function receiveData() {
		return $this->belongsTo('Phobrv\BrvCore\Models\ReceiveData');
	}

}
