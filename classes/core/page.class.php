<?php

class page_core {
	static protected $uri;
	static protected $lang;
	static protected $arrSections;
	static protected $arrSectionsTranslated;
	static protected $page;


	public function __construct($lang) {
		$requertUri = explode("?", $_SERVER['REQUEST_URI']);
		//$this->uri = $requertUri[0];
		self::$uri = $requertUri[0];

		//$this->lang = $lang;
		self::$lang = $lang;

		$this->sliceUri();
	}

	private function isLevel() {
		return preg_match("/.html/i", self::$uri) ? false : true;
	}

	private function sliceUri() {
		$auxLength = isset($_GET['lang']) ? 4 : 1;
		$auxUri = substr_replace(self::$uri, "", 0, $auxLength);
		$auxUri = $this->isLevel() ? substr($auxUri, 0, strlen($url) - 1) : $auxUri;

		self::$arrSections = explode("/", $auxUri);
		$this->setPage();
	}

	private function translateSections() {
		$langs = langs::getLangs(self::$lang);
		$langStrings = $langs->node('pages');

		foreach (self::$arrSections as $value) {
			foreach ($langStrings as $k => $v) {
				if ($v == $value) {
					self::$arrSectionsTranslated[] = $k;
				}
			}
		}

		if (sizeof(self::$arrSectionsTranslated) == 0) error404();
	}

	private function setPage() {
		$this->translateSections();
		self::$page = 'pages/'.self::$arrSectionsTranslated[0].'/';
		self::$page .= (isset(self::$arrSectionsTranslated[1]) ? self::$arrSectionsTranslated[1] : 'index').'.php';
	}

	public function getPage() {
		return self::$page;
	}

	//protected function findInPaths($name, $paths) {
	protected function findInPaths() {
		if (file_exists($viewPath = ABSPATH . self::$page)) {
			return $viewPath;
		}

		//TODO: Create Exception class
		throw new Exception("View [self::$page] not found.");
	}

/*
	public function displayPage($data = array()) {
		$data = http_build_query($data);

		//$header = 'Content-type: application/x-www-form-urlencoded';
		$context_options = array('http' =>
			array(
				'method' => 'POST',
				'header' => 'Content-type: application/x-www-form-urlencoded\r\n'
							.'Content Length: '.strlen($data).'\r\n',
				'content' => $data
			)
		);

		$context = stream_context_create($context_options);
		//$html = file_get_contents(ABSPATH . self::$page, false, $context);
		$html = file_get_contents($this->findInPaths(), false, $context);
		//var_dump($html);

		echo $html;
		die();
	}
*/


	public function renderView(array $data = []) {
		//return $this->evaluateView($this->findInPaths(), $data);
		echo $this->evaluateView($this->findInPaths(), $data);
	}

	protected function evaluateView($__path, $__data) {
		$obLevel = ob_get_level();

		ob_start();

		extract($__data, EXTR_SKIP);

		foreach ($__data as $__var_name => &$__value) {
			${$__var_name} = $__value;
		}

		// We'll evaluate the contents of the view inside a try/catch block so we can
		// flush out any stray output that might get out before an error occurs or
		// an exception is thrown. This prevents any partial views from leaking.
		try {
		    include $__path;
		} catch (Exception $e) {
			//TODO: Create Exception class
		    $this->handleViewException($e, $obLevel);
		} catch (Throwable $e) {
			//TODO: Create Exception class
			$this->handleViewException(new FatalThrowableError($e), $obLevel);
		}

		return ltrim(ob_get_clean());
	}

}
?>