@include('phobrv::adminlte3.header',['sidebar_collapse'=>'sidebar-collapse'])
@include('phobrv::adminlte3.sidebar')
<div class="content-wrapper">
	@include('phobrv::adminlte3.contentHeader')
	<section class="content">
		@include('phobrv::adminlte3.alert')
		@yield('content')
	</section>
</div>
@include('phobrv::adminlte3.footer')
@yield('scripts')
