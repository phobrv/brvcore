@extends('phobrv::adminlte3.layout')

@section('header')
<a href="{{route('user.index')}}"  class="btn btn-default float-left">
	<i class="fa fa-backward"></i> @lang('Back')
</a>
<a href="#" onclick="save()"  class="btn btn-primary float-left">
	<i class="fa fa-floppy-o"></i> @lang('Save & Close')
</a>
<a href="#" onclick="update()"  class="btn btn-warning float-left">
	<i class="fa fa-wrench"></i> @lang('Update')
</a>
@endsection

@section('content')
<div class="card">
	<div class="card-header">
		<div class="row">
			<div class="col-md-6">
				<h3 class="box-title">User Info</h3>
			</div>
			<div class="col-md-3">
				<h3 class="box-title">User Role</h3>
			</div>
			<div class="col-md-3">
				<h3 class="box-title">Avatar</h3>
			</div>
		</div>
	</div>
	<div class="card-body">
		<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['post']) ? route('user.update',['user'=>$data['post']->id]) : route('user.store')}}">
			@csrf
			@isset($data['post']) @method('put') @endisset
			<input type="hidden" id="typeSubmit" name="typeSubmit" value="">

			<div class="row">
				<div class="col-md-6">
					@include('phobrv::input.inputText',['label'=>'Name','key'=>'name','required'=>true])
					@include('phobrv::input.inputText',['label'=>'Email','key'=>'email','required'=>true])
					@if(!isset($data['post']))
					@include('phobrv::input.inputText',['label'=>'Password','key'=>'password','required'=>true])
					@endif
					@include('phobrv::input.inputSelect',['label'=>'Email Report','key'=>'receive_report','array'=>['no'=>'no','yes'=>'yes'],'type'=>'meta'])
				</div>
				<div class="col-md-3">
					<ul id="permissions">
						@if(isset($data['roles']))
						@foreach($data['roles'] as $role )
						<li>
							<input type="checkbox" name="roles[]" value="{{$role->name}}" @if(in_array($role->name, $data['arrayRole'])) checked @endif>
							{{$role->name}}
						</li>
						@endforeach
						@endif
					</ul>
				</div>
				<div class="col-md-3">
					@include('phobrv::input.inputImage',['key'=>'avatar','basic'=>true])
				</div>
			</div>
			<button id="btnSubmit" style="display: none" type="submit" ></button>
		</form>
	</div>
</div>
@endsection

@section('styles')
<style type="text/css">
	ul>li{
		list-style: none!important;
	}
</style>
@endsection

@section('scripts')
<script type="text/javascript">

</script>
@endsection