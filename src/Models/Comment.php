<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Comment.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class Comment extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'comment';

	protected $fillable = ['content', 'phone', 'name', 'status', 'parent', 'post_id'];

	public function post() {
		return $this->belongsTo('Phobrv\BrvCore\Models\Post');
	}
}
