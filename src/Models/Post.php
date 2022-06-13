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
class Post extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'brv_posts';

    protected $appends = ['meta'];

    protected $fillable = [
        'user_id', 'title', 'slug', 'thumb', 'content', 'excerpt', 'status', 'type', 'subtype', 'parent', 'order', 'view', 'lang', 'created_at','meta'
    ];

    public function postMetas()
    {
        return $this->hasMany('Phobrv\BrvCore\Models\PostMeta');
    }

    public function receiveDataCarts()
    {
        return $this->hasMany('Phobrv\BrvCore\Models\ReceiveDataCart');
    }

    public function comments()
    {
        return $this->hasMany('Phobrv\BrvCore\Models\Comment');
    }

    public function terms()
    {
        return $this->belongsToMany('Phobrv\BrvCore\Models\Term', 'brv_term_relationships');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
    public function lessons() {
        return $this->hasMany('Phobrv\Brvenglish\Models\Lesson');
    }

    public function getMetaAttribute(){
        $meta = [];
        foreach($this->postMetas as  $pm){
            $meta[$pm->key] = $pm->value;
        }
        return $meta;
    }
}
