@extends('phobrv::adminlte3.layout')
@section('header')
<a href="{{route('customeridea.index')}}"  class="btn btn-default float-left">
	<i class="fa fa-backward"></i> @lang('Back')
</a>
<a href="#" onclick="save()"  class="btn btn-primary float-left">
	<i class="fas fa-save"></i> @lang('Save & Close')
</a>
<a href="#" onclick="update()"  class="btn btn-warning float-left">
	<i class="fa fa-wrench"></i> @lang('Update')
</a>
@endsection
@section('content')
<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['post']) ? route('customeridea.update',array('customeridea'=>$data['post']->id)) : route('customeridea.store')}}"  enctype="multipart/form-data">
	@csrf
	@isset($data['post']) @method('put') @endisset
	<input type="hidden" id="typeSubmit" name="typeSubmit" value="">
	<div class="card">
		<div class="card-body">
			<div class="row">
				<div class="col-sm-7">
					@include('phobrv::input.inputText',['label'=>'Customer','key'=>'title','required'=>true])
					@include('phobrv::input.inputTextarea',['key'=>'content','label'=>'Content'])
				</div>
				<div class="col-md-5">
					@include('phobrv::input.inputImage',['key'=>'thumb'])
				</div>
			</div>
		</div>
	</div>
	<button id="btnSubmit" style="display: none" type="submit" ></button>
</form>
@endsection

@section('styles')

@endsection

@section('scripts')

@endsection