<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>AMS</title>
        @vite("resources/sass/app.scss")
    </head>
    <body class="antialiased">

        <div id="root" class="d-block w-100 h-100"></div>

        @viteReactRefresh
        @vite("resources/js/app.jsx")
    </body>
</html>
