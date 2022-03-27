<?php

namespace Phobrv\BrvCore\Repositories;

use Phobrv\BrvCore\Models\ReceiveData;
use Phobrv\BrvCore\Repositories\ReceiveDataRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class ReceiveDataRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ReceiveDataRepositoryEloquent extends BaseRepository implements ReceiveDataRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ReceiveData::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function insertMeta($receive, $arrayMeta)
    {
        foreach ($arrayMeta as $key => $value) {
            $receive->receiveDataMetas()->updateOrCreate(
                ['receive_data_id' => $receive->id, 'key' => $key, 'value' => $value]
            );
        }
    }

    public function getMeta($metas)
    {
        $out = [];
        foreach ($metas as $meta) {
            $out[$meta->key] = $meta->value;
        }
        return $out;
    }
    public function insertCart($receive, $cart)
    {
        foreach ($cart as $item) {
            $receive->receiveDataCarts()->create(
                [
                    'receive_data_id' => $receive->id,
                    'post_id' => $item['id'],
                    'name' => $item['name'],
                    'qty' => $item['qty'],
                    'price' => $item['price'],
                    'weight' => $item['weight'],
                    'discount' => $item['discount'],
                    'tax' => $item['tax'],
                    'subtotal' => $item['subtotal'],
                    'options' => json_encode($item['options']),
                ]
            );
        }
    }

    public function destroy($id)
    {
        $receive = $this->model->find($id);
        $receive->receiveDataMetas()->delete();
        return $this->model::destroy($id);
    }

}
