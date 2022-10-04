<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    @vite("resources/sass/app.scss")

   
    @section("style")
        {{-- style --}}
    @show


    <style>
        html {
            width: auto;
            height: auto;
            background-color: #eeeeee;
        }

        body {
            width: 100vw !important;
            min-width: 280px;
            height: 100vh !important;
            min-height: 560px;
            overflow: hidden auto !important;
            background-color: transparent;
        }

    </style>
</head>
<body>
    <main id="app" class="d-block w-100 h-100">
        @section("content")
            {{-- content --}}
        @show
    </main>

    @viteReactRefresh
    @vite("resources/js/app.js")
</body>
</html>
