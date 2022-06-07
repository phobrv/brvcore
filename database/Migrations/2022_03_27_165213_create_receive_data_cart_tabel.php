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
        Schema::create('brv_receive_data_cart', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('receive_data_id')->unsigned();
            $table->foreign('receive_data_id')->references('id')->on('brv_receive_data');
            $table->integer('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('brv_posts');
            $table->string('name', 255);
            $table->integer('qty')->default('0');
            $table->integer('price')->default('0');
            $table->integer('weight')->default('0');
            $table->integer('discount')->default('0');
            $table->integer('tax')->default('0');
            $table->integer('subtotal')->default('0');
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
        Schema::dropIfExists('brv_receive_data_cart');
    }
}
