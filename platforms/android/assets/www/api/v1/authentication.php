<?php 
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    $response["uid"] = $session['uid'];
    $response["email"] = $session['email'];
    $response["nombre"] = $session['nombre'];
    echoResponse(200, $session);
});

$app->post('/login', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'password'),$r->customer);
    $response = array();
    $db = new DbHandler();
    $password = $r->customer->password;
    $email = $r->customer->email;
    $user = $db->getOneRecord("select id,nombre,password,email,acceso from web_users where email='$email'");
    if ($user != NULL) {
      if(passwordHash::check_password($user['password'],$password)){


        $response['status'] = "success";
        $response['message'] = 'Ha accesado correctamente.';
        $response['nombre'] = $user['nombre'];
        $response['uid'] = $user['id'];
        $response['email'] = $user['email'];
        $response['createdAt'] = $user['acceso'];
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['uid'] = $user['id'];
        $_SESSION['email'] = $email;
        $_SESSION['nombre'] = $user['nombre'];
      } else {
        $response['status'] = "error";
        $response['message'] = 'Login failed. Incorrect credentials';
      }
    }else {
      $response['status'] = "error";
      $response['message'] = '¡No se ha encontrado una cuenta con los datos proporcionados!';
    }
    echoResponse(200, $response);
});
$app->post('/signUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'nombre', 'password'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    $telefono = $r->customer->telefono;
    $nombre = $r->customer->nombre;
    $email = $r->customer->email;
    $pais = $r->customer->pais;
    $password = $r->customer->password;
    $isUserExists = $db->getOneRecord("select 1 from web_users where email='$email'");


    if(!$isUserExists){
        $r->customer->password = passwordHash::hash($password);
        $tabble_nombre = "web_users";
        $column_nombres = array('telefono', 'nombre', 'email', 'password', 'ciudad','pais');


        $result = $db->insertIntoTable($r->customer, $column_nombres, $tabble_nombre);
        if ($result != NULL) {

            $response["status"] = "success";
            $response["message"] = "¡La cuenta ha sido creada correctamente!";
            $response["uid"] = $result;
            if (!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['uid'] = $response["uid"];
            $_SESSION['telefono'] = $telefono;
            $_SESSION['nombre'] = $nombre;
            $_SESSION['email'] = $email;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Ha ocurrido un error al tratar de crear la cuenta. Por favor trate nuevamente";
            echoResponse(201, $response);
        }            
    }else{
        $response["status"] = "error";
        $response["message"] = "¡Un usuario con este email y/ó teléfono ya existe!";
        echoResponse(201, $response);
    }
});
$app->get('/logout', function() {
    $db = new DbHandler();
    $session = $db->destroySession();
    $response["status"] = "info";
    $response["message"] = "Se ha cerrado la sesión correctamente";
    echoResponse(200, $response);
});




$app->get('/destacadas', function() {

    $response = array();
    $db = new DbHandler();
    
    $rows = $db->select("membresias","*",array("status"=>"publicado"),"10");
    echoResponse(200, $rows);

});




$app->get('/propiedad/:idMem', function($idMem) {

    $response = array();
    $db = new DbHandler($idMem);
    
    //$rows = $db->getProperty("select * from membresias where idMem='$idMem' and status = 'publicado'");
    $rows = $db->getProperty($idMem);
    if ($rows != NULL) {

      $response['status'] = "success";
      $response['message'] = 'Ha obtenido la información correctamente.';
      $response['data'] = $rows;

    }else {
      $response['status'] = "error";
      $response['message'] = '¡No se ha encontrado una propiedad con los datos proporcionados!';
    }
    echoResponse(200, $response);

});




?>