<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BRV CMS</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/css/admin.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.7/css/jquery.fancybox.min.css" />
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/js/adminlte.min.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/ckeditor/config.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}">
    </script>
    <script src="{{ asset('/vendor/phobrv/adminlte3/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.7/js/jquery.fancybox.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    @yield('styles')
    @if (isset($configs['filemanager']) && $configs['filemanager'] == 'elfinder')
        <script src="{{ asset('/vendor/phobrv/colorbox/jquery.colorbox-min.js') }}"></script>
        <link rel="stylesheet" href="{{ asset('/vendor/phobrv/colorbox/colorbox.css') }}">
        <script>
            $(document).on('click', '.popup_selector', function(event) {
                event.preventDefault();
                var updateID = $(this).attr('data-inputid');
                var elfinderUrl = '/elfinder/popup/';

                var triggerUrl = elfinderUrl + updateID;
                $.colorbox({
                    href: triggerUrl,
                    fastIframe: true,
                    iframe: true,
                    width: '70%',
                    height: '55%'
                });

            });

            function processSelectedFile(filePath, requestingField) {
                filePath = location.origin + "/storage/photos/" + filePath
                $('#' + requestingField).val(filePath).trigger('change');
            }
            var options = {
                filebrowserBrowseUrl: '/elfinder/ckeditor',
                extraPlugins: 'youtube,videoembed,codesnippet',
                height: '300px'
            };
        </script>
    @else
        <script>
            var options = {
                extraPlugins: 'youtube,videoembed,uploadfile,codesnippet',
                filebrowserImageBrowseUrl: '/filemanager?type=Images',
                filebrowserImageUploadUrl: '/filemanager/upload?type=Images&_token=',
                filebrowserBrowseUrl: '/filemanager?type=Files',
                filebrowserUploadUrl: '/filemanager/upload?type=Files&_token=',
                height: '300px'
            };
        </script>
    @endif
</head>
<style>
	ul>li{
		list-style: none!important;
	}
</style>

<body class=" sidebar-mini">
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i
                            class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="/user/profile" class="nav-link">Profile</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                        class="nav-link">Logout</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-expanded="false">
                        Lang
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        @foreach ($langArray as $lang)
                            <a class="dropdown-item" href="{{ route('lang', ['lang' => $lang]) }}">
                                {{ config('langCode.codes')[$lang] }} </a>
                        @endforeach
                        {{-- <a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Something else here</a> --}}
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <ul class="">

                    </ul>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                </li>
            </ul>
        </nav>
