<?php

return [
    'SENDGRID_API_KEY' => env('SENDGRID_API_KEY', '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'),
    'MAIL_FROM' => env('MAIL_FROM', 'sendmail6789@gmail.com'),
    'MAIL_NAME' => env('MAIL_NAME', 'Laravel'),
    'MAIL_LAYOUT' => 'emails.layout',

    'MAIL_FROM_NAME' => env('MAIL_FROM_NAME', 'Laravel'),
    'MAIL_FROM_ADDRESS' => env('MAIL_FROM_ADDRESS', 'sendmail6789@gmail.com'),
    'MAILJET_APIKEY'=env('MAILJET_APIKEY','7f418e42f5c6283fb8e933c2da30277d'),
    'MAILJET_APISECRET'=env('MAILJET_APISECRET','43dee5090471f1a72855dedd9afcf2a6')
];
