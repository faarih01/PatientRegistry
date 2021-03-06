<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adrs', function (Blueprint $table) {
            $table->id();
            $table->string('house_name');
            $table->string('district');
            $table->unsignedBigInteger('island_id');
            $table->foreign('island_id')->references('id')->on('islands');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adrs');
    }
};
