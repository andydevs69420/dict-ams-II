<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
 | Wrapper
 */
Route::get("/{route?}", function () {
    return view("wrapper");
})->where("route", ".*");


/*
 |----------------------
 | Get roles           |
 |----------------------
 |
 */
Route::get("/conn/roles", function() {
    return json_encode(\App\Models\Role::all());
});


/*
 |-----------
 | Signin   |
 |-----------
 |
 */
Route::controller(\App\Http\Controllers\SignupController::class)->group(function() {
    Route::post("/conn/signup", "onSignup");
});
