<?php
namespace Phobrv\BrvCore\Services;
use Exception;

class UnitServices {
	public function renderSlug($str) {
		$str = trim(strtolower($str));
		$str = preg_replace("/( )/i", '-', $str);
		$unicode = array('a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ', 'd' => 'đ', 'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ', 'i' => 'í|ì|ỉ|ĩ|ị', 'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ', 'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự', 'y' => 'ý|ỳ|ỷ|ỹ|ỵ', 'A' => 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ', 'D' => 'Đ', 'E' => 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ', 'I' => 'Í|Ì|Ỉ|Ĩ|Ị', 'O' => 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ', 'U' => 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự', 'Y' => 'Ý|Ỳ|Ỷ|Ỹ|Ỵ', '-' => '-----|----|---|--');
		foreach ($unicode as $nonUnicode => $uni) {
			$str = preg_replace("/($uni)/i", $nonUnicode, $str);
		}
		$str = strtolower($str);
		$str = preg_replace('/[^a-zA-Z0-9 -]/s', '', $str);
		$str = preg_replace("/( )/i", '-', $str);
		$str = preg_replace("/(-----|----|---|--)/i", '-', $str);
		return $str;
	}
	public function handleUploadImage($image) {
		if (!is_null($image)) {
			$name = $this->makeUpNameImage($image);
			$path = $image->storeAs('public/photos/shares/uploads', $name);
			return $path;
		}
		return '';
	}
	public function getTaxonomyFromUri($uri) {
		foreach (config('term.taxonomy') as $key => $value) {
			if (strpos($uri, $value)) {
				return $value;
			}
		}
		return "";
	}
	public function generateBreadcrumbs($arrayInfo) {

		$out = array();
		$out[0] = array(
			'text' => '<i class="fa fa-dashboard"></i> Dashboard',
			'href' => url('/admin/dashboard'),
			'is_active' => 0,
		);
		foreach ($arrayInfo as $key => $info) {
			$out[$key + 1] = array(
				'text' => $info['text'],
				'href' => $info['href'],
				'is_active' => ($key == (count($arrayInfo) - 1)) ? 1 : 0,
			);
		}
		return $out;
	}
	public function handleLazyloadPost($post) {
		$content = $post->content;
		//Add class lazyload
		$content = preg_replace("/(<img)/i", '<img class="lazyload"', $content);
		$content = preg_replace("/(<iframe)/i", '<iframe class="lazyload"', $content);
		//Change src to data-src
		$content = preg_replace("/(src=)/i", 'data-src=', $content);
		$post->content = $content;
		return $post;
	}
	public function getStrByNumberCharacter($str, $number) {
		$out = "";
		$string = strip_tags($str);
		$array = explode(" ", $str);
		foreach ($array as $value) {
			$out .= $value . " ";
			if (strlen($this->renderSlug(html_entity_decode(strip_tags($out)))) > $number) {
				break;
			}
		}
		return strip_tags($out);
	}
	public function writeFile($path, $content) {
		$fileRobot = public_path() . $path;
		$file = fopen($fileRobot, "w") or die("Unable to open file!");
		fwrite($file, $content);
		fclose($file);
	}
	public function readFile($path) {
		try {
			$fileRobot = public_path() . $path;
			if(file_exists($fileRobot)){
				$file = fopen($fileRobot, "r") or die("Unable to open file!");
				$content = fread($file, filesize($fileRobot));
				fclose($file);
				return $content;
			}
			return "File not exist";
		} catch (Exception $e) {
			
		}
		
		
	}
	public function cleanString($string) {
		$array = '/(\'|#|<|>|\(|\)|\*|&|\^|%|-|\\\|=)/u';
		return preg_replace($array, '', $string);
	}
	private function makeUpNameImage($image) {
		$name = $image->getClientOriginalName();
		$format = $image->getClientOriginalExtension();
		$name = str_replace("." . $format, "", $name);
		$name = $this->renderSlug($name) . "-" . rand(1000, 9999);
		return $name . ".png";
	}
}
?>