<div class="card">
	<div class="card-header"  id="header-b1">
		<h3 class="box-title">Cấu hình page</h3>
	</div>
	<form class="form-horizontal MenuForm"  enctype="multipart/form-data">
		<input type="hidden" name="menu_id" value="{{ $data['post']->id }}">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputSelect',['label'=>'Layout','key'=>'layout','type'=>'meta','array'=>['layout1'=>'Layout 1','layout2'=>'Layout 2','layout3'=>'Layout 3']])
			@include('phobrv::input.inputSelect',['label'=>'Chọn nhóm bài viết','key'=>'category_term_paginate','type'=>'meta','array'=>$arrayCategory])
			@include('phobrv::input.inputText',['label'=>'Số bài viết hiển thị','key'=>'category_number','inputType'=>'number','type'=>'meta'])
		</div>
		<div class="card-footer">
			{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary')) }}
		</div>
	</form>
</div>
