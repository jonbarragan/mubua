<?php

session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

define( 'ABSPATH', $_SERVER['DOCUMENT_ROOT'] . '/' );

$GLOBALS['dir_imagenes'] = $dir_imagenes;
$GLOBALS['dir_documentos'] = $dir_documentos;

require_once(ABSPATH . "classes/db.class.php");

/* CONFIG STRINGS JSON */
require(ABSPATH . "php/config_strings.php");

/* LANG CONFIGURATION */
include(ABSPATH . "php/langs.php");

/* LANG STRINGS JSON */
include(ABSPATH . "php/lang_strings.php");

?>