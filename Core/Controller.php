<?php
namespace Core;
defined("APPPATH") OR die("Access denied");

//use \Core\Langs;

class Controller {

	public function __construct() {
		// Obtener de la BD todos los datos genéricos de cada página
		View::set("lang", langs::getLang());
		$this->getMetaData();
	}

	private function getMetaData() {
		$langs = langs::getLangs();
		$langStrings = $langs->node('metadata');

		$pageName = strtolower(App::getMethod());
		if ($pageName == 'index') { $pageName = strtolower(App::getController()); }
		View::set("title", $langStrings->$pageName->title);
		View::set("description", $langStrings->$pageName->description);
		View::set("keywords", $langStrings->$pageName->keywords);
	}
}
