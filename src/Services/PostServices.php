<?php

namespace Phobrv\BrvCore\Services;

use KubAT\PhpSimple\HtmlDomParser;
use Phobrv\BrvCore\Repositories\PostRepository;
use Str;

class PostServices
{
    protected $postRepository;
    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }
    public function handleMenuPost($data)
    {
        if (!empty($data['content'])) {
            $data['menu'] = "";
            $html = HtmlDomParser::str_get_html($data['content']);
            if ($html != "") {
                $data['content'] = str_replace("<br />", "", $data['content']);
                $menu = "<ul id='postMenu'>";
                foreach ($html->find('h2,h3') as $h) {
                    $outertext = $h->outertext;
                    $plaintext = trim($h->plaintext);
                    if (strlen($plaintext) > 4) {
                        $id = Str::slug($plaintext);
                        $menu .= "<li><a href='#" . $id . "' >" . $plaintext . "</a></li>";
                        $outertextChange = "<" . $h->tag . " id='" . $id . "' >" . $h->innertext . "</" . $h->tag . ">";
                        $data['content'] = str_replace($outertext, $outertextChange, $data['content']);
                    }
                }
                $menu .= "</ul>";
                $data['menu'] = $menu;
            }
        }

        return $data;
    }
    public function takeRatting($postMeta)
    {
        $out = ['count' => '1', 'sum' => '5', 'value' => '5', 'value_true' => '5', 'percent' => '100'];
        $out['count'] = isset($postMeta['countRatting']) ? $postMeta['countRatting'] : 1;
        $out['sum'] = isset($postMeta['sumRatting']) ? $postMeta['sumRatting'] : 5;
        $out['value'] = round($out['sum'] / $out['count']);
        $out['value_true'] = round($out['sum'] / $out['count'], 1);
        $out['percent'] = round((($out['sum'] / $out['count']) / 5) * 100, 1);
        return $out;
    }
    public function renderSiteMap()
    {
        $sitemap = fopen("sitemap.xml", "w") or die("Unable to open file!");
        $string = '<?xml version="1.0" encoding="utf-8"?>
		<urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        $posts = $this->postRepository->whereIn('type', ['post', 'menu_item', 'product', 'video'])->get();
        foreach ($posts as $post) {
            $string .= '<url><loc>' . \URL::route('level1', ['slug' => $post->slug]) . '</loc></url>';
        }
        $string .= '</urlset>';
        fwrite($sitemap, $string);
        fclose($sitemap);
        return 1;
    }
}
