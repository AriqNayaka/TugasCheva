<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MahasiswaController;

Route::get('Mahasiswas', [MahasiswaController::class, 'index']);
Route::get('Mahasiswas/{id}', [MahasiswaController::class, 'show']);
Route::post('Mahasiswas', [MahasiswaController::class, 'store']);
Route::put('Mahasiswas/{id}', [MahasiswaController::class, 'update']);
Route::delete('Mahasiswas/{id}', [MahasiswaController::class, 'destroy']);
