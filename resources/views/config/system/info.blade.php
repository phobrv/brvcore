@php 
	$icon_ok = '<i class="fas fa-check" style="color:green;"></i> ';
	$icon_false = '<i class="fas fa-times" style="color:red;"></i></i>';
	$arrayEx = ['BCMath','Ctype','cURL','DOM','Fileinfo','JSON','Mbstring','OpenSSL','PCRE','PDO','Tokenizer','XML'];
@endphp
<style type="text/css">
	ul li{
		list-style: none!important;
	}
</style>
<div class='card'>
	<div class="card-body">
		<div class="row">
			
			<div class="col-md-6">
				<ul>
					<li><strong>OS:</strong> {{ PHP_OS }}</li>
					<li>
						<strong>Webserver:</strong> {{ $_SERVER['SERVER_SOFTWARE'] }}
					</li>
					<li><strong>Laravel:</strong> {{ app()->version() }}</li>
					<li><strong>Database:</strong> Mysql</li>
					<li><strong>Timezone:</strong> {{ config('app.timezone') }}</li>
				</ul>
			</div>
			<div class="col-md-6">
				<ul>
					@php  
					$phpver = phpversion();  
					$icon = (substr($phpver,0,1) > 7)  ? $icon_ok : $icon_false;
					 @endphp
					<li> {!! $icon !!} PHP Version: {{ $phpver }} </li>
					@foreach($arrayEx as $ex)
					@php 
						$icon = (extension_loaded($ex)) ? $icon_ok : $icon_false;
					@endphp
					<li> {!! $icon !!} {{ $ex }} PHP Extension </li>
					@endforeach
				</ul>
			</div>
		</div>
	</div>
</div>
