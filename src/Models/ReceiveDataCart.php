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
class ReceiveDataCart extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'receive_data_cart';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'receive_data_id', 'post_id', 'name', 'qty', 'price', 'weight', 'discount', 'tax', 'subtotal', 'options',
    ];
    public $timestamps = false;

    public function receiveData()
    {
        return $this->belongsTo('Phobrv\BrvCore\Models\ReceiveData');
    }
    public function post()
    {
        return $this->belongsTo('Phobrv\BrvCore\Models\Post');
    }

}
