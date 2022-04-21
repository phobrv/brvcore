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
		<table id="example1" class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>{{__('Date')}}</th>
					<th>{{__('Post')}}</th>
					<th>{{__('Comment')}}</th>
					<th>{{__('Info')}}</th>
					<th>{{__('Status')}}</th>
					<th>{{__('Action')}}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				@if($data['comments'])
				@foreach($data['comments'] as $c)
				<tr>
					<td align="center">{{$loop->index+1}}</td>
					<td align="center">{{date('d/m/Y',strtotime($c->created_at))}}</td>
					<td>
						<a href="{{ route('level1',['slug'=>$c->post->slug]) }}">
							{{ $c->post->title }}
						</a>
					</td>
					<td width="40%">
						{{ $c->content }}
					</td>
					<td>
						Name:  {{ $c->name }}
						<br> Phone:  {{ $c->phone }}
					</td>
					<td>
						@php
						if($c->status == 'success')
							$color = "green";
						elseif($c->status =='fail')
							$color = "red";
						else
							$color = "orange";
						@endphp
						<span style="background-color: {{ $color }}; padding: 4px; color:white;">
							{{ $c->status  }}
						</span>

					</td>
					<td align="center">
						<a href="{{ route('comment.changeStatus',['id'=>$c->id,'status'=>'success']) }}">
							<i style="color: green" class="fa fa-check-circle"></i>
						</a>
						&nbsp;&nbsp;&nbsp;
						<a href="{{ route('comment.changeStatus',['id'=>$c->id,'status'=>'fail']) }}">
							<i style="color: red" class="fa fa-minus-circle"></i>
						</a>

					</td>
					<td style="width: 50px;"  align="center">
						<a href="{{ route('comment.edit',['comment'=>$c->id]) }}">
							<i class="fa fa-edit" title=""></i>
						</a>

					</td>
				</tr>
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
