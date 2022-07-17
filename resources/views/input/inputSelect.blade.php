@php
$type = isset($type) ? $type : "";
$options['class'] = 'form-control';
if(isset($select) && $select)
	$options['class'] .=' select';
$default = isset($default) ? $default : 0;
if(empty($value)){
	switch ($type) {
		case 'meta':
		$value = isset($data['meta'][$key]) ? $data['meta'][$key] : $default;
		break;
		case 'configs':
		$value = isset($data['configs'][$key]) ? $data['configs'][$key] : '';
		break;
		default:
		$value = isset($data['post']->$key) ? $data['post']->$key : $default;
		break;
	}
}
@endphp
@if(isset($formStyle) && $formStyle =='basic')
<div class="form-group row">
	<label title="{{ $key ?? '' }}" for="inputEmail3" class="col-sm-12 control-label">{{ $label ?? ''}}</label>
	<div class="col-sm-12">
		{{Form::select($key, $array,$value,$options)}}
		@if (isset($errors) && $errors->has($key))
		<span class="invalid-feed" role="alert">
			<strong>{{ $errors->first($key) }}</strong>
		</span>
		@endif
	</div>
</div>
@else
<div class="form-group row">
	<label title="{{ $key ?? '' }}" for="inputEmail3" class="col-sm-2 control-label">{{ $label ?? ''}}</label>
	<div class="col-sm-10">
		{{Form::select($key, $array,$value,$options)}}
		@if (isset($errors) && $errors->has($key))
		<span class="invalid-feed" role="alert">
			<strong>{{ $errors->first($key) }}</strong>
		</span>
		@endif
	</div>
</div>
@endif