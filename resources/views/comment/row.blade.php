<tr>
	<td align="center">{{$no ?? ''}}</td>
	<td align="center">{{date('d/m/Y',strtotime($c->created_at))}}</td>
	<td>
		@if(!empty($c->post))
		<a href="{{ route('level1',['slug'=>$c->post->slug]) }}">
			{{ $c->post->title ?? '' }}
		</a>
		@endif
	</td>
	<td>
		@if($level == 2) ---- @elseif($level == 1) -- @endif
		{{ $c->content ?? '' }}
	</td>
	<td width="150px">
		Name:  {{ $c->name ?? '' }}
		<br> Phone:  {{ $c->phone ?? '' }}
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
			{{ $c->status ?? ''  }}
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
</tr>
