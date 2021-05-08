<?php

namespace Phobrv\BrvCore\Facades;

use Illuminate\Support\Facades\Facade;

class BrvCore extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor(): string
    {
        return 'brvcore';
    }
}
