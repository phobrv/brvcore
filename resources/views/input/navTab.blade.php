@php
	$active = isset($active) ? $active : "";
@endphp
<a class="nav-link {{ $active }}" id="{{ $id }}tab" data-toggle="pill" href="#{{ $id }}" role="tab" aria-controls="{{ $id }}" aria-selected="true">
	{{ $title }}
</a>
