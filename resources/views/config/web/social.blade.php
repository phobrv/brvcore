<div class='card'>
	<form class="form-horizontal ConfigForm" enctype="multipart/form-data">
		<input type="hidden" name="type" value="web">
		@csrf
		<div class="card-body">
			@include('phobrv::input.label',['label'=>'Facebook'])
			@include('phobrv::input.inputText',['label'=>'Fb app_id','key'=>'fb_app_id','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Fanpage','key'=>'company_fb','type'=>'configs'])
			@include('phobrv::input.inputTextarea',['label'=>'Code Fanpage','key'=>'code_fanpage','type'=>'configs'])
			@include('phobrv::input.label',['label'=>'Other'])
			@include('phobrv::input.inputText',['label'=>'Youtube','key'=>'company_youtube','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Twitter','key'=>'company_twitter','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Printer','key'=>'company_printer','type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>