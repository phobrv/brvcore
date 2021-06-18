<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>{{ config('constants.site_title', 'Admin Page') }}</title>
<link rel="shortcut icon" href="@if( config('constants.site_icon') ) {{ asset('storage/'.config('constants.site_icon') ) }} @else {{ asset('favicon.ico') }} @endif">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="stylesheet" href="{{asset('/vendor/phobrv/css/admin.css')}}">
<script src="{{asset('/vendor/phobrv/js/admin.js')}}"></script>
<script src="{{asset('/vendor/phobrv/ckeditor/ckeditor.js')}}"></script>
<script src="{{asset('/vendor/phobrv/ckeditor/config.js')}}"></script>

@if(isset($configs['filemanager']) && $configs['filemanager'] == 'elfinder')
<script src="{{asset('/vendor/phobrv/colorbox/jquery.colorbox-min.js')}}"></script>
<link rel="stylesheet" href="{{asset('/vendor/phobrv/colorbox/colorbox.css')}}">
{{-- <script type="text/javascript" src="/packages/barryvdh/elfinder/js/standalonepopup.js"></script> --}}
<script>
	$(document).on('click','.popup_selector',function (event) {
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
		filePath = location.origin+"/storage/photos/"+filePath
		$('#' + requestingField).val(filePath).trigger('change');
	}
	var options = {
		filebrowserBrowseUrl : '/elfinder/ckeditor',
		extraPlugins: 'youtube,videoembed',
		height: '300px'
	};
</script>
@else
<script>
	var options = {
		extraPlugins: 'youtube,videoembed,uploadfile',
		filebrowserImageBrowseUrl: '/filemanager?type=Images',
		filebrowserImageUploadUrl: '/filemanager/upload?type=Images&_token=',
		filebrowserBrowseUrl: '/filemanager?type=Files',
		filebrowserUploadUrl: '/filemanager/upload?type=Files&_token=',
		height: '300px'
	};
</script>
@endif

<style type="text/css">
ol li,ul li{
	list-style: none!important;
}
</style>