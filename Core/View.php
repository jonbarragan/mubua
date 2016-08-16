<?php
namespace Core;
defined("APPPATH") OR die("Access denied");

class View {

	protected static $data;

	//const VIEWS_PATH = APPPATH . 'Views/';
	const VIEWS_PATH = "../App/Views/";
	const TEMPLATES_EXTENSION = "php";

	public static function render($template) {
/*
		if (!file_exists(self::VIEWS_PATH . $template . "." . self::TEMPLATES_EXTENSION)) {
			throw new \Exception("Error: El archivo " . self::VIEWS_PATH . $template . "." . self::TEMPLATES_EXTENSION . " no existe", 1);
		}
*/
		if (!file_exists(APPPATH . 'Views/' . $template . "." . self::TEMPLATES_EXTENSION)) {
			throw new \Exception("Error: El archivo " . APPPATH . 'Views/' . $template . "." . self::TEMPLATES_EXTENSION . " no existe", 1);
		}

		ob_start();
		extract(self::$data);

		//include(self::VIEWS_PATH . $template . "." . self::TEMPLATES_EXTENSION);
		include(APPPATH . 'Views/' . $template . "." . self::TEMPLATES_EXTENSION);

		$str = ob_get_contents();
		ob_end_clean();
		echo $str;
	}

	public static function set($name, $value) {
		self::$data[$name] = $value;
	}
}
