<?php

namespace Phobrv\BrvCore\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class ReceiveData.
 *
 * @package namespace Phobrv\BrvCore\Models;
 */
class ReceiveData extends Model implements Transformable
{
    use TransformableTrait;
    protected $table = 'brv_receive_data';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'phone', 'add', 'title', 'description', 'note', 'content', 'type', 'status'];

    public function receiveDataMetas()
    {
        return $this->hasMany('Phobrv\BrvCore\Models\ReceiveDataMeta');
    }
    public function receiveDataCarts()
    {
        return $this->hasMany('Phobrv\BrvCore\Models\ReceiveDataCart');
    }

}
