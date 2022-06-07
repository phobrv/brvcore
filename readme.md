# BrvCore

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]
[![StyleCI][ico-styleci]][link-styleci]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.
## Change table name

```
ALTER TABLE `comment` RENAME TO brv_comment;
ALTER TABLE `options` RENAME TO brv_options;
ALTER TABLE posts RENAME TO brv_posts;
ALTER TABLE post_meta RENAME TO brv_post_meta;
ALTER TABLE receive_data RENAME TO brv_receive_data;
ALTER TABLE receive_data_cart RENAME TO brv_receive_data_cart;
ALTER TABLE receive_data_meta RENAME TO brv_receive_data_meta;
ALTER TABLE terms RENAME TO brv_terms;
ALTER TABLE term_meta RENAME TO brv_term_meta;
ALTER TABLE term_relationships RENAME TO brv_term_relationships;
ALTER TABLE user_meta RENAME TO brv_user_meta;
ALTER TABLE crawler_data RENAME TO brv_crawler_data;
ALTER TABLE crawler_profile RENAME TO brv_crawler_profile;
```

## Installation

Via Composer

``` bash
$ composer require phobrv/brvcore
```

## Usage

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [author name][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/phobrv/brvcore.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/phobrv/brvcore.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/phobrv/brvcore/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/phobrv/brvcore
[link-downloads]: https://packagist.org/packages/phobrv/brvcore
[link-travis]: https://travis-ci.org/phobrv/brvcore
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/phobrv
[link-contributors]: ../../contributors
