<?php

switch ($lang) {
	case 'eu' : setlocale(LC_ALL, 'eu_ES@euro', 'eu_ES.UTF-8', 'eu_ES', 'eu');
		$locale = 'eu_ES';
		break;
	case 'es' : setlocale(LC_ALL, 'es_ES@euro', 'es_ES.UTF-8', 'es_ES', 'es');
		$locale = 'es_ES';
		break;
	case 'de' : setlocale(LC_ALL, 'de_DE@euro', 'de_DE.UTF-8', 'de_DE', 'de', 'ge');
		$locale = 'de_DE';
		break;
	case 'fr' : setlocale(LC_ALL, 'fr_FR@euro', 'fr_FR.UTF-8', 'fr_FR', 'fr');
		$locale = 'fr_FR';
		break;
	case 'it' : setlocale(LC_ALL, 'it_IT@euro', 'it_IT.UTF-8', 'it_IT', 'it');
		$locale = 'it_IT';
		break;
	default : setlocale(LC_ALL, 'en_GB@euro', 'en_GB.UTF-8', 'en_GB', 'en');
		$locale = 'en_GB';
		break;
}

setlocale(LC_MONETARY, 'es_ES');

?>