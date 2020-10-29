@extends('layouts.app')
@section('css')

    <link href="/css/page-login.css" rel="stylesheet">
<script>
        if ('serviceWorker' in navigator ) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
		}
			</script>
@endsection
@section('js')
    <script src="{{ mix('js/login.js') }}" ></script>
	
@endsection
@section('content')
    <div id="login"></div>
@endsection