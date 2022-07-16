<aside class="main-sidebar sidebar-dark-primary elevation-4">
	<a href="#" class="brand-link">
		<img src="/img/AdminLTELogo.png" alt="Admin" class="brand-image img-circle elevation-3" style="opacity: .8">
		<span class="brand-text">BRV CMS</span>
	</a>
	<div class="sidebar">
		<div class="user-panel mt-3 pb-3 mb-3 d-flex">
			<div class="image">
				<img src="/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
			</div>
			<div class="info">
				<a href="#" class="d-block">{{ auth()->user()->name ?? '' }}</a>
			</div>
		</div>
		<nav class="mt-2">
			<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
				@foreach( config('sidebar.menu') as $menu )
				@can($menu['permissions'])
				@if(!in_array($menu['id'],$sidebarDisable))
				@if( $menu['children']  )
				@php
				$active = $childActive = false;
				$items_html = '';
				foreach( $menu['children'] as $submenu ){
					if(!in_array($submenu['id'],$sidebarDisable)){
						$childActive = false;
						if(strcmp("/" . Request()->path(), $submenu['href']) == 0){
							$active = $childActive = true;
						}
						$title = __($submenu['title']);
						$items_html .= '
						<li class="nav-item">
						<a href="'. $submenu['href'] .'" class="nav-link '. ($childActive ? 'active': '') .'">
						<i class="far fa-circle nav-icon"></i>
						<p>'. $title .'</p>
						</a>
						</li>';
					}
					
				}

				@endphp
				<li class="nav-item {{ $active ? 'menu-open' : '' }}">
					<a href="#" class="nav-link {{ $active ? 'active' : '' }}">
						{!! $menu['icon'] !!}
						<p>
							@lang($menu['title'])
							<i class="right fas fa-angle-left"></i>
						</p>
					</a>
					<ul class="nav nav-treeview">
						{!! $items_html ?? '' !!}
					</ul>
				</li>

				@else 
				@php 
					$active = false;
					if(strcmp("/" . Request()->path(), $menu['href']) == 0){
						$active = true;
					}
				@endphp
				<li class="nav-item {{ $active ? 'menu-open' : '' }}" >
					<a href="{{ url($menu['href'] ) }}" class="nav-link">
						{!! $menu['icon'] !!}
						<p>
							@lang($menu['title'])
						</p>
					</a>
				</li>
				@endif

				@endif
				@endcan
				@endforeach
			</ul>
		</nav>
	</div>
</aside>