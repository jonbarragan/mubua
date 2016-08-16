<?php

if (!isset($_SESSION)) { session_start(); }
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', 1);

define( 'ABSPATH', $_SERVER['DOCUMENT_ROOT'] . '/' );
define( 'APPPATH', ABSPATH . 'App/');

$GLOBALS['dir_imgs'] = $dir_imgs;
$GLOBALS['dir_docs'] = $dir_docs;

require_once(ABSPATH . "php/functions.php");

require ABSPATH . "php/autoload.php";

/*
require_once(ABSPATH . "classes/db.class.php");
require_once(ABSPATH . "classes/langs.class.php");
require_once(ABSPATH . "classes/page.class.php");
*/

/* CONFIG STRINGS JSON */
require(ABSPATH . "php/config_strings.php");

/* LANG CONFIGURATION */
include(ABSPATH . "php/langs.php");

/* LANG STRINGS JSON */
//include(ABSPATH . "php/lang_strings.php");

//var_dump($langStrings);
//$page = new page($lang);
$app = new \Core\App($lang);

//$page->renderView(['people' => ['Jon', 'Iratxe', 'Leire', 'Laika'], 'foo' => 'bar']);
//$page->renderView();

$app->render();

// VENTA
// HISTORIAL DE VENTAS
// CERRAR CAJA
// ESTADISTICAS
// AJUSTES

?>