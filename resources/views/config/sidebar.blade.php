@extends('phobrv::adminlte3.layout')

@section('header')
<h1>@lang('Disable Sidebar Menu')</h1>
@endsection

@section('content')
<div class='card'>
	<div class="card-body">
		<form class="form-horizontal" method="post" action="{{ route('config.updateSidebarConfig') }}">
			@csrf
			@if( count( config('sidebar.menu') ) > 0 )
			@foreach( config('sidebar.menu') as $menu )
			@php
				$checked = (in_array($menu['id'],$data['sidebar_disable']))  ? 'checked' : '';
			@endphp
			<div class="form-group row">
				<label for="inputEmail3" class="col-sm-2 control-label" style="display: flex; justify-content: end;"> {{ $menu['title'] }}  </label>
				<div class="col-sm-10">
					<input type="checkbox" name="disable[]" value="{{ $menu['id'] }}" {{ $checked }} >
				</div>
			</div>
			@if( $menu['children'] )
			@foreach( $menu['children'] as $submenu )
			@php
				$checked = (in_array($submenu['id'],$data['sidebar_disable']))  ? 'checked' : '';
			@endphp
			<div class="form-group row">
				<label for="inputEmail3" class="col-sm-3 control-label" style="display: flex; justify-content: end;"> {{ $submenu['title'] }} </label>
				<div class="col-sm-9">
					<input type="checkbox" name="disable[]" value="{{ $submenu['id'] }}" {{ $checked }}>
				</div>
			</div>
			@endforeach
			@endif
			@endforeach
			@endif
			<div class="card-footer">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</form>
	</div>
</div>
@endsection

@section('styles')

@endsection

@section('scripts')
@include('phobrv::config.jsConfigForm')
@endsection