<?php
namespace Phobrv\BrvCore\Services;

use SendGrid;
use SendGrid\Mail\Mail as SendGridEmail;

class SendGridService
{
    private $sendGrid;
    private $sendGridEmail;
    private $tos;
    private $from;
    private $fromName;
    private $subject;
    private $content;
    private $layout;
    private $data;

    public function __construct()
    {
        $this->sendGrid = new SendGrid(config('mess.SENDGRID_API_KEY'));
        $this->sendGridEmail = new SendGridEmail();
        $this->tos = '';
        $this->from = config('mess.MAIL_FROM');
        $this->fromName = config('mess.MAIL_NAME');
        $this->content = '';
        $this->layout = config('mess.MAIL_LAYOUT');
    }

    public function sendMail($data)
    {
        if (isset($data['fromName'])) {
            $this->setFromName($data['fromName']);
        }
        $this->setTos($data['tos']);
        $this->setData(['title' => $data['title'], 'content' => $data['content']]);
        $this->setLayout($data['layout'] ?? $this->layout);
        $this->setSubject($data['subject']);
        $this->setContent($data['content']);
        $this->send();

    }

    public function send()
    {

        $content = $this->getContent();

        $this->sendGridEmail->setFrom($this->from, $this->fromName);
        $this->sendGridEmail->setSubject($this->subject);
        foreach ($this->tos as $_to) {
            $this->sendGridEmail->addTo($_to);
        }

        $this->sendGridEmail->addContent(
            "text/html", $content
        );
        try {
            $response = $this->sendGrid->send($this->sendGridEmail);
        } catch (Exception $e) {
            echo 'Caught exception: ' . $e->getMessage() . "\n";
        }
        return false;
    }

    public function setTos($tos)
    {
        $this->tos = $tos;

        return $this;
    }

    public function getTos()
    {
        return $this->tos;
    }

    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    public function setData($data)
    {
        $this->data = $data;

        return $this;
    }

    public function setLayout($layoutPath)
    {
        $this->layout = $layoutPath;

        return $this;
    }

    public function setFromName($fromName)
    {
        $this->fromName = $fromName;

        return $this;
    }

    public function getContent()
    {
        $content = view($this->layout, $this->data)->render();

        return $content;
    }

}
