@php
$id = '#'.$key;
$dataInput = "input".$key;
$type = isset($type) ? $type : "";
$width =  isset($width) ? $width : "100%";
$basic = isset($basic) ? true : false;
if(empty($value)){
	switch ($type) {
		case 'meta':
		$value = isset($data['meta'][$key]) ? $data['meta'][$key] : '';
		break;
		case 'configs':
		$value = isset($data['configs'][$key]) ? $data['configs'][$key] : '';
		break;
		case 'user':
		$value = isset($data['user']->$key) ? $data['user']->$key : '';
		break;
		default:
		$value = isset($data['post']->$key) ? $data['post']->$key : '';
		break;
	}
}
@endphp

@if(isset($configs['filemanager']) && $configs['filemanager'] == 'elfinder')
@if($basic)
<div class="input-group">
	<span class="input-group-btn">
		<a data-inputid="{{ $key }}" class="popup_selector btn btn-primary">
			<i class="fa fa-picture-o"></i> Choose
		</a>
	</span>
	<input id="{{ $key }}" class="form-control inputfile" type="text" name="{{ $key }}" value="{{ $value }}">
</div>
<img id="holder" style="margin-top:15px;max-height:100px;">
<div class="form-group">
	{{-- <img src="{{ $value ?? ''}}" style="width: {{ $width ?? '100%' }};height: auto;"> --}}
</div>
@else
<div class="form-group">
	<label  title="{{ $key ?? '' }}" for="inputEmail3" class="col-sm-2 control-label">{{$label ?? '' }}</label>
	<div class="col-sm-10">
		<div class="input-group">
			<span class="input-group-btn">
				<a data-inputid="{{ $key }}" class="popup_selector btn btn-primary">
					<i class="fa fa-picture-o"></i> Choose
				</a>
			</span>
			<input id="{{ $key }}" class="form-control inputfile" type="text" name="{{ $key }}" value="{{ $value }}">
		</div>
		<img id="holder" style="margin-top:15px;max-height:100px;">
	</div>
	{{-- <div class="col-sm-6">
		<img class="{{ $key }}"  src="{{$value ?? '' }}" style="width: {{ $width ?? '100%' }};height: auto;">
	</div> --}}
</div>

@endif

@else
@if($basic)
<div class="input-group">
	<span class="input-group-btn">
		<a id="{{ $key }}" data-input="{{ $dataInput }}" data-preview="holder" class="btn btn-primary">
			<i class="fa fa-picture-o"></i> Choose
		</a>
	</span>
	<input id="{{ $dataInput }}" class="form-control inputfile" type="text" name="{{ $key }}" value="{{ $value }}">
</div>
<img id="holder" style="margin-top:15px;max-height:100px;">
<div class="form-group">
	<div class="col-sm-12">
		<img src="{{ $value ?? ''}}" style="width: {{ $width ?? '100%' }};height: auto;">
	</div>
</div>
@else
<div class="form-group">
	<label for="inputEmail3" class="col-sm-2 control-label">{{ $label ?? ''}}</label>
	<div class="col-sm-4">
		<div class="input-group">
			<span class="input-group-btn">
				<a id="{{ $key }}" data-input="{{ $dataInput }}" data-preview="holder" class="btn btn-primary">
					<i class="fa fa-picture-o"></i> Choose
				</a>
			</span>
			<input id="{{ $dataInput }}" class="form-control inputfile" type="text" name="{{ $key }}" value="{{ $value }}">
		</div>
		<img id="holder" style="margin-top:15px;max-height:100px;">
	</div>
	<div class="col-sm-6">
		<img class="{{ $key }}"  src="{{$value ?? '' }}" style="width: {{ $width ?? '100%' }};height: auto;">
	</div>
</div>
@endif
<script type="text/javascript">
	$('{{ $id }}').filemanager('file');
</script>
@endif
