<?php

namespace Phobrv\BrvCore\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Phobrv\BrvCore\Repositories\TermRepository;
use Phobrv\BrvCore\Services\MessageServices;
use Phobrv\BrvCore\Services\UnitServices;
use Phobrv\BrvCore\Services\VString;

class TermController extends Controller {
	protected $requestUri;

	protected $termRepository;

	protected $unitService;

	protected $taxonomy;

	protected $arrayTaxonomyName;

	protected $messageServices;
	protected $vstring;

	public function __construct(
		VString $vstring,
		TermRepository $termRepository,
		UnitServices $unitService,
		MessageServices $messageService
	) {
		$this->vstring = $vstring;
		$this->termRepository = $termRepository;
		$this->unitService = $unitService;
		$this->messageService = $messageService;
		$this->taxonomy = $this->unitService->getTaxonomyFromUri(\Request::getRequestUri());
		$this->arrayTaxonomyName = config('term.taxonomyLabel');
	}

	public function index(Request $request) {
		$data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
			[
				['text' => $this->arrayTaxonomyName[$this->taxonomy], 'href' => ''],
			]
		);
		try {
			$data['terms'] = $this->termRepository->getTermsOrderByParent($this->taxonomy);
			$data['arrayTerm'] = $this->termRepository->getArrayTermsParent($this->taxonomy, 0);
			$data['submit_lable'] = "Create";
			return view('phobrv::term.' . $this->taxonomy)->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}

	public function create() {
		//
	}

	public function store(Request $request) {
		$request->merge(['slug' => $this->vstring->standardKeyword($request->name)]);
		$request->validate([
			'slug' => 'required|unique:terms',
			'name' => 'required|unique:terms',
		]);

		$data = $request->all();
		$term = $this->termRepository->create($data);
		$msg = $this->messageService->genMessage($this->taxonomy, 'store');
		return redirect()->route($this->taxonomy . '.index')->with('alert_success', $msg);

	}

	public function show(Request $request, $id) {
		try {
			return redirect()->route($this->taxonomy . '.index', ['id' => $request->select]);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}

	public function edit($id) {
		$data['breadcrumbs'] = $this->unitService->generateBreadcrumbs(
			[
				['text' => $this->arrayTaxonomyName[$this->taxonomy], 'href' => ''],
				['text' => 'Edit', 'href' => ''],
			]
		);

		try {
			$data['terms'] = $this->termRepository->getTermsOrderByParent($this->taxonomy);
			$data['child'] = $this->termRepository->getTermsChild($id);
			$data['arrayTerm'] = $this->termRepository->getArrayTermsParent($this->taxonomy, $id);
			$data['term'] = $this->termRepository->find($id);
			$data['submit_lable'] = "Update";
			return view('phobrv::term.' . $this->taxonomy)->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}

	public function update(Request $request, $id) {
		$request->merge(['slug' => $this->vstring->standardKeyword($request->name)]);
		$request->validate([
			'slug' => 'required|unique:terms,slug,' . $id,
			'name' => 'required|unique:terms,name,' . $id,
		]);

		$data = $request->all();
		$category = $this->termRepository->update($data, $id);
		$msg = $this->messageService->genMessage($this->taxonomy, 'update');
		return redirect()->route($this->taxonomy . '.index')->with('alert_success', $msg);

	}

	public function destroy($id) {
		$term = $this->termRepository->find($id);
		$this->termRepository->destroy($id);
		$msg = $this->messageService->genMessage($this->taxonomy, 'destroy');
		return redirect()->route($this->taxonomy . '.index')->with('alert_success', $msg);

	}

	//Post in Tag
	public function listPostOfTag($id) {
		//Breadcrumb
		$data['breadcrumbs'][] = array(
			'text' => '<i class="fa fa-dashboard"></i> Dashboard',
			'href' => url('/dashboard'),
			'is_active' => 0,
		);

		$data['breadcrumbs'][] = array(
			'text' => 'Manager Tag',
			'href' => '',
			'is_active' => 0,
		);
		$data['breadcrumbs'][] = array(
			'text' => 'List post of Tag',
			'href' => '',
			'is_active' => 1,
		);

		try {
			$data['tag'] = $this->termRepository->find($id);
			foreach ($data['tag']->posts as $key => $value) {
				$data['tag']->posts[$key]->terms();
			}
			$data['arrayCategory'] = $this->termRepository->getArrayTermsParent(config('option.taxonomy.category'), 0);
			$data['arrayTag'] = $this->termRepository->getArrayTermsParent($this->taxonomy, 0);
			return view('phobrv::post.postOfTag')->with('data', $data);
		} catch (Exception $e) {
			return back()->with('alert_danger', $e->getMessage());
		}
	}
}
