@extends('phobrv::adminlte3.layout')

@section('header')
<a href="{{route('post.index')}}"  class="btn btn-default float-left">
	<i class="fa fa-backward"></i> @lang('Back')
</a>
@endsection

@section('content')
<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-md-8">
				<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['post']) ? route('post.update',array('post'=>$data['post']->id)) : route('post.store')}}"  enctype="multipart/form-data">
					@csrf
					<input type="hidden" id="typeSubmit" name="typeSubmit" value="">
					<input type="hidden" id="auto_gen" name="auto_gen" value="1">
					<input type="hidden" id="status" name="status" value="0">
					<input type="hidden" name="lang" value="{{ $data['lang'] ?? 'vi' }}">
					<input type="hidden" name="source_id" value="{{ $data['source_id'] ?? '0' }}">
					@include('phobrv::input.inputText',['label'=>'Title','key'=>'title','required'=>true])
					<button id="btnSubmit" style="display: none" type="submit" ></button>
				</form>
			</div>
			<div class="col-md-4">
				<a href="#" onclick="update()"  class="btn btn-warning float-left">
					<i class="fa fa-wrench"></i> @lang('Create')
				</a>
			</div>
		</div>
	</div>
</div>
@endsection

@section('styles')

@endsection

@section('scripts')

@endsection

