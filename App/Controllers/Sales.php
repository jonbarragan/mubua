<?php
namespace App\Controllers;
defined("APPPATH") OR die("Access denied");

use \Core\App,
	\Core\Controller,
	\Core\View,
	//\App\Models\Sales as SalesModel,
	\App\Models\User as Users;


class Sales extends Controller {

    public function index() {
        View::set("msg", "Sales Index");
        View::render("sales/index");
    }

/*
    public function return($user, $age) {
        View::set("user", $user);
        View::set("title", "Custom MVC");
        View::render("home");
    }
*/

	public function receipt($id=0) {
		if ($id == 0) { redirect302('/'.App::getUri()[0]); }
        View::set("id_receipt", $id);
        View::render("sales/receipt");
    }

    public function admin($name) {
        $users = Users::getAll();
        View::set("users", $users);
        View::set("title", "Custom MVC");
        View::render("admin");
    }

    public function user($id = 1) {
        $user = Users::getById($id);
        print_r($user);
    }
}
