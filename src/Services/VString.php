<?php
namespace Phobrv\BrvCore\Services;

class VString {
	static $utf82latin;
	static $utf82telex = array(
		'à' => 'af',
		'á' => 'as',
		'ả' => 'ar',
		'ã' => 'ax',
		'ạ' => 'aj',

		'ă' => 'aw',
		'ằ' => 'awf',
		'ắ' => 'aws',
		'ẳ' => 'awr',
		'ẵ' => 'awx',
		'ặ' => 'awj',

		'â' => 'aa',
		'ầ' => 'aaf',
		'ấ' => 'aas',
		'ẩ' => 'aar',
		'ẫ' => 'aax',
		'â' => 'aax',
		'ậ' => 'aaj',

		'đ' => 'dd',

		'è' => 'ef',
		'é' => 'es',
		'ẻ' => 'er',
		'ẽ' => 'ex',
		'ẹ' => 'ej',

		'ê' => 'ee',
		'ề' => 'eef',
		'ế' => 'ees',
		'ể' => 'eer',
		'ễ' => 'eex',
		'ệ' => 'eej',

		'ì' => 'if',
		'í' => 'is',
		'ỉ' => 'ir',
		'ĩ' => 'ix',
		'ị' => 'ij',

		'ò' => 'of',
		'ó' => 'os',
		'ỏ' => 'or',
		'õ' => 'ox',
		'ọ' => 'oj',

		'ô' => 'oo',
		'ồ' => 'oof',
		'ố' => 'oos',
		'ổ' => 'oor',
		'ỗ' => 'oox',
		'ộ' => 'ooj',

		'ơ' => 'ow',
		'ờ' => 'owf',
		'ớ' => 'ows',
		'ở' => 'owr',
		'ỡ' => 'owx',
		'ợ' => 'owj',

		'ù' => 'uf',
		'ú' => 'us',
		'ủ' => 'ur',
		'ũ' => 'ux',
		'ụ' => 'uj',

		'ư' => 'uw',
		'ừ' => 'uwf',
		'ứ' => 'uws',
		'ử' => 'uwr',
		'ữ' => 'uwx',
		'ự' => 'uwj',

		'À' => 'af',
		'Á' => 'as',
		'Ả' => 'ar',
		'Ã' => 'ax',
		'Ạ' => 'aj',

		'Ă' => 'aw',
		'Ằ' => 'awf',
		'Ắ' => 'aws',
		'Ẳ' => 'awr',
		'Ẵ' => 'awx',
		'Ặ' => 'awj',

		'Â' => 'aa',
		'Ầ' => 'aaf',
		'Ấ' => 'aas',
		'Ẩ' => 'aar',
		'Ẫ' => 'aax',
		'Ậ' => 'aaj',

		'Đ' => 'dd',

		'È' => 'ef',
		'É' => 'es',
		'Ẻ' => 'er',
		'Ẽ' => 'ex',
		'Ẹ' => 'ej',

		'Ê' => 'ee',
		'Ề' => 'eef',
		'Ế' => 'ees',
		'Ể' => 'eer',
		'Ễ' => 'eex',
		'Ệ' => 'eej',

		'Ì' => 'if',
		'Í' => 'is',
		'Ỉ' => 'ir',
		'Ĩ' => 'ix',
		'Ị' => 'ij',

		'Ò' => 'of',
		'Ó' => 'os',
		'Ỏ' => 'or',
		'Õ' => 'ox',
		'Ọ' => 'oj',

		'Ô' => 'oo',
		'Ồ' => 'oof',
		'Ố' => 'oos',
		'Ổ' => 'oor',
		'Ỗ' => 'oox',
		'Ộ' => 'ooj',

		'Ơ' => 'ow',
		'Ờ' => 'owf',
		'Ớ' => 'ows',
		'Ở' => 'owr',
		'Ỡ' => 'owx',
		'Ợ' => 'owj',

		'Ù' => 'uf',
		'Ú' => 'us',
		'Ủ' => 'ur',
		'Ũ' => 'ux',
		'Ụ' => 'uj',

		'Ư' => 'uw',
		'Ừ' => 'uwf',
		'Ứ' => 'uws',
		'Ử' => 'uwr',
		'Ữ' => 'uwx',
		'Ự' => 'uwj',

		'ỳ' => 'yf',
		'ý' => 'ys',
		'ỷ' => 'yr',
		'ỹ' => 'yx',
		'ỵ' => 'yj',

		'À' => 'af',
		'Á' => 'as',
		'Ả' => 'ar',
		'Ã' => 'ax',
		'Ạ' => 'aj',

		'Ă' => 'aw',
		'Ằ' => 'awf',
		'Ắ' => 'aws',
		'Ẳ' => 'awr',
		'Ẵ' => 'awx',
		'Ặ' => 'awj',

		'Â' => 'aa',
		'Ầ' => 'aaf',
		'Ấ' => 'aas',
		'Ẩ' => 'aar',
		'Ẫ' => 'aax',
		'Ậ' => 'aaj',

		'Đ' => 'dd',

		'È' => 'ef',
		'É' => 'es',
		'Ẻ' => 'er',
		'Ẽ' => 'ex',
		'Ẹ' => 'ej',

		'Ê' => 'ee',
		'Ề' => 'eef',
		'Ế' => 'ees',
		'Ể' => 'eer',
		'Ễ' => 'eex',
		'Ệ' => 'eej',

		'Ì' => 'if',
		'Í' => 'is',
		'Ỉ' => 'ir',
		'Ĩ' => 'ix',
		'Ị' => 'ij',

		'Ò' => 'of',
		'Ó' => 'os',
		'Ỏ' => 'or',
		'Õ' => 'ox',
		'Ọ' => 'oj',

		'Ô' => 'oo',
		'Ồ' => 'oof',
		'Ố' => 'oos',
		'Ổ' => 'oor',
		'Ỗ' => 'oox',
		'Ộ' => 'ooj',

		'Ơ' => 'ow',
		'Ờ' => 'owf',
		'Ớ' => 'ows',
		'Ở' => 'owr',
		'Ỡ' => 'owx',
		'Ợ' => 'owj',

		'Ù' => 'uf',
		'Ú' => 'us',
		'Ủ' => 'ur',
		'Ũ' => 'ux',
		'Ụ' => 'uj',

		'Ư' => 'uw',
		'Ừ' => 'uwf',
		'Ứ' => 'uws',
		'Ử' => 'uwr',
		'Ữ' => 'uwx',
		'Ự' => 'uwj',

		'Ỳ' => 'yf',
		'Ý' => 'ys',
		'Ỷ' => 'yr',
		'Ỹ' => 'yx',
		'Ỵ' => 'yj',

		'ć' => 'c',

		"O'" => 'o',

		' ' => '-',
		'?' => ' ',
		'+' => ' ',
		'.' => ' ',
		',' => ' ',
		'&' => ' ',
		'“' => ' ',
		'”' => ' ',
		'&quot;' => ' ',
		'\'' => ' ',
		'"' => ' ',
		'/' => '-',
		'%' => ' ',
		'(' => '-',
		')' => ' ',
		':' => ' ',
		'…' => ' ',
		'!' => ' ',
		'Š' => 's',
		'ü' => 'u',
		'ờ' => 'o',
		'Ş' => 's',
		'ş' => 's',
		'ţ' => 't',
		'ñ' => 'n',
		'Ć' => 'c',
		'ğ' => 'g',
		'ç' => 'c',
		'Č' => 'c',
		'č' => 'c',
		'š' => 's',
		'æ' => 'ae',
		'ž' => 'z',
		'İ' => 'i',
		'ö' => 'o',
		'ą' => 'a',
		'î' => 'i',
		'ß' => 'ss',
		'ș' => 's',
		'ū' => 'u',
		'ø' => 'o',
		'С' => 'c',
		'ń' => 'n',
		'ï' => 'i',
	);

