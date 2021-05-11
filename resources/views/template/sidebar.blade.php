
<aside class="main-sidebar">
  <section class="sidebar">
    <div class="user-panel">
      @auth
      <div class="pull-left image">
       <img src="{{auth()->user()->avatar ?? asset('vendor/phobrv/img/avatar.png') }}" class="img-circle" alt="User Image">
     </div>
     <div class="pull-left info">
      <p>{{ auth()->user()->name ?? '' }}</p>
      <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
    </div>
    @endauth
  </div>
  <ul class="sidebar-menu" data-widget="tree">
    <li class="header">MAIN NAVIGATION</li>

    @foreach( config('sidebar.menu') as $menu )
    @if(!in_array($menu['id'],$sidebarDisable))
    @if( $menu['children']  )
    @can($menu['permissions'])
    @php
    $active = '';
    foreach( $menu['children'] as $submenu ){
      if(Request::is($submenu['href']))
        $active = 'active';
    }
    @endphp
    <li class="treeview {{ $active }} ">
      <a href="#">
        <i class="fa {{ $menu['icon'] }}"></i>
        <span>@lang($menu['title'])</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        @foreach( $menu['children'] as $submenu )
        @if(!in_array($submenu['id'],$sidebarDisable))
        @can($submenu['permissions'])

        <li>
          <a href="{{ url($submenu['href'])}}">
            <i class="fa fa-circle-o"></i>
            @lang($submenu['title'])
          </a>
        </li>
        @endcan
        @endif
        @endforeach
      </ul>
    </li>
    @else
    <li>
      <a href="{{ url($menu['href'] ) }}">
        <i class="fa {{ $menu['icon'] }}"></i>
        <span>@lang($menu['title'])</span>
      </a>
    </li>
    @endif
    @endcan
    @endif
    @endforeach
  </ul>
</section>
</aside>