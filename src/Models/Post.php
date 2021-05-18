<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Post.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class Post extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'posts';

	protected $fillable = [
		'user_id', 'title', 'slug', 'thumb', 'content', 'excerpt', 'status', 'type', 'subtype', 'parent', 'order', 'view', 'lang', 'created_at',
	];

	public function postMetas() {
		return $this->hasMany('Phobrv\BrvCore\Models\PostMeta');
	}

	public function comments() {
		return $this->hasMany('Phobrv\BrvCore\Models\Comment');
	}

	public function terms() {
		return $this->belongsToMany('Phobrv\BrvCore\Models\Term', 'term_relationships');
	}

	public function user() {
		return $this->belongsTo('App\Models\User', 'user_id');
	}
	public function translate() {
		return $this->belongsTo('App\Models\User', 'post_id');
	}

}
