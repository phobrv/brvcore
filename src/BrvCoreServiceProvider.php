<?php

namespace Phobrv\BrvCore;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class BrvCoreServiceProvider extends ServiceProvider
{

    public function boot(): void
    {

        Gate::before(function ($user, $ability) {
            return $user->hasRole('SuperAdmin') ? true : null;
        });

        view()->composer(
            'phobrv::*',
            'Phobrv\BrvCore\ViewComposers\AdminComposer'
        );

        $this->loadRepositories();
        $this->migrations();
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'phobrv');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'phobrv');
        $this->loadRoutesFrom(__DIR__ . '/routes.php');

        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }

    }

    public function register(): void
    {
        $this->app->singleton(\Phobrv\BrvCore\ViewComposers\AdminComposer::class);
        $this->mergeConfigFrom(__DIR__ . '/../config/brvcore.php', 'brvcore');
        $this->mergeConfigFrom(__DIR__ . '/../config/sidebar.php', 'sidebar');
        $this->mergeConfigFrom(__DIR__ . '/../config/option.php', 'option');
        $this->mergeConfigFrom(__DIR__ . '/../config/langCode.php', 'langCode');
        $this->mergeConfigFrom(__DIR__ . '/../config/term.php', 'term');
        $this->mergeConfigFrom(__DIR__ . '/../config/brvpermission.php', 'brvpermission');
        $this->mergeConfigFrom(__DIR__ . '/../config/mess.php', 'mess');
        $this->mergeConfigFrom(__DIR__ . '/../config/brvconfigs.php', 'brvconfigs');
        $this->mergeConfigFrom(__DIR__ . '/../config/brvreceive.php', 'brvreceive');

        $this->defineMiddleware();

        $this->app->singleton('brvcore', function ($app) {
            return new CoreAdmin;
        });
    }

    public function provides()
    {
        return ['brvcore'];
    }

    protected function bootForConsole(): void
    {
        // Publishing the configuration file.
        $this->publishes([
            __DIR__ . '/../config/option.php' => config_path('option.php'),
        ], 'brv_option.config');
        $this->publishes([
            __DIR__ . '/../config/sidebar.php' => config_path('sidebar.php'),
        ], 'brv_sidebar.config');
        $this->publishes([
            __DIR__ . '/../config/term.php' => config_path('term.php'),
        ], 'brv_term.config');
        $this->publishes([
            __DIR__ . '/../config/brvreceive.php' => config_path('brvreceive.php'),
        ], 'brvreceive.config');
        $this->publishes([
            __DIR__ . '/../config/brvpermission.php' => config_path('brvpermission.php'),
        ], 'brv_permission.config');

        // Publishing assets.
        $this->publishes([
            __DIR__ . '/../resources/assets/' => public_path('vendor/phobrv'),
        ], 'brvcore.assets');
        // Publishing the translation files.
        $this->publishes([
            __DIR__ . '/../resources/lang' => resource_path('lang'),
        ], 'brvcore.lang');

        // Publishing the views.
        $this->publishes([
            __DIR__ . '/../resources/views/menu' => base_path('resources/views/vendor/phobrv/menu'),
        ], 'brv_menu.view');
        $this->publishes([
            __DIR__ . '/../resources/views/config' => base_path('resources/views/vendor/phobrv/config'),
        ], 'brv_config.view');
        $this->publishes([
            __DIR__ . '/../resources/views/post' => base_path('resources/views/vendor/phobrv/post'),
        ], 'brv_post.view');

        $this->publishes([
            __DIR__ . '/../resources/views/order' => base_path('resources/views/vendor/phobrv/order'),
        ], 'brv_order.view');

        // Registering package commands.
        // $this->commands([]);
    }

    public function migrations()
    {
        $this->loadMigrationsFrom(__DIR__ . '/../database/Migrations');
        // $this->publishes([
        //  __DIR__ . '/../database/Migrations/' => database_path('migrations'),
        // ], 'brvcore.migrations');
    }

    public function defineMiddleware()
    {
        app('router')->aliasMiddleware('lang', \Phobrv\BrvCore\Http\Middleware\Lang::class);
    }

    protected function loadRepositories()
    {
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\UserRepository::class,
            \Phobrv\BrvCore\Repositories\UserRepositoryEloquent::class
        );
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\TermRepository::class,
            \Phobrv\BrvCore\Repositories\TermRepositoryEloquent::class
        );
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\PostRepository::class,
            \Phobrv\BrvCore\Repositories\PostRepositoryEloquent::class
        );
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\OptionRepository::class,
            \Phobrv\BrvCore\Repositories\OptionRepositoryEloquent::class
        );
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\ReceiveDataRepository::class,
            \Phobrv\BrvCore\Repositories\ReceiveDataRepositoryEloquent::class
        );
        $this->app->bind(
            \Phobrv\BrvCore\Repositories\CommentRepository::class,
            \Phobrv\BrvCore\Repositories\CommentRepositoryEloquent::class
        );

        $this->app->bind(
            \Phobrv\BrvCore\Repositories\PostMetaRepository::class,
            \Phobrv\BrvCore\Repositories\PostMetaRepositoryEloquent::class
        );

        // $this->app->bind(
        //  \Phobrv\BrvCore\Repositories\CrawlerDataRepository::class,
        //  \Phobrv\BrvCore\Repositories\CrawlerDataRepositoryEloquent::class
        // );
        // $this->app->bind(
        //  \Phobrv\BrvCore\Repositories\CrawlerProfileRepository::class,
        //  \Phobrv\BrvCore\Repositories\CrawlerProfileRepositoryEloquent::class
        // );
    }
}
