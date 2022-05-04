<div class="card">
	<div class="card-header"  id="header-b1">
		<h3 class="box-title">Cấu hình page</h3>
	</div>
	<form  class="form-horizontal"  method="post" action="{{route('menu.updateContent',['menu'=>$data['post']->id])}}"  enctype="multipart/form-data">
		<input type="hidden" name="typeSubmit" id="typeSubmit" value="update">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputImage',['label'=>'Thumb','key'=>'thumb','width'=>'200px','type'=>'meta'])
			@include('phobrv::input.inputTextarea',['label'=>'Content','key'=>'content'])
		</div>
		<div class="card-footer">
			{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary')) }}
		</div>
	</form>
</div>
