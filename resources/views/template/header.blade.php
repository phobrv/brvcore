<header class="main-header">
  <a href="{{ route('dashboard') }}" class="logo">
    <span class="logo-mini"><b>A</b>MP</span>
    <span class="logo-lg"><b>Admin</b>Page</span>
  </a>
  <nav class="navbar navbar-static-top">
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </a>
    <div class="navbar-custom-menu">
     <ul class="nav navbar-nav">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {{ strtoupper(config('app.locale')) }}
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            @foreach($langArray as $lang)
            <li><a href="{{route('lang',['lang'=>$lang])}}"> {{ config('langCode.codes')[$lang] }} </a></li>
            @endforeach
          </ul>
        </li>
        <li class="dropdown user user-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="{{auth()->user()->avatar ?? asset('vendor/phobrv/img/avatar.png') }}" class="user-image" alt="User Image">
            <span class="hidden-xs">{{ auth()->user()->name ?? '' }}</span>
          </a>
          <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header">
              <img src="{{auth()->user()->avatar  ?? asset('vendor/phobrv/img/avatar.png')}}" class="img-circle" alt="User Image">
              <p>
                {{ auth()->user()->name ?? ''  }}
                @auth
                <small>Member since {{date('m-Y',strtotime(auth()->user()->created_ad))}}</small>
                @endauth
              </p>
            </li>

            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="{{route('profile.show')}}" class="btn btn-default btn-flat">Profile</a>
              </div>
              <div class="pull-right">
                <a href="{{ route('logout') }}" class="btn btn-default btn-flat" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Sign out</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
                </form>
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </nav>
</header>