

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield("title")</title>

    {{-- CSS Bundle --}}
    <link rel="stylesheet" href="{{ asset('build/assets/app.b19aa85f.css') }}">

    {{-- QUICKSAND css --}}
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand">

    {{-- page default css --}}
    <link rel="stylesheet" href="{{ asset('css/master/master.css') }}">

    {{-- @vite(["resources/scss/app.scss", "resources/js/app.js"]) --}}

    @section("dependencies")
        {{-- dependencies here! --}}
    @show

</head>
    <body>

        @section("content")
        @show


        {{-- JS Bundle --}}
        <script type="text/javascript" src="{{ asset('build/assets/app.43df0062.js') }}"></script>

    </body>
</html>
