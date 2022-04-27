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
                $comments = $this->commentRepository->where('status', $data['select'])->get();
            } else {
                $comments = $this->commentRepository->all();
            }
            if (!empty($comments)) {
                $data['comments'] = $comments->where('parent', 0);
                if (!empty($data['comments'])) {
                    foreach ($data['comments'] as $key => $comment) {
                        $data['comments'][$key]->post = $this->postRepository->find($data['comments'][$key]->post_id);
                        $data['comments'][$key]['child'] = $comments->where('parent', $data['comments'][$key]->id);
                        if (!empty($data['comments'][$key]['child'])) {
                            foreach ($data['comments'][$key]['child'] as $key2 => $value2) {
                                $data['comments'][$key]['child'][$key2]['child'] = $comments->where('parent', $data['comments'][$key]['child'][$key2]->id);
                            }
                        }
                    }
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
