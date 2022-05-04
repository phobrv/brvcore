<div class="card">
	<div class="card-header" >
		<h3 class="box-title">Cấu hình page</h3>
	</div>
	<form class="form-horizontal MenuForm"  enctype="multipart/form-data">
		<input type="hidden" name="menu_id" value="{{ $data['post']->id }}">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputSelect',['label'=>'Product Group','key'=>'product_term_paginate','type'=>'meta','array'=>$arrayProductGroup])
			@include('phobrv::input.inputText',['label'=>'Số lượng sản phẩm hiển thị','key'=>'product_number','inputType'=>'number','type'=>'meta'])
			{{-- @include('phobrv::input.inputImage',['label'=>'Banner','key'=>'banner_image','width'=>'100%','type'=>'meta']) --}}
		</div>
		<div class="card-footer">
			{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary pull-right')) }}
		</div>
	</form>
</div>
