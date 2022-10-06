@extends('layouts.app')

@section('content')
<div class="container p-1 p-sm-3">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card border-0 rounded-0 shadow-sm">
                <div class="card-header border-0 bg-transparent">
                    <strong>
                        {{ __('Verify Your Email Address') }}
                    </strong>
                </div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </div>
                    @endif

                    {{ __('Before proceeding, please check your email for a verification link.') }}
                    {{ __('If you did not receive the email') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <span class="d-inline rounded shadow-sm">
                            <button type="submit" class="btn btn-sm btn-primary align-baseline">{{ __('click here to request another') }}</button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
