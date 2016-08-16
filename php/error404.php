<?php
/*
	echo "<pre>";
	print_r($_REQUEST);
	echo $_SERVER["HTTP_HOST"]."/error404.html";
	echo "</pre>";
	die;
*/

	if (isset($_REQUEST["lang"]) && $_REQUEST["lang"] != '') {
		$lang = '/'.$_REQUEST["lang"];
	} else {
		$lang = "";
	}

	$url = $_SERVER["HTTP_HOST"]."/error404/";
	$ch = curl_init($url);

/*	curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true ); */
	curl_setopt( $ch, CURLOPT_HEADER, true );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_USERAGENT, isset($_GET['user_agent']) ? $_GET['user_agent'] : $_SERVER['HTTP_USER_AGENT'] );

	list($header, $contents) = preg_split('/([\r\n][\r\n])\\1/', curl_exec($ch), 2);
	$status = curl_getinfo( $ch );
	header('Content-Type: text/html');

	echo $contents;
	curl_close( $ch );
?>