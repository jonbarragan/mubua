<?php
namespace App\Controllers;
defined("APPPATH") OR die("Access denied");

use \Core\Controller,
	\Core\View;


class Error404 extends Controller {

    public function index() {
        View::set("msg", "Error 404");
        View::render("error/404");
    }
}
