<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTranslate extends Migration {

	public function up() {
		Schema::create('translate', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('post_id')->unsigned();
			$table->foreign('post_id')->references('id')->on('posts');
			$table->integer('source_id')->unsigned();
			$table->foreign('source_id')->references('id')->on('posts');
			$table->string('lang', '4')->default('vi');
			$table->timestamps();
		});
	}

	public function down() {
		Schema::dropIfExists('translate');
	}
}
