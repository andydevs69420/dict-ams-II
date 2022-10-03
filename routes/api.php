<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



/*
 |------------
 | Get roles |
 |------------
 |
 */
Route::get("/signup-essential", function() {
    return json_encode([
        "division" => \App\Models\Division::all(),
        "office" => \App\Models\Office::all(),
        "roles" => \App\Models\Role::all()
    ]);
});


/*
 |-----------
 | Signup   |
 |-----------
 |
 */
Route::controller(\App\Http\Controllers\SignupController::class)->group(function() {
    Route::post("/signup", "onSignup");
});
