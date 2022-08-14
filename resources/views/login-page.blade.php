@extends("master.master-layout")


{{-- PAGE TITLE ! --}}
@section("title", "AMS | login")

@section("dependencies")
    <link rel="stylesheet" href="{{ asset('css/login-page/login-page.css') }}">
@endsection

@section("content")
    <main id="login__main" class="d-block position-relative w-100 h-100 bg-primary">

        <div id="login__overlay-wrapper" class="d-block position-absolute">

            {{-- SVG0!!! --}}
            <svg id="login__svg-design-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,154.7C640,107,800,53,960,42.7C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            {{-- SVG1!!! --}}
            <svg id="login__svg-design-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,42.7C640,32,800,64,960,106.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <div id="login__back-drop-bg" class="d-block position-absolute"></div>
            <div id="login__back-drop-fg" class="d-block position-absolute shadow"></div>

            <div id="login__content-area" class="card border-0 bg-transparent shadow">
                <div class="card-body">
                    <div class="container-fluid px-0">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-row flex-nowrap align-items-center mt-3 mb-5 mt-md-2">
                                    <img id="login__dict-icon" class="img shadow" src="{{ asset('images/dict.png') }}" alt="">
                                    <span id="login__vr" class="vr mx-3 opacity-100 bg-danger rounded"></span>
                                    <div class="d-block">
                                        <span id="login__dict-brand" class="d-block text-light" role="text">DICT</span>
                                        <span id="login__dict-model" class="d-block text-light" role="text">AMS-II</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="container-fluid px-0 mt-3 mb-2">
                                    <span id="login__signin-label" class="text-light" role="text">
                                        {{ __("SIGNIN") }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group position-relative mb-2 shadow">
                                    <span class="input-group-text position-absolute">
                                        <i class="fa fa-envelope text-primary"></i>
                                    </span>
                                    <input class="form-control bg-light" type="email" placeholder="{{ __('email') }}">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group position-relative my-2 shadow">
                                    <div class="input-group position-relative">
                                        <span class="input-group-text position-absolute">
                                            <i class="fa fa-lock text-primary"></i>
                                        </span>
                                        <input class="form-control bg-light" type="password" placeholder="{{ __('password') }}">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group position-relative my-2">
                                    <span id="login__btn-wrapper" class="d-inline-block w-100 shadow">
                                        <button class="btn btn-primary w-100">
                                            {{ __("SIGNIN") }}
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="container-fluid my-2 text-center">
                                    <span class="small text-light" role="text">
                                        Don't have an account? <a href="#">{{ __("signup") }}</a>
                                    </span>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="d-flex flex-row flex-nowrap align-items-center my-1">
                                    <hr class="w-50 border-light">
                                    <span class="px-1 text-light" role="text">or</span>
                                    <hr class="w-50 border-light">
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="container-fluid">
                                    <span class="d-block my-2 text-center" role="text">
                                        {{ __("visit us") }}
                                    </span>
                                    <div class="d-flex flex-row justify-content-evenly align-items-center">
                                        <a class="login__social-icon-wrapper text-primary rounded-circle shadow" href="https://web.facebook.com/DICTRegion10" target="_blank">
                                            <i class="login__social-icon fa-brands fa-facebook"></i>
                                        </a>
                                        <a class="login__social-icon-wrapper text-primary rounded-circle shadow" href="https://www.linkedin.com/company/dictgovph/" target="_blank">
                                            <i class="login__social-icon fa-brands fa-linkedin"></i>
                                        </a>
                                        <a class="login__social-icon-wrapper text-primary rounded-circle shadow" href="https://www.linkedin.com/company/dictgovph/" target="_blank">
                                            <i class="login__social-icon fa-brands fa-twitter"></i>
                                        </a>
                                        <a class="login__social-icon-wrapper text-success rounded-circle shadow" href="https://www.linkedin.com/company/dictgovph/" target="_blank">
                                            <i class="login__social-icon fa-brands fa-google"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </main>
@endsection

@section("javascript")
    <script type="text/javascript" src="{{ asset('js/particles-js/particles.js') }}"></script>
    <script type="text/javascript">
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load("login__main", "{{ asset('js/particles-js/particlesjs-config.json') }}", function() {
            return;
        });
    </script>
@endsection
