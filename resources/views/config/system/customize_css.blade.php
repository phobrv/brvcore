<div class='card'>
	<form  class="form-horizontal ConfigForm"  enctype="multipart/form-data">
		<input type="hidden" name="type" value="web">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputSelect',['label'=>'Trạng thái sử dụng','key'=>'customize_css_active','array'=>['0'=>'No','1'=>'Yes'],'type'=>'configs'])
			@include('phobrv::input.inputTextarea',['label'=>'Nội dung file customize.css','key'=>'customize_css','row'=>'20','type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>
