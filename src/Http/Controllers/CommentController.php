<?php

namespace Phobrv\BrvCore\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Phobrv\BrvCore\Repositories\CommentRepository;
use Phobrv\BrvCore\Repositories\PostRepository;
use Phobrv\BrvCore\Repositories\UserRepository;
use Phobrv\BrvCore\Services\UnitServices;

class CommentController extends Controller
{

    protected $commentRepository;
    protected $userRepository;
    protected $unitService;
    protected $postRepository;
    protected $arr_status = [
        '0' => '-',
        'pendding' => 'Pendding',
        'success' => 'Success',
        'fail' => 'Fail',
    ];
    public function __construct(
        UserRepository $userRepository,
        PostRepository $postRepository,
        CommentRepository $commentRepository,
        UnitServices $unitService
    ) {
        $this->postRepository = $postRepository;
        $this->userRepository = $userRepository;
        $this->commentRepository = $commentRepository;
        $this->unitService = $unitService;

    }

    public function index()
    {
        $data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
            [
                ['text' => 'Manager Comment', 'href' => ''],
            ]
        );
        try {
            $data['select'] = $this->userRepository->getMetaValueByKey(Auth::user(), 'comment_status_select');
            $data['arr_status'] = $this->arr_status;
            if ($data['select']) {
                $data['comments'] = $this->commentRepository->findWhere(
                    ['status' => $data['select']])->all();
            } else {
                $data['comments'] = $this->commentRepository->all();
            }

            if (isset($data['comments']) && count($data['comments'])) {
                for ($i = 0; $i < count($data['comments']); $i++) {
                    $data['comments'][$i]->post = $this->postRepository->find($data['comments'][$i]->post_id);
                }
            }

            return view('phobrv::comment.index')->with('data', $data);

        } catch (Exception $e) {

        }
    }

    public function setDefaultSelect(Request $request)
    {
        $user = Auth::user();
        $this->userRepository->insertMeta($user, array('comment_status_select' => $request->select));
        return redirect()->route('comment.index');
    }

    public function changeStatus($id, $status)
    {
        $this->commentRepository->update(['status' => $status], $id);
        return redirect()->route('comment.index');
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
            [
                ['text' => 'Edit Comment', 'href' => ''],
            ]
        );
        try {
            $data['comment'] = $this->commentRepository->find($id);

            return view('phobrv::comment.edit')->with('data', $data);

        } catch (Exception $e) {

        }
    }

    public function update(Request $request, $id)
    {
        try {
            $data = $request->all();
            $this->commentRepository->update($data, $id);
            return redirect()->route('comment.index');
        } catch (Exception $e) {

        }

    }

    public function destroy($id)
    {
        //
    }

}
