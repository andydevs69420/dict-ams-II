<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseRequestForm extends Model
{
    use HasFactory;
    protected $table = "purchase_request_form";
    protected $fillable = ["requisitioner_id_fk", "budget_officer_id_fk", "recommending_approval_id_fk"];
    public $timestamps = true;

}
