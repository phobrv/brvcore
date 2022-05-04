<form class="form-horizontal MenuForm"  enctype="multipart/form-data">
	<input type="hidden" name="menu_id" value="{{ $data['post']->id }}">
	@csrf
	<div class="card-body">
		@include('phobrv::input.label',['label'=>'Seo Meta'])
		@include('phobrv::input.inputText',['label'=>'Meta Title','key'=>'meta_title','type'=>'meta'])
		@include('phobrv::input.inputText',['label'=>'Meta Description','key'=>'meta_description','type'=>'meta'])
		@include('phobrv::input.inputText',['label'=>'Meta Keywords','key'=>'meta_keywords','type'=>'meta'])
	</div>
	<div class="card-footer">
		{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary')) }}
	</div>
</form>
