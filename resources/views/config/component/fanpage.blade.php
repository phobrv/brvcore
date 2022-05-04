<div class='card'>
	<form  class="form-horizontal ConfigForm" enctype="multipart/form-data">
		<input type="hidden" name="type" value="component">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputText',['label'=>'Title','key'=>'box1_title','type'=>'configs'])
			@include('phobrv::input.inputTextarea',['label'=>'Code fanpage','key'=>'code_fanpage','type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>