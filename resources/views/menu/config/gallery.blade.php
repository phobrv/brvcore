<div class="card">
	<div class="card-header"  id="header-b1">
		<h3 class="box-title">Cấu hình page</h3>
	</div>
	<form class="form-horizontal MenuForm"  enctype="multipart/form-data">
		<input type="hidden" name="menu_id" value="{{ $data['post']->id }}">
		@csrf
		<div class="card-body">
			@include('phobrv::input.inputText',['label'=>'Số lượng album','key'=>'gallery_number','input_type'=>'number','type'=>'meta'])
			@isset($data['meta']['gallery_number'])
			@for($i=0;$i<$data['meta']['gallery_number'];$i++)
			@php
			$thumb = "gallery".$i."_thumb";
			$link = "gallery".$i."_link";
			$title = "gallery".$i."_title";
			@endphp
			<label for="">No {{ $i+1 }} </label>
			@include('phobrv::input.inputText',['label'=>'Title','key'=>$title,'type'=>'meta'])
			@include('phobrv::input.inputText',['label'=>'Link album','key'=>$link,'type'=>'meta'])
			@include('phobrv::input.inputFile',['label'=>'Thumb','key'=>$thumb,'width'=>'200px','type'=>'meta'])

			@endfor
			@endif
		</div>
		<div class="card-footer">
			{{ Form::submit('Lưu cấu hình',array('class'=>'btn btn-primary')) }}
		</div>
	</form>
</div>
