<?php
$configStringsFile = ABSPATH .$alias."/configs/config.json";
$configStringsContent = file_get_contents($configStringsFile);
$configStrings = json_decode($configStringsContent);

$localhost = array('127.0.0.1', "::1");
if (in_array($_SERVER['REMOTE_ADDR'], $localhost)) $configStrings->sitio->url = $configStrings->sitio->localurl;
?>