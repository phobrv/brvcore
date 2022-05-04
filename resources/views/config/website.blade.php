@extends('phobrv::adminlte3.layout')

@section('header')
<h1>@lang('Config website')</h1>
@endsection

@section('content')
<div class="row">
	<div class="col-sm-2">
		<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			@include('phobrv::input.navTab',['id'=>'main','title'=>'Main Config','active'=>'active'])
			@include('phobrv::input.navTab',['id'=>'info','title'=>'Main Info'])
			@include('phobrv::input.navTab',['id'=>'header','title'=>'Header/Footer'])
			@include('phobrv::input.navTab',['id'=>'social','title'=>'Social'])
		</div>
	</div>
	<div class="col-sm-10">
    	<div class="tab-content" id="v-pills-tabContent">
			@include('phobrv::input.tabContent',['id'=>'main','view'=>'phobrv::config.web.mainconfig','active'=>'active'])
			@include('phobrv::input.tabContent',['id'=>'info','view'=>'phobrv::config.web.mainInfo'])
			@include('phobrv::input.tabContent',['id'=>'header','view'=>'phobrv::config.web.header'])
			@include('phobrv::input.tabContent',['id'=>'social','view'=>'phobrv::config.web.social'])
		</div>
	</div>
</div>

@endsection

@section('styles')

@endsection

@section('scripts')
@include('phobrv::config.jsConfigForm')
@endsection