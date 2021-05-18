<?php

Route::middleware(['web', 'auth', 'auth:sanctum', 'lang', 'verified'])->namespace('Phobrv\BrvCore\Http\Controllers')->group(function () {
	Route::get('lang/{lang}', 'LanguageController@changeLang')->name('lang');
	Route::middleware(['can:super_admin'])->prefix('dashboard')->group(function () {
		Route::get('/', 'DashboardController@index')->name('dashboard');
		Route::get('/data', 'DashboardController@data')->name('dashboard.data');
	});

	Route::middleware(['can:super_admin'])->prefix('admin')->group(function () {
		Route::resource('user', 'UserController');
		Route::post('user/resetPass', 'UserController@resetPass')->name('user.resetPass');
		Route::resource('role', 'RoleController');
		Route::get('/permission/reimport', 'PermissionController@reimport')->name('permission.reimport');
	});

	Route::middleware(['can:album_manage'])->prefix('admin')->group(function () {
		Route::resource('albumgroup', 'TermController');
		Route::resource('{id}/album', 'AlbumController');
		Route::get('{id}/album/{album}/delete', 'AlbumController@delete')->name('album.delete');
		Route::get('{id}/album/{image}/{type}', 'AlbumController@changeOrder')->name('album.changeOrder');
		Route::post('{id}/album/updataImages', 'AlbumController@updataImages')->name('album.updataImages');
	});

	Route::middleware(['can:video_manage'])->prefix('admin')->group(function () {
		Route::resource('videogroup', 'TermController');
		Route::resource('video', 'VideoController');
		Route::post('/video/updateVideoGroupSelect', 'VideoController@updateVideoGroupSelect')->name('video.updateVideoGroupSelect');
		Route::get('/video/setVideoGroupSelect/{id}', 'VideoController@setVideoGroupSelect')->name('video.setVideoGroupSelect');

		Route::get('video/delete/{id}', 'VideoController@delete')->name('video.delete');
		Route::get('video/{video}/{type}', 'VideoController@changeOrder')->name('video.changeOrder');
	});

	Route::middleware(['can:question_manage'])->prefix('admin')->group(function () {
		Route::resource('questiongroup', 'TermController');

		Route::resource('question', 'QuestionController');
		Route::post('/question/updateQuestionGroupSelect', 'QuestionController@updateQuestionGroupSelect')->name('question.updateQuestionGroupSelect');
		Route::get('/question/setQuestionGroupSelect/{id}', 'QuestionController@setQuestionGroupSelect')->name('question.setQuestionGroupSelect');

		Route::get('question/delete/{id}', 'QuestionController@delete')->name('question.delete');

	});

	Route::middleware(['can:customeridea_manage'])->prefix('admin')->group(function () {
		Route::resource('customeridea', 'CustomerIdeaController');
	});

	Route::middleware(['can:post_manage'])->prefix('admin')->group(function () {
		Route::resource('category', 'TermController');
		Route::resource('tag', 'TermController');
		Route::get('/tag/{tag}/list-post', 'TermController@listPostOfTag')->name('post.listPostOfTag');

		Route::resource('post', 'PostController');
		Route::get('/post-getData', 'PostController@getData')->name('post.getData');
		Route::get('/createTranslatePost/{source_id}/{lang}', 'PostController@createTranslatePost')->name('post.createTranslatePost');

		Route::post('/post/tagSearchAjax', 'PostController@tagSearchAjax')->name('post.tagSearchAjax');
		Route::post('/post/updateUserSelectCategory', 'PostController@updateUserSelectCategory')->name('post.updateUserSelectCategory');
		Route::post('/post/autoCreatePostDraft', 'PostController@autoCreatePostDraft')->name('post.autoCreatePostDraft');
		Route::post('/post/autoUpdatePostContent', 'PostController@autoUpdatePostContent')->name('post.autoUpdatePostContent');
		Route::post('/post/changeStatus', 'PostController@changeStatus')->name('post.changeStatus');

	});

	//Facker data
	Route::middleware(['can:super_user'])->prefix('admin')->group(function () {
		//Auto create post demo
		Route::get('/faker/post/auto', 'PostController@autoCreatePost')->name('post.autoCreatePost');
		Route::get('/faker/question/auto', 'QuestionController@autoCreateQuestion')->name('question.autoCreateQuestion');
	});

});
