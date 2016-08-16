<?php
namespace Core;
defined('APPPATH') OR die("Access denied");

class App {

	static private $_controller;
	static private $_method = "index";
	static private $_params = [];

	static protected $uri;
	static protected $uriTranslated;
	static protected $lang;
	static protected $arrSections;
	static protected $arrSectionsTranslated;

	public $config = [];

	const CONTROLLERS_NAMESPACE = '\App\Controllers\\';
	//const CONTROLLERS_PATH = APPPATH . 'Controllers/';
	const CONTROLLERS_PATH = '../App/Controllers/';

	const LANGS_NAMESPACE = '\Core\Langs\\';


	public function __construct($lang) {
		$uriAux = self::$uri = $this->parseUrl();
		self::$lang = $lang;

		$this->translateSections();

		//if (file_exists(self::CONTROLLERS_PATH.ucfirst(self::$uriTranslated[0]) . ".php")) {
		if (file_exists(APPPATH . 'Controllers/'.ucfirst(self::$uriTranslated[0]) . ".php")) {
			self::$_controller = ucfirst(self::$uriTranslated[0]);
			unset(self::$uriTranslated[0]);
			unset($uriAux[0]);
		} else {
			//error404();
			//include APPPATH . "Views/errors/404.php";
			//exit;
		}

		//obtenemos la clase con su espacio de nombres
		$fullClass = self::CONTROLLERS_NAMESPACE.self::$_controller;

		//asociamos la instancia a self::$_controller
		self::$_controller = new $fullClass;

		//si existe el segundo segmento comprobamos que el método exista en esa clase
		if (isset(self::$uriTranslated[1])) {

			//aquí tenemos el método
			self::$_method = self::$uriTranslated[1];
			if (method_exists(self::$_controller, self::$uriTranslated[1])) {
				//eliminamos el método de url, así sólo nos quedaran los parámetros del método
				unset(self::$uriTranslated[1]);
				unset($uriAux[1]);
			} else {
				throw new \Exception("Error Processing Method {self::$_method}", 1);
			}
		}
		//asociamos el resto de segmentos a self::$_params para pasarlos al método llamado, por defecto será un array vacío
		//self::$_params = self::$uriTranslated ? array_values(self::$uriTranslated) : [];
		//self::$_params = self::$uri[2] ? self::$uri[2] : [];
		self::$_params = $uriAux ? array_values($uriAux) : [];
	}

	public static function getController() { return self::$_controller; }

	public static function getMethod() { return self::$_method; }

	public static function getParams() { return self::$_params; }

	public static function getUri() { return self::$uri; }


	private function parseUrl() {
		return explode('/', filter_var(ltrim(rtrim(strtolower($_SERVER['REQUEST_URI']), '/'), '/'), FILTER_SANITIZE_URL));
	}

	private function translateSections() {
		//$langs = langs::getLangs(self::$lang);
		//$langs = self::LANGS_NAMESPACE::getLangs(self::$lang);
		$langs = \Core\Langs::getLangs(self::$lang);
		$langStrings = $langs->node('pages');

		//TODO: cotegar el tercer parámetro de la URL (parámetros) => No necesita traducción

		foreach (self::$uri as $value) {
			foreach ($langStrings as $k => $v) {
				if ($v == $value) {
					self::$uriTranslated[] = $k;
				}
			}
		}

		//if (sizeof(self::$uriTranslated) == 0) error404();
		//if (sizeof(self::$uriTranslated) != sizeof(self::$uri)) error404();
		if ((sizeof(self::$uri) == 3 && sizeof(self::$uriTranslated) != 2) || (sizeof(self::$uri) != 3 && (sizeof(self::$uriTranslated) != sizeof(self::$uri)))) error404();
	}

	public function render() {
		call_user_func_array([self::$_controller, self::$_method], self::$_params);
	}
}
?>