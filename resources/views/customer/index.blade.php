@extends('phobrv::adminlte3.layout')
@section('header')
<a href="{{route('customeridea.create')}}"  class="btn btn-primary float-left">
    <i class="fa fa-edit"></i> @lang('Create new')
</a>
@endsection
@section('content')
<div class="card">
	<div class="card-body">
		<table id="example1" class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>{{__('Image')}}</th>
					<th>{{__('Customer')}}</th>
					<th>{{__('Content')}}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				@if($data['ideas'])
				@foreach($data['ideas'] as $r)
				<tr>
					<td align="center">{{$loop->index + 1}}</td>
					<td align="center">
						<img src="{{$r->thumb}}" width="100" height="100">
					</td>
					<td>{{$r->title}}</td>
					<td>{{$r->content}}</td>
					<td align="center">
						<a href="{{route('customeridea.edit',array('customeridea'=>$r->id))}}"><i class="fa fa-edit" title="Sửa"></i></a>
						&nbsp;&nbsp;&nbsp;
						<a style="color: red" href="#" onclick="destroy('destroy{{$r->id}}')"><i class="fa fa-times" title="Sửa"></i></a>
						<form id="destroy{{$r->id}}" action="{{ route('customeridea.destroy',array('customeridea'=>$r->id)) }}" method="post" style="display: none;">
							@method('delete')
		                    @csrf
		                </form>
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

@endsection

@section('scripts')

@endsection