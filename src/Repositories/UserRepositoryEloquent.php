<?php

namespace Phobrv\BrvCore\Repositories;

use App\Models\User;
use Phobrv\BrvCore\Models\UserMeta;
use Phobrv\BrvCore\Repositories\UserRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository {
	/**
	 * Specify Model class name
	 *
	 * @return string
	 */
	public function model() {
		return User::class;
	}

	/**
	 * Boot up the repository, pushing criteria
	 */
	public function boot() {
		$this->pushCriteria(app(RequestCriteria::class));
	}

	public function insertMeta($user, $arrayMeta) {
		foreach ($arrayMeta as $key => $value) {
			$meta = $user->userMetas()->where('key', $key)->get()->first();
			if ($meta) {
				$meta->value = $value;
				$meta->save();
			} else {
				$meta = new UserMeta(['user_id' => $user->id, 'key' => $key, 'value' => $value]);
				$user->userMetas()->save($meta);
			}
		}
	}

	public function getMetaValueByKey($user, $key) {
		$meta = $user->userMetas()->where('key', $key)->first();
		if ($meta) {
			return $meta->value;
		} else {
			return '';
		}

	}

	public function getArrayMailReport() {
		$out = [];
		$users = $this->model->all();
		foreach ($users as $user) {
			if ($user->userMetas->where('key', 'receive_report')->where('value', 'yes')->first()) {
				array_push($out, $user->email);
			}
		}
		return $out;
	}
}
