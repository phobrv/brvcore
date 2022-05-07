@extends('phobrv::adminlte3.layout')

@section('header')
<a href="{{route('role.index')}}"  class="btn btn-default float-left">
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
<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['role']) ? route('role.update',array('role'=>$data['role']->id)) : route('role.store')}}">
	@csrf
	@isset($data['role']) @method('put') @endisset
	<input type="hidden" id="typeSubmit" name="typeSubmit" value="">
	<div class="card">
		<div class="card-header">
			<div class="row">
				<div class="col-md-6">
					<h3 class="box-title">Role Info</h3>
				</div>
				<div class="col-md-6">
					<h3 class="box-title">Permmisions</h3>
				</div>
			</div>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-md-6">
					<div class="card-body">
						<div class="form-group row">
							<label for="inputEmail3" class="col-sm-2 control-label">Name</label>
							<div class="col-sm-10">
								{{Form::text('name', old('name',isset($data['role']->name) ? $data['role']->name :'' ),['class'=>'form-control','placeholder'=>'Name','required'=>'required'])}}
								@if ($errors->has('name') )
								<span class="invalid-feed" role="alert">
									<strong>{{ $errors->first('name') }}</strong>
								</span>
								@endif
							</div>
						</div>

					</div>

				</div>
				<div class="col-md-6">
					@if( count( config('brvpermission.all') ) > 0 )
					<ul id="permissions">
						@foreach( config('brvpermission.all') as $p )
							@if( $p['children'] )
							<li>
								{{$p['name']}}
								<ul>
									@foreach( $p['children'] as $c )
									<li>
										<input type="checkbox" name="permissions[]" value="{{$c['permission']}}" @if(in_array($c['permission'], $data['arrayPermission'])) checked @endif >
										{{$c['name']}}
									</li>
									@endforeach
								</ul>
							</li>
							@else
							<li>
								<input type="checkbox" name="permissions[]" value="{{$p['permission']}}" @if(in_array($p['permission'], $data['arrayPermission'])) checked @endif> {{$p['name']}}
							</li>
							@endif
						@endforeach
					</ul>
					@endif
				</div>
			</div>
		</div>
	</div>
	<button id="btnSubmit" style="display: none" type="submit" ></button>
</form>
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
