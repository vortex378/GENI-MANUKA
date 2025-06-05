<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'payment_id',
        'payment_method',
        'status',
        'amount',
        'currency',
        'pokpay_checkout_url',
        'pokpay_response',
        'webhook_data',
        'paid_at',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'pokpay_response' => 'array',
        'webhook_data' => 'array',
        'paid_at' => 'datetime',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
