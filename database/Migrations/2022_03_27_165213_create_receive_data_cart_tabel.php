<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceiveDataCartTabel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receive_data_cart', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('receive_data_id')->unsigned();
            $table->foreign('receive_data_id')->references('id')->on('receive_data');
            $table->integer('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
            $table->string('name', 255);
            $table->integer('qty', 11);
            $table->integer('price', 11);
            $table->integer('weight', 11);
            $table->integer('discount', 11);
            $table->integer('tax', 11);
            $table->integer('subtotal', 11);
            $table->longText('options')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('receive_data_cart');
    }
}
