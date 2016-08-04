<?php
$langStringsFile = ABSPATH ."/configs/lang.".$lang.".json";
$langStringsContent = file_get_contents( $langStringsFile );
$langStrings = json_decode($langStringsContent);
?>