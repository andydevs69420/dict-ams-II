@extends('layouts.app')

@section("style")
   <link rel="stylesheet" href="{{ asset('scss/login/login.css') }}">
@endsection


@section('content')

<div id="signin__bg" class="d-block position-relative w-100 h-100">
    {{-- overlay --}}
    <div id="signin__overlay" class="d-block position-absolute top-0 w-100 h-100"></div>

    {{-- panel --}}
    <div id="signin__expanded-panel" class="ms-0 ms-sm-5 py-5 border shadow-sm">
        {{-- signin label --}}
        <h2 id="signin__label" class="px-3 h2 fw-bold">SIGNIN</h2>

        <form class="mt-5 px-3" method="POST" action="{{ route('login') }}">
            @csrf
            <div class="container-fluid px-0">
                <div class="row">
                    
                    {{-- email --}}
                    <div class="col-12 pb-2">
                        <label for="email" class="text-md-end">{{ __('Email Address') }}</label>
                        <span class="input-group">
                            <span class="input-group-text text-muted">
                                <i class="bi bi-envelope-fill"></i>
                            </span>
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="email" autofocus>
                        </span>
                        @error('email')
                            <span class="d-block invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>

                    <div class="col-12 py-2">
                        <label for="password" class="text-md-end">{{ __('Password') }}</label>
                        <span class="input-group">
                            <span class="input-group-text text-muted">
                                <i class="bi bi-lock-fill"></i>
                            </span>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="password">
                        </span>
                        @error('password')
                            <span class="d-block invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>

                    <div class="col-12">
                        <span class="form-check">
                            <input id="signin__remember-me" class="form-check-input" name="remember" type="checkbox" />
                            <label htmlFor="signin__remember-me" class="form-check-label" style="user-select: none;">Remember me</label>
                        </span>
                    </div>

                    <div class="col-12 py-2">
                        <span class="d-inline-block w-100 shadow-sm">
                            <button class="btn btn-success w-100" type="submit">
                                {{ _("SIGNIN") }}
                            </button>
                        </span>
                    </div>

                    <div class="col-12 py-2 text-center">
                        @if (Route::has('password.request'))
                            <a class="btn btn-link text-decoration-none" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>

                    <div class="col-12 pt-2 text-center">
                        <div class="d-inline-block rounded-pill shadow">
                            <a class="btn btn-sm btn-dark px-3 py-1 rounded-pill" href="{{ route('register') }}">
                                <span class="text-light">signup</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

@endsection
