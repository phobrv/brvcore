@extends('phobrv::adminlte3.layout_collapse')

@section('header')
<a href="{{route('post.index')}}"  class="btn btn-default float-left">
	<i class="fa fa-backward"></i> @lang('Back')
</a>

{!! $data['boxTranslate'] ?? '' !!}

@endsection

@section('content')
<div class="nav-tabs-custom">
	<ul class="nav nav-tabs" id="myTab" role="tablist">
		<li class="nav-item" role="presentation">
			<a class="nav-link active"  href="#tab_1" data-toggle="tab">Main</a>
		</li>
		<li class="nav-item" role="presentation">
			<a class="nav-link"  href="#tab_2" data-toggle="tab">Meta</a>
		</li>
	</ul>
	<div class="tab-content" id="myTabContent">
		<div class="tab-pane fade show active" id="tab_1">
			@include('phobrv::post.components.main')
		</div>
		@isset($data['post'])
		<div class="tab-pane" id="tab_2">
			@include('phobrv::post.components.meta')
		</div>
		@endif
	</div>
</div>


@endsection

@section('styles')
<style type="text/css">
	#listTagShow .btn-flat{
		margin-top: 3px;
		margin-bottom: 5px;
	}
	#listTagShow .show{
		position: relative;
		padding-right: 15px;
		float: left;
	}
	#listTagShow .show i{
		position: absolute;
		z-index: 1;
		top: -5px;
		right: 3px;
		color: red;
	}
</style>
@endsection

@section('scripts')
<script type="text/javascript">
	window.onload = function() {
		if($('textarea[name="content"]').length > 0)
			CKEDITOR.replace('content', options);
	};

	$(function(){
		setInterval(function(){ updatePostAuto(); }, 30000);
	})

	function updatePostAuto(){
		var content = CKEDITOR.instances['content'].getData();
		$("#content_draft").val(content);
		var action_type = $("#action_type").val();
		var data = $('#formSubmit').serializeArray();
		var id =  $("#id_post").val();
		$.ajax({
			headers : { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
			url:"{{route('post.autoUpdatePostContent')}}",
			method:"POST",
			data:{data:data},
			success:function(output){
				console.log(output);
			}
		});
	}
	function addTag(){
		e.preventDefault()
		var tag = document.getElementById("tags");
		var tagContent = tag.value;
		console.log(tagContent);
	}

	function addTag(){
		var tagContent = $('#taginput').val();
		console.log(tagContent);
		if(tagContent != ""){
			var now = new Date();
			var numberTag = now.getTime();
			var stringHidden = '<span class="tag'+numberTag+'"> <input type="hidden" name="tag[]" value="'+tagContent+'"></span>';
			var stringShow =  '<span class="show tag'+numberTag+'"> <span class="btn bg-purple btn-flat ">'+tagContent+'</span>'+
			'<i onclick="removeClass('+ "'tag"+numberTag+"'" +')" class="fa fa-fw fa-times-circle"></i> </span>';
			document.getElementById('listTagHidden').innerHTML +=stringHidden;
			document.getElementById('listTagShow').innerHTML +=stringShow;
			$('#taginput').val("");
		}
	}

	function removeClass(name){
		console.log(name);
		$('.'+name).remove();

	}

	$(function(){
		$('#taginput').keyup(function(){
			var query = $(this).val();
			if(query != ''){
				$.ajax({
					headers : { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
					url:"{{route('post.tagSearchAjax')}}",
					method:"POST",
					data:{query:query},
					success:function(data){
						console.log(data);
						$('#listSearch').fadeIn();
						$('#listSearch').html(data);
					}
				});
			}
		});
	});

	$(document).on('click', '#listSearch li', function(){
		$('#taginput').val($(this).text());
		$('#listSearch').fadeOut();
	});
	$('.MenuForm').submit(function(e){
		e.preventDefault();

		var data = {};
		var getData = $(this).serializeArray();
		for(var i=0;i<getData.length;i++){
			if(getData[i]['name']!='_token')
				data[getData[i]['name']] = getData[i]['value'];
		}
		var editors = $(this).find('textarea');
		for(var j=0;j<editors.length;j++)
		{
			var name = editors[j].name;
			if(CKEDITOR.instances[name])
				data[name] = CKEDITOR.instances[name].getData();
		}
		$.ajax({
			headers : { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
			url: '{{URL::route("menu.updateMetaAPI")}}',
			type: 'POST',
			data: {data: data},
			success: function(output){
				// console.log(output);
				alertOutput(output['msg'],output['message'])
			}
		});
	})
</script>
@endsection
