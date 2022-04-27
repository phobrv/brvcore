@extends('phobrv::layout.app')

@section('header')
<ul>
	<li>
		{{ Form::open(array('route'=>'comment.setDefaultSelect','method'=>'post')) }}
		<table class="form" width="100%" border="0" cellspacing="1" cellpadding="1">
			<tbody>
				<tr>
					<td style="text-align:center; padding-right: 10px;">
						<div class="form-group">
							{{ Form::select('select',$data['arr_status'],(isset($data['select']) ? $data['select'] : '0'),array('id'=>'choose','class'=>'form-control')) }}
						</div>
					</td>
					<td>
						<div class="form-group">
							<button id="btnSubmitFilter" class="btn btn-primary ">@lang('Filter')</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		{{Form::close()}}
	</li>
</ul>
@endsection

@section('content')
<div class="box box-primary">
	<div class="box-body">
		<table id="table-no-order" class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>{{__('Date')}}</th>
					<th>{{__('Post')}}</th>
					<th>{{__('Comment')}}</th>
					<th>{{__('Info')}}</th>
					<th>{{__('Status')}}</th>
					<th>{{__('Action')}}</th>
				</tr>
			</thead>
			<tbody>
				@if(!empty($data['comments']))
					@foreach($data['comments'] as $key => $value)
					@include('phobrv::comment.row',['c'=>$value,'no'=>$loop->index+1,'level'=>0])
					@if(!empty($data['comments'][$key]['child']))
						@foreach($data['comments'][$key]['child'] as $key2 => $val2)
						@include('phobrv::comment.row',['c'=>$val2,'no'=>'','level'=>1])
							@if(!empty($data['comments'][$key]['child'][$key2]['child']))
								@foreach($data['comments'][$key]['child'][$key2]['child'] as $key3 => $val3)
								@include('phobrv::comment.row',['c'=>$val3,'no'=>'','level'=>2])
								@endforeach
							@endif
						@endforeach
					@endif
					@endforeach
				@endif
			</tbody>

		</table>
	</div>
</div>
@endsection

@section('styles')
<style type="text/css">

</style>
@endsection

@section('scripts')
<script type="text/javascript">
	function destroy(form){
		var anwser =  confirm("Bạn muốn xóa bài viết này?");
		if(anwser){
			event.preventDefault();
			document.getElementById(form).submit();
		}
	}
	function changeStatus(id, obj){
		var result = confirm("Bạn có muốn thay đổi trạng thái của bài viết này?");
		if (result == true) {
			$.ajax({
				headers : { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				url: '{{URL::route("post.changeStatus")}}',
				type: 'POST',
				data: {id: id},
				success: function(output){
					console.log(output);
					if (output == 1){
						$(obj).css('color','blue');
						$(obj).html('');
						$(obj).append('<i class="fa fa-check-circle"></i>');
					} else{
						$(obj).css('color','red');
						$(obj).html('');
						$(obj).append('<i class="fa fa-minus-circle"></i>');
					}
				}
			});
		}
	}
</script>
@endsection
