<div class='card'>
	<form  class="form-horizontal ConfigForm"  enctype="multipart/form-data">
		<input type="hidden" name="type" value="web">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputSelect',['label'=>'Filemanager','key'=>'filemanager','array'=>['0'=>'-','elfinder'=>'ElFinder','laravel'=>'File Manager Laravel'],'type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>

