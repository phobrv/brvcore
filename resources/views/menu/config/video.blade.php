<div class="box box-primary">
	<div class="box-header" >
		<h3 class="box-title">Cấu hình page</h3>
	</div>
	<form class="form-horizontal MenuForm"  enctype="multipart/form-data">
		<input type="hidden" name="menu_id" value="{{ $data['post']->id }}">
		@csrf
		<div class="box-body">
			@include('phobrv::input.inputSelect',['label'=>'Video Group','key'=>'video_term_paginate','type'=>'meta','array'=>$arrayVideo])
			@include('phobrv::input.inputText',['label'=>'Số lượng video hiển thị','key'=>'video_number','inputType'=>'number','type'=>'meta'])
		</div>
		<div class="box-footer">
			{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary pull-right')) }}
		</div>
	</form>
</div>
