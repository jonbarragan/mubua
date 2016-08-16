<?php

function error404() {
	header("HTTP/1.0 404 Not Found");
	include("error404.php");
	die();
}

function redirect302($location) {
	header("HTTP/1.1 302 Moved Temporarily");
	header("Location: ".$location);
	die();
}

function snakeCase($input) {
	preg_match_all('!([A-Z][A-Z0-9]*(?=$|[A-Z][a-z0-9])|[A-Za-z][a-z0-9]+)!', $input, $matches);
	$ret = $matches[0];
	foreach ($ret as &$match) {
		$match = $match == strtoupper($match) ? strtolower($match) : lcfirst($match);
	}
	return implode('_', $ret);
}

function camelCase($input) {
	return str_replace(' ', '', ucwords(str_replace('_', ' ', $input)));
}

// source: http://www.paulferrett.com/2009/php-camel-case-functions/
/**
 * Translates a camel case string into a string with underscores (e.g. firstName -&gt; first_name)
 * @param    string   $str    String in camel case format
 * @return    string            $str Translated into underscore format
 */
function from_camel_case($str) {
	$str[0] = strtolower($str[0]);
	$func = create_function('$c', 'return "_" . strtolower($c[1]);');
	return preg_replace_callback('/([A-Z])/', $func, $str);
}

/**
 * Translates a string with underscores into camel case (e.g. first_name -&gt; firstName)
 * @param    string   $str                     String in underscore format
 * @param    bool     $capitalise_first_char   If true, capitalise the first char in $str
 * @return   string                              $str translated into camel caps
 */
function to_camel_case($str, $capitalise_first_char = false) {
	if($capitalise_first_char) {
		$str[0] = strtoupper($str[0]);
	}
	$func = create_function('$c', 'return strtoupper($c[1]);');
	return preg_replace_callback('/_([a-z])/', $func, $str);
}

function toCamelCase($word) {
	return lcfirst(str_replace(' ', '', ucwords(strtr($word, '_-', ' '))));
}

/*
public static function fromCamelCase($str) {
	$str[0] = strtolower($str[0]);
	return preg_replace('/([A-Z])/e', "'_' . strtolower('\\1')", $str);
}

public static function toCamelCase($str, $capitaliseFirstChar = false) {
	if ($capitaliseFirstChar) {
		$str[0] = strtoupper($str[0]);
	}
	return preg_replace('/_([a-z])/e', "strtoupper('\\1')", $str);
}
*/

?>