<?php

return [
	'menu' => [
		[
			'id' => 'menu-dashboard',
			'title' => 'Dashboard',
			'icon' => 'fa fa-dashboard',
			'href' => '/dashboard',
			'permissions' => ['view_report'],
			'children' => [],
		],
		[
			'id' => 'menu-account',
			'title' => 'Accounts',
			'icon' => 'fa fa-user',
			'href' => '',
			'permissions' => ['super_admin'],
			'children' => [
				[
					'id' => 'menu-user',
					'title' => 'Users',
					'icon' => 'fa-building-o',
					'href' => 'admin/user',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-role',
					'title' => 'Roles',
					'icon' => 'fa-building-o',
					'href' => 'admin/role',
					'permissions' => [],
					'children' => [],
				],
			],
		],
		[
			'id' => 'menu-manager',
			'title' => 'Menus',
			'icon' => 'fa fa-bars',
			'href' => '',
			'permissions' => ['menu_manage'],
			'children' => [
				[
					'id' => 'menugroup',
					'title' => 'All Menu',
					'icon' => 'fa-building-o',
					'href' => 'admin/menugroup',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-menu',
					'title' => 'Menu structure',
					'icon' => 'fa-building-o',
					'href' => 'admin/menu',
					'permissions' => [],
					'children' => [],
				],

			],
		],
		[
			'id' => 'menu-config',
			'title' => 'Configs',
			'icon' => 'fa fa-cog',
			'href' => '',
			'permissions' => ['config_manage'],
			'children' => [
				[
					'id' => 'config-system',
					'title' => 'System',
					'icon' => 'fa-building-o',
					'href' => 'admin/config-system',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'config-website',
					'title' => 'Website',
					'icon' => 'fa-building-o',
					'href' => 'admin/config-website',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'config-lang',
					'title' => 'Lang',
					'icon' => 'fa-building-o',
					'href' => 'admin/configlang',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'config-widget',
					'title' => 'Widget',
					'icon' => 'fa-building-o',
					'href' => 'admin/config-widget',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'config-icon',
					'title' => 'Icons',
					'icon' => 'fa-building-o',
					'href' => 'admin/config-icon',
					'permissions' => [],
					'children' => [],
				],

			],
		],
		[
			'id' => 'menu-resource',
			'title' => 'Resources',
			'icon' => 'fa fa-database',
			'href' => '',
			'permissions' => [],
			'children' => [
				[
					'id' => 'albumgroup',
					'title' => 'Album',
					'icon' => 'fa-building-o',
					'href' => 'admin/albumgroup',
					'permissions' => ['album_manage'],
					'children' => [],
				],
				[
					'id' => 'videogroup',
					'title' => 'Video',
					'icon' => 'fa-video-o',
					'href' => 'admin/videogroup',
					'permissions' => ['video_manage'],
					'children' => [],
				],
				[
					'id' => 'questiongroup',
					'title' => 'Question',
					'icon' => 'fa-video-o',
					'href' => 'admin/questiongroup',
					'permissions' => ['question_manage'],
					'children' => [],
				],
				[
					'id' => 'customeridea',
					'title' => 'Customer Idea',
					'icon' => 'fa-video-o',
					'href' => 'admin/customeridea',
					'permissions' => ['customeridea_manage'],
					'children' => [],
				],
			],
		],
		[
			'id' => 'menu-posts',
			'title' => 'Posts',
			'icon' => 'fa fa-newspaper-o',
			'href' => '',
			'permissions' => ['post_manage'],
			'children' => [
				[
					'id' => 'category',
					'title' => 'Categories',
					'icon' => 'fa-building-o',
					'href' => 'admin/category',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'all-post',
					'title' => 'All Post',
					'icon' => 'fa-building-o',
					'href' => 'admin/post',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-tag',
					'title' => 'Tags',
					'icon' => 'fa-building-o',
					'href' => 'admin/tag',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-comment',
					'title' => 'Comments',
					'icon' => 'fa-building-o',
					'href' => 'admin/comment',
					'permissions' => [],
					'children' => [],
				],
			],
		],

		[
			'id' => 'menu-contact',
			'title' => 'Contacts',
			'icon' => 'fa fa-download',
			'href' => '/admin/receive',
			'permissions' => ['receive_manage'],
			'children' => [],
		],
		[
			'id' => 'menu-order',
			'title' => 'Orders',
			'icon' => 'fa fa-cart-arrow-down',
			'href' => '/admin/order',
			'permissions' => ['order_manage'],
			'children' => [],
		],
		[
			'id' => 'menu-product',
			'title' => 'Products',
			'icon' => 'fa fa-gavel',
			'href' => '',
			'permissions' => ['product_manage'],
			'children' => [
				[
					'id' => 'productgroup',
					'title' => 'CategoriesProduct',
					'icon' => 'fa-building-o',
					'href' => 'admin/productgroup',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-brand',
					'title' => 'Brand',
					'icon' => 'fa-building-o',
					'href' => 'admin/brand',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'menu-product',
					'title' => 'All Product',
					'icon' => 'fa-building-o',
					'href' => 'admin/product',
					'permissions' => [],
					'children' => [],
				],

			],
		],
		[
			'id' => 'menu-drugstore',
			'title' => 'Drugstores',
			'icon' => 'fa fa-plus-circle',
			'href' => '',
			'permissions' => ['drugstore_manage'],
			'children' => [
				[
					'id' => 'menu-region',
					'title' => 'Regions',
					'icon' => 'fa-building-o',
					'href' => 'admin/region',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'drugstores',
					'title' => 'All DrugStore',
					'icon' => 'fa-building-o',
					'href' => 'admin/drugstore',
					'permissions' => [],
					'children' => [],
				],

			],
		],
		[
			'id' => 'menu-tool',
			'title' => 'Tools',
			'icon' => 'fa fa-bars',
			'href' => '',
			'permissions' => ['super_admin'],
			'children' => [
				[
					'id' => 'fake-post',
					'title' => 'Post',
					'icon' => 'fa-building-o',
					'href' => 'admin/faker/post/auto',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'fake-ques',
					'title' => 'Question',
					'icon' => 'fa-building-o',
					'href' => 'admin/faker/question/auto',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'upgrade',
					'title' => 'Upgrade',
					'icon' => 'fa-building-o',
					'href' => 'admin/upgrade',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => 'replace-domain',
					'title' => 'Replace-domain',
					'icon' => 'fa-building-o',
					'href' => 'admin/upgrade/replace',
					'permissions' => [],
					'children' => [],
				],

			],
		],
		[
			'id' => 'menu-crawler',
			'title' => 'Crawler',
			'icon' => 'fa fa-binoculars',
			'href' => '',
			'permissions' => ['super_admin'],
			'children' => [
				[
					'id' => '',
					'title' => 'Profile',
					'icon' => 'fa-building-o',
					'href' => 'admin/crawlerProfile',
					'permissions' => [],
					'children' => [],
				],
				[
					'id' => '',
					'title' => 'Crawl Handword',
					'icon' => 'fa-building-o',
					'href' => 'admin/crawler',
					'permissions' => [],
					'children' => [],
				],

			],
		],
	],
];