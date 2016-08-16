<?php

class langs_core {

	static protected $langs;
	static protected $lang;
	static protected $langStrings;


	public function __construct($lang) {
		self::$lang = $lang;
		$this->loadJson();
	}

	static function getLangs($lang) {
		if (langs::$langs == null) {
			$langs = new self($lang);
			langs::$langs =& $langs;
		}
		return langs::$langs;
	}

	private function loadJson() {
		$langStringsFile = ABSPATH ."/configs/lang.".self::$lang.".json";
		$langStringsContent = file_get_contents( $langStringsFile );
		langs::$langStrings = json_decode($langStringsContent);
	}

	static function node($key = '') {
		return $key != '' ? langs::$langStrings->$key : langs::$langStrings;
	}

/*
	static function closeLogDB() {
		if (db::$logs != null) {
			return db::$logs->close();
		}
	}
*/
}
?>