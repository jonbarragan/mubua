<?php

require_once(ABSPATH . "classes/core/page.class.php" );

class page extends page_core {

	public function __construct($lang) {
		parent::__construct($lang);

		echo $this->lang." - ".$this->uri;
	}

}
?>