@extends('phobrv::adminlte3.layout')

@section('header')
<h1>@lang('Config widgets')</h1>
@endsection

@section('content')
<div class="row">
	<div class="col-sm-3">
		<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			@include('phobrv::input.navTab',['id'=>'box1','title'=>'Fanpage','active'=>'active'])
			@include('phobrv::input.navTab',['id'=>'box2','title'=>'Bài viết'])
		</div>
	</div>
	<div class="col-sm-9">
    	<div class="tab-content" id="v-pills-tabContent">
			@include('phobrv::input.tabContent',['id'=>'box1','view'=>'phobrv::config.component.fanpage','active'=>'active'])
			@include('phobrv::input.tabContent',['id'=>'box2','view'=>'phobrv::config.component.popularpost'])
		</div>
	</div>
</div>
@endsection

@section('styles')

@endsection


@section('scripts')
@include('phobrv::config.jsConfigForm')
@endsection