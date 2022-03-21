@extends('phobrv::layout.app')

@section('header')
<a href="{{route('order.index')}}"  class="btn btn-default float-left">
	<i class="fa fa-backward"></i> @lang('Back')
</a>
@endsection

@section('content')
<div class="box box-primary">
	<form action="{{route('order.update',['order'=>$data['post']->id])}}" method="post"  class="form-horizontal">
		<div class="box-body">
			@csrf
			@method('put')
			@include('phobrv::input.inputSelect',['label'=>'Tình trạng đơn hàng','key'=>'status','array'=>config('brvreceive.statusLabel'),'default'=>'pedding'])
			@include('phobrv::input.inputText',['label'=>'Người mua','key'=>'name','readonly'=>'readonly'])
			@include('phobrv::input.inputText',['label'=>'Địa chỉ','key'=>'name','readonly'=>'readonly'])
			@include('phobrv::input.inputText',['label'=>'Phone','key'=>'phone','readonly'=>'readonly'])
			@include('phobrv::input.inputText',['label'=>'Ghi chú đơn hàng','key'=>'description'])
			<div class="form-group">
				<label for="inputEmail3" class="col-sm-2 control-label"> Content </label>
				<div class="col-sm-10">
					@if(!empty($data['post']->content))
					{!! $data['post']->content !!}
					@else
					Sản phẩm: <strong>{{ $data['meta']['product'] ?? '' }}</strong> <br>
					Số lượng: {{ $data['meta']['number'] ?? '0' }}
					@endif
				</div>
			</div>
		</div>
		<div class="box-footer">
			<button type="submit" class="btn btn-primary  pull-right">
				@lang('Update')
			</button>
		</div>
	</form>
</div>
@endsection

@section('styles')

@endsection

@section('scripts')

@endsection
