<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;

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



Auth::routes(["verify" => true]);

/*
 |-----------------+
 | Logout route!   |
 |-----------------+
 */ 
Route::get("/logout", function() {
    if (Auth::check()) Auth::logout();
    return redirect()->to("/login");
})->middleware(["auth", "verified"]);

/*
 |--------------+
 | Role checker |
 |--------------+
 */ 
Route::get("/role", function() {
    
    if (false);
    // requisitioner
    else if (Auth::user()->hasRole("Requisitioner")) 
        return redirect()->intended("/requisitioner");

    return response()->json([
        "exist" => Auth::user()->hasRole("Focal")
    ]);
})->middleware(["auth", "verified"]);



/*
 | Wrapper
 */
Route::get("/{route?}", function (Request $request, $route) {
    return view("wrapper");
})->where("route", ".*")->middleware(["auth", "verified"]);


use App\Http\Controllers\Roles\RequisitionerController;

/*
 |-------------------+
 | Requisitoner role |
 |-------------------+
 */
Route::controller(RequisitionerController::class)->group(function() {

    Route::get("/requisitioner/{route?}", "index");

});
