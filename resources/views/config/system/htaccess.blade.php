@if(!empty($data['configs']['htaccess']))
<div class='card'>
	<form  class="form-horizontal ConfigForm"  enctype="multipart/form-data">
		<input type="hidden" name="type" value="web">
		@csrf
		<div class="card-body">
			<label class="font16"> Nội dung file .htaccess </label>
			{{ Form::textarea('htaccess',old('htaccess',isset($data['configs']['htaccess']) ? $data['configs']['htaccess'] : ''),array('class'=>'form-control','placeholder'=>'Nhập htaccess','rows'=>'20')) }}
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>
@endif