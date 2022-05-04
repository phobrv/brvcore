<div class='card'>
	<form  class="form-horizontal ConfigForm" enctype="multipart/form-data">
		<input type="hidden" name="type" value="component">
		@csrf
		<div class="card-body">
			@include('phobrv::input.label',['label'=>'Phone'])
			@include('phobrv::input.inputImage',['label'=>'Icon Phone','key'=>'iconFix_img1','width'=>'100px','type'=>'configs'])
			@include('phobrv::input.text',['label'=>'Hotline number','value'=>$configs['hotline_number']])
			@include('phobrv::input.label',['label'=>'Icon 2'])
			@include('phobrv::input.inputImage',['label'=>'Icon 2','key'=>'iconFix_img2','width'=>'100px','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Link 2','key'=>'iconFix_link2','type'=>'configs'])
			@include('phobrv::input.label',['label'=>'Icon 3'])
			@include('phobrv::input.inputImage',['label'=>'Icon 3','key'=>'iconFix_img3','width'=>'100px','type'=>'configs'])
			@include('phobrv::input.inputText',['label'=>'Link 2','key'=>'iconFix_link3','type'=>'configs'])
		</div>
		<div class="card-footer">
			<button type="submit" class="btn btn-primary pull-right">@lang('Update')</button>
		</div>
	</form>
</div>
