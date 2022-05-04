@extends('phobrv::adminlte3.layout')

@section('header')
<h1>@lang('Config website')</h1>
@endsection

@section('content')
<div class="row">
	<div class="col-sm-2">
    	<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			@include('phobrv::input.navTab',['id'=>'maintenance','title'=>'Maintenance','active'=>'active'])
			@include('phobrv::input.navTab',['id'=>'code','title'=>'Code Insert'])
			@include('phobrv::input.navTab',['id'=>'robot','title'=>'Robots.txt'])
			@include('phobrv::input.navTab',['id'=>'custom','title'=>'Customize.css'])
			@if(!empty($data['configs']['htaccess']))
			@include('phobrv::input.navTab',['id'=>'htaccess','title'=>'Htaccess'])
			@endif
			@include('phobrv::input.navTab',['id'=>'filemanager','title'=>'Filenameger'])
		</div>
	</div>
	<div class="col-sm-10">
    	<div class="tab-content" id="v-pills-tabContent">
			@include('phobrv::input.tabContent',['id'=>'maintenance','view'=>'phobrv::config.system.maintenance','active'=>'active'])
			@include('phobrv::input.tabContent',['id'=>'code','view'=>'phobrv::config.system.code_insert'])
			@include('phobrv::input.tabContent',['id'=>'robot','view'=>'phobrv::config.system.robots'])
			@include('phobrv::input.tabContent',['id'=>'custom','view'=>'phobrv::config.system.customize_css'])
			@include('phobrv::input.tabContent',['id'=>'htaccess','view'=>'phobrv::config.system.htaccess'])
			@include('phobrv::input.tabContent',['id'=>'filemanager','view'=>'phobrv::config.system.filemanager'])
		</div>
	</div>
</div>

@endsection

@section('styles')

@endsection

@section('scripts')
@include('phobrv::config.jsConfigForm')
@endsection