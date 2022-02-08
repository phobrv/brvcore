@php
$options = [];
$options['class'] = 'form-control';
$options['rows'] = $row ?? '3';
if(isset($required) && $required )
	$options['required'] = 'required';
$type = isset($type) ? $type : "";
$style = isset($style) ? $style : "full";
if(empty($value)){
	switch ($type) {
		case 'meta':
		$value = isset($data['meta'][$key]) ? $data['meta'][$key] : '';
		break;
		case 'configs':
		$value = isset($data['configs'][$key]) ? $data['configs'][$key] : '';
		break;
		default:
		$value = isset($data['post']->$key) ? $data['post']->$key : '';
		break;
	}
}
@endphp
@if($style == "full")
<div class="form-group">
	<label title="{{ $key ?? '' }}" for="inputEmail3" class="col-sm-2 control-label"> {{ $label ?? ''}} </label>
	<div class="col-sm-10">
		{{ Form::textarea($key,$value,$options) }}
	</div>
</div>
@elseif($style == 'short')
<label  title="{{ $key ?? '' }}>{{ $label ?? ''}}</label>
{{ Form::textarea($key,$value,$options) }}
@endif
