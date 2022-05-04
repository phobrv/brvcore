<div class='card'>
	<form  class="form-horizontal ConfigForm" enctype="multipart/form-data">
		<input type="hidden" name="type" value="component">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputText',['label'=>'Title','key'=>'snew_title','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Số lượng bài viết','key'=>'snew_number','inputType'=>'number','type'=>'configs'])
			@include('phobrv::input.inputSelect',['label'=>'Nhóm bài viết','key'=>'snew_term','array'=>$arrayCategory,'type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>