	// chuyển từ UTF-8 sang dạng telex
	public function convertUtf8ToTelex($str) {
		return strtr($str, self::$utf82telex);
	}

	// chuyển từ UTF-8 sang dạng latin
	public function convertUtf8ToLatin($str) {
		foreach (self::$utf82telex as $char => $new_char) {
			self::$utf82latin[$char] = trim(substr($new_char, 0, 1));
		}

		return strtolower(strtr($str, self::$utf82latin));
	}

	public function standardKeyword($new_code) {
		$new_code = self::convertUtf8ToLatin($new_code);
		$new_code = str_replace(array("'", ';', '<br>', '/', ':', '…', '”', '“', '&#039;', '&', '(', ')', '!', '.', ',', '–-', '’', 'amp;', '~', '`', '@', '„', '|', '*', '=', '$', '_', '->', '[', ']', '<', '~', '>'), '', $new_code);
		$new_code = stripslashes($new_code);
		$new_code = str_replace('/', '-', $new_code);
		$new_code = preg_replace('@-+@', '-', $new_code);
		$new_code = rtrim($new_code, '-');
		$new_code = ltrim($new_code, '-');
		$new_code = preg_replace('/[^(\x20-\x7F)]*/', '', $new_code);
		return $new_code;
	}

	// sở hữu cách của Tiếng Pháp
	function de($name) {
		$first_letter = substr($name, 0, 1);
		if (in_array($first_letter, array('A', 'I', 'O', 'U', 'E'))) {
			return 'd\'' . $name;
		}
		return 'de ' . $name;
	}
}