<?php

require_once(ABSPATH . "classes/core/db.class.php" );

class db extends db_core {

	static protected $server = 'localhost';

	/* Production DataBases */
	static protected $bd = 'mubua';
	static protected $user = 'l35User_db';
	static protected $pass = 'Ibjc9_42';

	static protected $bdLogs = 'mubua_logs';
	static protected $userLogs = 'l35User_db_logs';
	static protected $passLogs = 'Agfg7&27';

	/* localhost DataBases */
	static protected $bdLocal = 'mubua';
	static protected $userLocal = 'root';
	static protected $passLocal = 'root';

	static protected $bdLogsLocal = 'mubua_logs';
	static protected $userLogsLocal = 'root';
	static protected $passLogsLocal = 'root';
}

?>