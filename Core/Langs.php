<?php
namespace Core;
defined('APPPATH') OR die("Access denied");

class Langs {

	static protected $langs;
	static protected $lang;
	static protected $langStrings;


	public function __construct($lang) {
		self::$lang = $lang;
		$this->loadJson();
	}

	private function loadJson() {
		$langStringsFile = APPPATH ."/Configs/lang.".self::$lang.".json";
		$langStringsContent = file_get_contents( $langStringsFile );
		langs::$langStrings = json_decode($langStringsContent);
	}

	static function getLang() { return self::$lang; }

	static function getLangs($lang='en') {
		if (langs::$langs == null) {
			$langs = new self(self::$lang != '' ? self::$lang : $lang);
			langs::$langs =& $langs;
		}
		return langs::$langs;
	}

	static function node($key = '') {
		return $key != '' ? langs::$langStrings->$key : langs::$langStrings;
	}
}
?>