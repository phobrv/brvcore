<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                @yield('header')
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb  float-sm-right">
                    @if( isset($data['breadcrumbs']) &&  count( $data['breadcrumbs'] )  > 0 )
                    @foreach( $data['breadcrumbs'] as $breadcrumb )
                    <li class="breadcrumb-item {{ ($breadcrumb['is_active']) ? 'active' : '' }}">
                        <a href="{{ $breadcrumb['href'] }}">
                            {!! $breadcrumb['text'] !!} 
                        </a>
                    </li>
                    @endforeach
                    @endif
                </ol>
            </div>
        </div>
    </div>
</section>
