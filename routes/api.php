<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\Admin\AdminDashboardController;
use App\Http\Controllers\Api\Admin\AdminProductController;
use App\Http\Controllers\Api\Admin\AdminOrderController;
use App\Http\Controllers\Api\Admin\AdminUserController;
use App\Http\Controllers\Api\Admin\AdminSettingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);
});

// Public product routes
Route::get('products', [ProductController::class, 'index']);
Route::get('products/featured', [ProductController::class, 'featured']);
Route::get('products/{slug}', [ProductController::class, 'show']);
Route::get('categories', [CategoryController::class, 'index']);
Route::get('categories/{slug}', [CategoryController::class, 'show']);

// Guest cart routes (session-based)
Route::prefix('cart')->group(function () {
    Route::get('/', [CartController::class, 'index']);
    Route::post('add', [CartController::class, 'add']);
    Route::put('update/{id}', [CartController::class, 'update']);
    Route::delete('remove/{id}', [CartController::class, 'remove']);
    Route::delete('clear', [CartController::class, 'clear']);
});

// Payment routes
Route::prefix('payments')->group(function () {
    Route::post('create', [PaymentController::class, 'create']);
    Route::post('webhook', [PaymentController::class, 'webhook']);
    Route::get('status/{paymentId}', [PaymentController::class, 'status']);
});

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth user routes
    Route::prefix('auth')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
        Route::put('profile', [AuthController::class, 'updateProfile']);
        Route::put('password', [AuthController::class, 'updatePassword']);
    });

    // User orders
    Route::prefix('orders')->group(function () {
        Route::get('/', [OrderController::class, 'index']);
        Route::get('/{orderNumber}', [OrderController::class, 'show']);
        Route::post('/', [OrderController::class, 'store']);
    });

    // User cart (authenticated)
    Route::prefix('cart')->group(function () {
        Route::post('sync', [CartController::class, 'syncGuestCart']);
    });
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    // Dashboard
    Route::get('dashboard', [AdminDashboardController::class, 'index']);
    Route::get('stats', [AdminDashboardController::class, 'stats']);

    // Products management
    Route::apiResource('products', AdminProductController::class);
    Route::post('products/{product}/toggle-featured', [AdminProductController::class, 'toggleFeatured']);
    Route::post('products/{product}/toggle-active', [AdminProductController::class, 'toggleActive']);

    // Categories management
    Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);

    // Orders management
    Route::get('orders', [AdminOrderController::class, 'index']);
    Route::get('orders/{order}', [AdminOrderController::class, 'show']);
    Route::put('orders/{order}/status', [AdminOrderController::class, 'updateStatus']);
    Route::post('orders/{order}/ship', [AdminOrderController::class, 'ship']);
    Route::post('orders/{order}/deliver', [AdminOrderController::class, 'deliver']);
    Route::delete('orders/{order}', [AdminOrderController::class, 'destroy']);

    // Users management
    Route::get('users', [AdminUserController::class, 'index']);
    Route::get('users/{user}', [AdminUserController::class, 'show']);
    Route::put('users/{user}', [AdminUserController::class, 'update']);
    Route::delete('users/{user}', [AdminUserController::class, 'destroy']);
    Route::post('users/{user}/toggle-active', [AdminUserController::class, 'toggleActive']);

    // Settings
    Route::get('settings', [AdminSettingController::class, 'index']);
    Route::put('settings', [AdminSettingController::class, 'update']);
    Route::get('settings/{group}', [AdminSettingController::class, 'getByGroup']);
});

// Fallback route
Route::fallback(function () {
    return response()->json([
        'message' => 'API endpoint not found'
    ], 404);
});
