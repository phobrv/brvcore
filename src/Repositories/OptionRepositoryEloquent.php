<?php

namespace Phobrv\BrvCore\Repositories;

use Illuminate\Container\Container as Application;
use Phobrv\BrvCore\Models\Option;
use Phobrv\BrvCore\Repositories\OptionRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\UnitServices;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class OptionRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class OptionRepositoryEloquent extends BaseRepository implements OptionRepository
{
    private $unitServices;
    private $postRepository;
    private $termRepository;

    public function __construct(
        Application $app,
        UnitServices $unitServices,
        PostRepository $postRepository,
        TermRepository $termRepository
    ) {
        parent::__construct($app);
        $this->unitServices = $unitServices;
        $this->postRepository = $postRepository;
        $this->termRepository = $termRepository;
    }
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Option::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    public function updateOption($data)
    {
        if (isset($data['_token'])) {
            unset($data['_token']);
        }
        if (isset($data['robots_txt'])) {
            $this->unitServices->writeFile(config('brvcore.robots_file'), $data['robots_txt']);
        }
        if (isset($data['customize_css'])) {
            $this->unitServices->writeFile(config('brvcore.customize_css_file'), $data['customize_css']);
        }
        if (isset($data['htaccess'])) {
            $this->unitServices->writeFile(config('brvcore.htaccess_file'), $data['htaccess']);
        }
        foreach ($data as $key => $value) {
            $this->model->updateOrCreate(
                ['name' => $key],
                ['value' => $value]
            );
        }
    }
    public function takeArraySidebarBoxTitle()
    {
        $out = ['0' => '-'];
        $arraySidebarBox = array('box1_title', 'box2_title', 'box3_title', 'box4_title', 'box5_title', 'box6_title', 'box7_title', 'box8_title', 'box9_title', 'box10_title', 'box11_title', 'box12_title', 'box13_title', 'box14_title', 'box15_title', 'box16_title');

        $boxs = $this->model->whereIn('name', $arraySidebarBox)->get();
        foreach ($boxs as $q) {
            $box = explode("_", $q->name);
            $out[$q->name] = $box[0] . " - " . $q->value;
        }

        return $out;
    }
}
