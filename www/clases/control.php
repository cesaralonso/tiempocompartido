<?php
/*
CONTROLADOR
*/
require ("clases/clsConexion.php");
$con = new Conexion();

$modulo = $_GET['modulo'];
$accion = $_GET['accion'];

switch($modulo){
	
	case "login":
	
		$email    =  $_GET['email'];
		$password =  $_GET['password'];
		
		switch($accion){
			case "entrar":
				$sql = "SELECT * FROM web_users WHERE email = '".$email."' and password = '".$password."'";
				$qry = mysql_query($sql);
				if ($qry){
					echo "1";
					} else {
						echo "usuario y/ó contraseña no existe.";
					}
			break;
			}
	break;
	
	}


?>
