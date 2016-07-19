<?php

class db_core extends mysqli {
	static protected $db;
	static protected $logs;

	static protected $localhost = array('127.0.0.1', "::1");
	static protected $server = '';

	/* Production DataBases */
	static protected $bd = '';
	static protected $user = '';
	static protected $pass = '';

	static protected $bdLogs = '';
	static protected $userLogs = '';
	static protected $passLogs = '';

	/* localhost DataBases */
	static protected $bdLocal = '';
	static protected $userLocal = '';
	static protected $passLocal = '';

	static protected $bdLogsLocal = '';
	static protected $userLogsLocal = '';
	static protected $passLogsLocal = '';

	public function __construct($server, $user, $pass, $bd) {
		parent::__construct($server, $user, $pass, $bd);
		if (mysqli_connect_error()) die('Error de Conexión (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
	}

	static function getDB() {
		if (db::$db == null) {
			if (in_array($_SERVER['REMOTE_ADDR'], db::$localhost)) {
				$db = new self(db::$server, db::$userLocal, db::$passLocal, db::$bdLocal);
			} else {
				$db = new self(db::$server, db::$user, db::$pass, db::$bd);
			}
			$db->set_charset('utf8');
			db::$db =& $db;
		}
		return db::$db;
	}

	static function closeDB() {
		if (db::$db != null) {
			return db::$db->close();
		}
	}

	static function getLogDB() {
		if (db::$logs == null) {
			if (in_array($_SERVER['REMOTE_ADDR'], db::$localhost)) {
				$logs = new self(db::$server, db::$userLogsLocal, db::$passLogsLocal, db::$bdLogsLocal);
			} else {
				$logs = new self(db::$server, db::$userLogs, db::$passLogs, db::$bdLogs);
			}
			$logs->set_charset('utf8');
			db::$logs =& $logs;
		}
		return db::$logs;
	}

	static function closeLogDB() {
		if (db::$logs != null) {
			return db::$logs->close();
		}
	}


	public function addElement($fields, $values, $table) {
		$form = array();
		foreach ($values as $key => $value) { $form[] = db::escape(trim($value)); }
		$fields_sql = implode(", ", $fields);
		$values_sql = implode(", ", $form);
		$sql = "INSERT INTO ".$table." (".$fields_sql.") VALUES (".$values_sql.")";
		//die($sql."<br>");

		return db::$db->query($sql)?true:false;
	}

	public function editElement( $fields, $values, $where, $table) {
		$form = array();
		foreach ($values as $key => $value) { $form[] = $fields[$key]." = '".$value."'"; }
		$values_sql = implode(", ", $form);
		$form = array();
		foreach ($where as $key => $value) { $form[] = $key." = '".$value."'"; }
		$where = array();
		$where = implode(" AND ", $form);
		$sql = "UPDATE ".$table." SET ".$values_sql. " WHERE ".$where."";
		//die($sql."<br>");

		return db::$db->query($sql)?true:false;
	}

	public function editElementOp($fields, $values, $where, $table, $op="+") {
		$form = array();
		foreach ($values as $key => $value) { $form[] = $fields[$key]." = ".$fields[$key]." ".$op." ".escape($value); }
		$values_sql = implode(", ", $form);
		$form = array();
		foreach ($where as $key => $value) { $form[] = $key." = ".escape($value); }
		$where = array();
		$where = implode(" AND ", $form);
		$sql = "UPDATE ".$table." SET ".$values_sql. " WHERE ".$where."";
		//die($sql."<br>");

		return db::$db->query($sql)?true:false;
	}

	public function deleteElement($where, $table) {
		$form = array();
		foreach ($where as $key => $value) { $form[] = $key." = ".escape($value); }
		$where = array();
		$where = implode(" AND ", $form);
		$sql = "DELETE FROM ".$table." WHERE ".$where;
		//die($sql."<br>");

		return db::$db->query($sql)?true:false;
	}


	public function addLog($fields, $values, $table) {
		$form = array();
		foreach ($values as $key => $value) { $form[] = "'".$value."'"; }
		$fields_sql = implode(", ", $fields);
		$values_sql = implode(", ", $form);
		$sql = "INSERT INTO ".$table." (".$fields_sql.") VALUES (".$values_sql.")";
		//echo $sql."<br>";
		//die($sql."<br>");
		return db::$logs->query($sql)?true:false;
	}


	public function lastInsertID() {
		return db::$db->insert_id;
	}

	public function escape($str) {
		if ($str != "NULL" && $str != "NOW()") {
			if (get_magic_quotes_gpc()) { $str = stripslashes($str); }
			$str = (is_string($str) || $str == '') ? "'".db::$db->real_escape_string($str)."'" : db::$db->real_escape_string($str);
		}

		return $str;
	}
}
?>