<?php

class page_core {
	static protected $uri;
	static protected $lang;


	public function __construct($lang) {
		$requertUri = explode("?", $_SERVER['REQUEST_URI']);
		$this->uri = $requertUri[0];

		$this->lang = $lang;
	}

	private function sliceUri() {
		$auxLength = isset($_GET['lang']) ? 4 : 1;
		$auxUri = substr_replace($this->uri, "", 0, $auxLength);
		$arrUri = explode("/", $auxUri);
	}

	private function scanSections() {
		//scan sections folder
	}

	public function getPage() {

	}

}
?>