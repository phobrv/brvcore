<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Term.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class Term extends Model implements Transformable {
	use TransformableTrait;

	protected $table = 'brv_terms';

	protected $fillable = [
		'name', 'slug', 'description', 'taxonomy', 'parent',
	];

	public function termMetas() {
		return $this->hasMany('Phobrv\BrvCore\Models\TermMeta');
	}

	public function posts() {
		return $this->belongsToMany('Phobrv\BrvCore\Models\Post', 'brv_term_relationships');
	}

}
