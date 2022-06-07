<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ReceiveDataMeta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brv_receive_data_meta', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('receive_data_id')->unsigned();
            $table->foreign('receive_data_id')->references('id')->on('brv_receive_data');
            $table->string('key', 191);
            $table->longText('value')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brv_receive_data_meta');
    }
}
