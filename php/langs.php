<?php

$langs = array();
$isoDefecto = '';
foreach ($configStrings->langs as $value) {
	if ($value->front == 1) {
		if ($value->defecto == 1) { $isoDefecto = (string)$value->iso; }
		$langs[(string)$value->iso] = array(
			'lang' => (string)$value->idioma,
			'orden' => (string)$value->orden,
			'estado' => (string)$value->front
		);
	}
}

$GLOBALS['iso_defecto'] = $isoDefecto;

uasort($langs, "cmp");

$lang = (isset($_GET['lang']) && $_GET['lang'] != '')?$_GET['lang']:$isoDefecto;
include(ABSPATH ."php/localization.php");

$nlangs = count($langs);

?>