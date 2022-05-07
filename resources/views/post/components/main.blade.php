<div class="card">
	<div class="card-header">
		<a href="#" onclick="save()"  class="btn btn-primary float-left mr-2">
			<i class="fas fa-save"></i> @lang('Save & Close')
		</a>
		<a href="#" onclick="update()"  class="btn btn-warning float-left">
			<i class="fa fa-wrench"></i> @lang('Update')
		</a>
	</div>
	<div class="card-body">
		<form class="form-horizontal" id="formSubmit" method="post" action="{{isset($data['post']) ? route('post.update',array('post'=>$data['post']->id)) : route('post.store')}}"  enctype="multipart/form-data">
			@csrf
			@isset($data['post']) @method('put') @endisset
			<input type="hidden" id="typeSubmit" name="typeSubmit" value="">
			<div class="row">
				<div class="col-md-8">
					@include('phobrv::input.inputSelect',['label'=>'Status','key'=>'status','array'=>['0'=>'Private','1'=>'Active','2'=>'Hot']])
					@isset($data['post'])
					@include('phobrv::input.inputText',['label'=>'Url','key'=>'slug','check_auto_gen'=>'true'])
					@endif
					@include('phobrv::input.inputText',['label'=>'Title','key'=>'title','required'=>true])
					@include('phobrv::input.inputText',['label'=>'Description','key'=>'excerpt'])
					@isset($data['post'])
					@include('phobrv::input.inputText',['label'=>'Create date','key'=>'created_at','datetime'=>true,'value'=>date('Y-m-d H:i:s',strtotime($data['post']->created_at))])
					@endif
					@include('phobrv::input.inputTextarea',['label'=>'Nội dung','key'=>'content','style'=>'short'])
				</div>
				<div class="col-md-4">
					@include('phobrv::input.inputImage',['key'=>'thumb','basic'=>true])
					<hr>
					<div class="form-group">
						<div class="col-sm-12">
							<label  class="font16">Catergorys</label>
						</div>
						@isset($data['categorys'])
						<ul>
							@foreach($data['categorys'] as $cate)
							<li style="list-style: none!important;">
								<input type="checkbox" name="category[]" value="{{$cate->id}}" @if(in_array($cate->id,$data['arrayCategoryID'])) checked @endif> {{$cate->name}}
							</li>
							@if(isset($cate->child))
							@foreach($cate->child as $c)
							<li style="list-style: none!important;padding-left: 30px;">
								<input type="checkbox" name="category[]" value="{{$c->id}}" @if(in_array($c->id,$data['arrayCategoryID'])) checked @endif> {{$c->name}}
							</li>
							@endforeach
							@endif
							@endforeach
						</ul>
						@endisset
					</div>
					<hr>
					<div id="listTagHidden">
						@if(isset($data['tags']))
						@foreach($data['tags'] as $key => $tag )
						<span class="tag{{$key}}">
							<input  type="hidden" name="tag[]" value="{{$tag}}">
						</span>
						@endforeach
						@endif
					</div>
					<hr>
					<label class="font16">Tags</label>
					<div class="form-group" id="listTagShow">
						@isset($data['tags'])
						@foreach($data['tags']  as $key => $tag )
						<span class="show tag{{$key}}">
							<span class="btn bg-purple btn-flat ">{{$tag}}</span>
							<i onclick="removeClass('tag{{$key}}')" class="fa fa-fw fa-times-circle"></i>
						</span>
						@endforeach
						@endisset
					</div>
					<div class="form-group">
						{{Form::text('taginput',old('taginput',''),array('class'=>'form-control','placeholder'=>'Nhập tag cần thêm','id'=>'taginput')) }}
					</div>
					<div id="listSearch"><br></div>
					<div class="form-group">
						<a class="btn-primary btn pull-right" onclick="addTag()">Add Tag</a>
					</div>
				</div>
			</div>
			<button id="btnSubmit" style="display: none" type="submit" ></button>
			@php if(isset($data['post'])) $action = 'update'; else $action = 'create';   @endphp
			<input type="hidden" name="content_draft" id="content_draft">
			<input type="hidden" name="id_post" id="id_post" value="@isset($data['post']){{$data['post']->id}}@endif">
		</form>
		<div  class="col-md-4">
			
		</div>
	</div>
	<div class="card-footer " style="margin-top: 20px;" >
		<a href="#" onclick="save()"  class="btn btn-primary float-left mr-2">
			<i class="fas fa-save"></i> @lang('Save & Close')
		</a>
		<a href="#" onclick="update()"  class="btn btn-warning float-left">
			<i class="fa fa-wrench"></i> @lang('Update')
		</a>
	</div>
</div>
