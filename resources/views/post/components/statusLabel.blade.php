<a id="status{{ $post->id }}" href="javascript:changeStatus('{{ $post->id }}')">
	@if($post->status  == 1)
	<i class="fa fa-check" style="color:green;" title="Active"></i>
	@elseif ($post->status == 2)
	<i class="fa fa-star" style="color:orange;" title="Hot"></i>
	@else
	<i class="fa fa-times-circle" style="color:red" title="Private"></i>
	@endif
</a>