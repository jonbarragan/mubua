<?php

function classAutoLoader($className) {
	$classFile = ABSPATH . str_replace('\\', '/', $className).'.php';

	if (is_file($classFile)) {
		require_once $classFile;
	}
}

spl_autoload_register('classAutoLoader');

?>