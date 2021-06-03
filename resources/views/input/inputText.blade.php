@php
$options = [];
$options['placeholder'] = $label;
$options['class'] = 'form-control';
if(isset($datepicker) && $datepicker)
	$options['class'] = 'form-control datepicker';
if(isset($required) && $required )
	$options['required'] = 'required';
if(isset($readonly) && $readonly )
	$options['readonly'] = 'readonly';

$type = isset($type) ? $type : "";
$inputType = isset($inputType) ? $inputType : "text";

if((isset($data['meta']['auto_gen']) && $data['meta']['auto_gen']) || (!isset($data['meta']['auto_gen'])) )
	$autoGen = 1;
else
	$autoGen = 0;

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
@if(isset($formStyle) && $formStyle == 'basic')
<div class="form-group">
	<label for="{{ "id".$key }}">{{ $label }}</label>
	@if($inputType == 'text')
	{{ Form::text($key,$value,$options) }}
	@elseif($inputType == 'number')
	{{ Form::number($key,$value,$options) }}
	@endif
</div>
@else
<div class="form-group">
	<label for="inputEmail3" class="col-sm-2 control-label"> {{ $label }} </label>
	<div class="@isset($check_auto_gen) col-sm-7 @else col-sm-10 @endif">
		@if($inputType == 'text')
		{{ Form::text($key,$value,$options) }}
		@elseif($inputType == 'number')
		{{ Form::number($key,$value,$options) }}
		@endif
		@if ($errors->has($key) )
		<span class="invalid-feed" role="alert">
			<strong>{{ $errors->first($key) }}</strong>
		</span>
		@endif
	</div>
	@isset($check_auto_gen)
	<div class="col-sm-3">
		<input type="checkbox" id="auto_gen" name="auto_gen" value="1" {{ $autoGen == 1 ? 'checked' : ''}}  > Tạo theo tên
	</div>
	@endif
</div>
@endif