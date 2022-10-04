@extends('layouts.app')


@section("style")
    <link rel="stylesheet" href="{{ asset('scss/register/register.css') }}">
@endsection

@section('content')

<div class="d-block d-sm-flex justify-content-center align-items-center w-100 h-100">

    <div class="signup__card card py-5 py-sm-0 border-0 rounded-0 shadow-sm">

        {{-- custom header --}}
        <div id="signup__header" class="d-block p-0 p-sm-3">
            <h2 class="px-3 px-sm-0 h2 fw-bold">SIGNUP</h2>
            <small class="d-none d-sm-inline-block small text-light">DICT ams signup page</small>
        </div>

        <div class="signup__card-body card-body border-0">
            <form class="mt-4 mt-sm-0" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="container-fluid px-0 py-0 py-sm-3">
                    <div class="row">

                        {{-- last name --}}
                        <div class="col-6 pb-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-person-circle"></i>
                                </span>
                                <input id="lastname" type="text" class="form-control form-control-sm @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" required autocomplete="lastname" placeholder="lastname" autofocus>
                            </span>

                            @error('lastname')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- first name --}}
                        <div class="col-6 pb-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-person-circle"></i>
                                </span>
                                <input id="firstname" type="text" class="form-control form-control-sm @error('firstname') is-invalid @enderror" name="firstname" value="{{ old('firstname') }}" required autocomplete="firstname" placeholder="firstname">
                            </span>

                            @error('firstname')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- email --}}
                        <div class="col-12 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="email">
                            </span>

                            @error('email')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{--password --}}
                        <div class="col-6 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-lock-fill"></i>
                                </span>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="password">
                            </span>

                            @error('password')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- confirm password --}}
                        <div class="col-6 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-check-circle-fill"></i>
                                </span>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="confirm password">
                            </span>
                        </div>

                        {{-- division --}}
                        <div class="col-12 col-sm-6 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-building"></i>
                                </span>
                                <select id="division" class="form-select form-select-sm" name="division">
                                    <option value="" hidden selected>--select division--</option>
                                    @foreach (\App\Models\Division::all() as $division)
                                        <option value="{{ $division->division_id }}">{{$division->division_name}}</option>
                                    @endforeach
                                </select>
                            </span>

                            @error('division')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- office --}}
                        <div class="col-12 col-sm-6 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </span>
                                <select id="office" class="form-select form-select-sm" name="office" required>
                                    <option value="" hidden selected>--select office--</option>
                                    @foreach (\App\Models\Office::all() as $office)
                                        <option value="{{ $office->office_id }}">{{$office->office_name}}</option>
                                    @endforeach
                                </select>
                            </span>

                            @error('office')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- role --}}
                        <div class="col-12 col-sm-6 py-2">
                            <span class="input-group input-group-sm">
                                <span class="input-group-text text-muted">
                                    <i class="bi bi-universal-access"></i>
                                </span>
                                <select id="role" class="form-select form-select-sm" name="role" required>
                                    <option value="" hidden selected>--select role--</option>
                                    @foreach (\App\Models\Role::all() as $role)
                                        <option value="{{ $role->role_id }}">{{$role->role_name}}</option>
                                    @endforeach
                                </select>
                            </span>

                            @error('role')
                                <span class="d-block invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        {{-- signup btn --}}
                        <div class="col-12 col-sm-3 offset-0 offset-sm-3 py-2 text-right">
                            <span class="d-inline-block w-100 shadow-sm">
                                <button class="btn btn-sm btn-success w-100" type="submit">
                                    {{ _("SIGNUP") }}
                                </button>
                            </span>
                        </div>

                        {{-- signin btn --}}
                        <div class="col-4 col-sm-3 offset-8 offset-sm-9 py-2 text-right">
                            <span class="d-inline-block w-100 shadow-sm">
                                <a class="btn btn-sm btn-dark w-100" type="submit" href="{{ route('login') }}">
                                    {{ _("SIGNIN") }}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
