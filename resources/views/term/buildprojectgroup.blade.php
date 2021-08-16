@extends('phobrv::layout.app')

@section('header')
<h1>@lang('Building Project Group')</h1>
@endsection

@section('content')
<div class="row">
	<div class="col-md-5">
		<div class="box  box-primary">
			<div class="box-header">
				{{__('Create/Edit Group')}}
			</div>
			<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['term']) ? route('buildprojectgroup.update',array('buildprojectgroup'=>$data['term']->id)) : route('buildprojectgroup.store')}}">
				<div class="box-body">
					<input type="hidden" name="taxonomy" value="buildprojectgroup">
					@isset($data['term']) @method('put') @endisset
					@csrf
					<div class="form-group">
						<div class="col-sm-12">
							{{Form::text('name', old('name',isset($data['term']->name) ? $data['term']->name :'' ),['class'=>'form-control','placeholder'=>'Name','required'=>'required'])}}
							@if ($errors->has('slug') )
							<span class="invalid-feed" role="alert">
								<strong>{{ $errors->first('slug') }}</strong>
							</span>
							@endif
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-12">
							{{Form::textarea('description', old('description',isset($data['term']->description) ? $data['term']->description :'' ),['class'=>'form-control','placeholder'=>'Description','rows'=>'5'])}}
						</div>
					</div>
				</div>
				<div class="box-footer">
					<button class="pull-right btn btn-primary" type="submit">{{$data['submit_lable'] ?? ''}}</button>
				</div>
			</form>
		</div>
	</div>
	<div class="col-md-7">
		<div class="box box-primary">
			<div class="box-body">
				<table id="example1" class="table table-bordered table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						@isset($data['terms'])
						@foreach($data['terms'] as $r)
						<tr>
							<td>
								{{$r->name}}
							</td>
							<td>{{$r->description}}</td>
							<td align="center">
								<a href="{{route('buildprojectgroup.edit',array('buildprojectgroup'=>$r->id))}}"><i class="fa fa-edit" title="Sửa"></i></a>
								&nbsp;&nbsp;&nbsp;
								<a  href="{{route('buildproject.setGroupSelect',['id'=>$r->id])}}" ><i class="fa fa-cog" title="Config"></i></a>
								@if(count($r->posts)==0)
								&nbsp;&nbsp;&nbsp;
								<a style="color: red" href="#" onclick="destroy('destroy{{$r->id}}')"><i class="fa fa-times" title="Sửa"></i></a>
								<form id="destroy{{$r->id}}" action="{{ route('buildprojectgroup.destroy',array('buildprojectgroup'=>$r->id)) }}" method="post" style="display: none;">
									@method('delete')
									@csrf
								</form>
								@endif

							</td>
						</tr>
						@endforeach
						@endisset
					</tbody>

				</table>

			</div>
		</div>
	</div>
</div>

@endsection

@section('styles')

@endsection

@section('scripts')
<script type="text/javascript">
	function destroy(form){
		var anwser =  confirm("Bạn muốn xóa group này?");
		if(anwser){
			event.preventDefault();
			document.getElementById(form).submit();
		}
	}
</script>
@endsection