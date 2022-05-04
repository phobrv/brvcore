@php
$active = isset($active) ? "show ".$active : "";
@endphp
<div class="tab-pane fade {{ $active }}" id="{{ $id }}" role="tabpanel" aria-labelledby="{{ $id }}tab">
	@include($view)
</div>
