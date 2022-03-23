<?php
namespace Phobrv\BrvCore\Services;

use Mailjet\LaravelMailjet\Facades\Mailjet;
use \Mailjet\Resources;

class MailjetServices
{
    private $layout;
    public function __construct()
    {
        $this->layout = config('mess.MAIL_LAYOUT');
    }

    public function sendMail($data)
    {
        $mailjet = Mailjet::getClient();

        $content = $this->getContent($data);
        $recipients = $this->handleRecipient($data);

        $body = [
            'FromEmail' => config('mess.MAIL_FROM_ADDRESS'),
            'FromName' => config('mess.MAIL_FROM_NAME'),
            'Subject' => $data['subject'] ?? 'Mail report',
            'Text-part' => $data['title'] ?? 'Title mail',
            'Html-part' => $content,
            'Recipients' => $recipients,
        ];

        $response = $mailjet->post(Resources::$Email, ['body' => $body]);
    }

    public function getContent($data)
    {
        $layout = $data['layout'] ?? $this->layout;
        return view($layout, $data)->render();
    }
    public function handleRecipient($data)
    {
        $recipients = [];
        foreach ($data['tos'] as $_to) {
            array_push($recipients, ["Email" => $_to]);
        }
        return $recipients;
    }
}
