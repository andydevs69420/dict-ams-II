<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseRequestItem extends Model
{
    use HasFactory;

    protected $table = "purchase_request_item";
    protected $fillable = ["stockno", "unit_id_fk", "quantity", "unit_cost", "total_cost", "description", "purchase_request_form_id_fk"];
    public $timestamps = false;

}
