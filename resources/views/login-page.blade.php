@extends("master.master-layout")


{{-- PAGE TITLE ! --}}
@section("title", "AMS | login")

@section("dependencies")
    <link rel="stylesheet" href="{{ asset('css/login-page/login-page.css') }}">
@endsection

@section("content")
    <main id="login__main" class="d-block w-100 h-100">

        <div id="login__overlay-wrapper" class="d-block position-relative">

            <div id="login__back-drop-bg" class="d-block position-absolute"></div>
            <div id="login__back-drop-fg" class="d-block position-absolute shadow"></div>

            <div id="login__content-area" class="d-block d-md-flex flex-column align-items-center">
                <div class="container-fluid px-0 px-md-1">
                    <div class="row d-flex justify-content-center py-0 py-md-4">
                        <div class="col-12 col-md-6 text-center">
                            <div class="container-fluid px-0 py-5 py-md-2">
                                <div class="row">
                                    <div class="col-12 text-start">
                                        <div class="d-flex flex-row flex-nowrap align-items-center mb-5" role="text">
                                            <img id="login__dict-icon" class="img shadow" src="{{ asset('images/dict.png') }}" alt="dict-icon">
                                            <div class="d-block">
                                                <span id="login__dict-brand" class="d-block" role="text">
                                                    DICT
                                                    <span id="login__dict-model" role="text">AMS</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 text-start">
                                        <span id="login__signin-label" class="d-inline-block my-1 text-dark" role="text">{{ __("SIGNIN") }}</span>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                            <input class="form-control bg-light" type="email" placeholder="{{ __('email') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group position-relative mt-0 mb-3 shadow">
                                            <span class="input-group-text position-absolute text-muted">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <span id="login__btn-wrapper" class="d-inline-block w-100 shadow">
                                            <button class="btn btn-primary w-100">
                                                {{ __("login") }}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 d-none d-md-block text-center">c</div>
                    </div>
                </div>
            </div>

        </div>

    </main>
@endsection


