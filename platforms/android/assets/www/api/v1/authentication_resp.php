<?php 
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    $response["uid"] = $session['uid'];
    $response["email"] = $session['email'];
    $response["name"] = $session['name'];
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
    $user = $db->getOneRecord("select uid,name,password,email,created from customers_auth where phone='$email' or email='$email'");
    if ($user != NULL) {
      if(passwordHash::check_password($user['password'],$password)){
        $response['status'] = "success";
        $response['message'] = 'Ha accesado correctamente.';
        $response['name'] = $user['name'];
        $response['uid'] = $user['uid'];
        $response['email'] = $user['email'];
        $response['createdAt'] = $user['created'];


        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['uid'] = $user['uid'];
        $_SESSION['email'] = $email;
        $_SESSION['name'] = $user['name'];
      } else {
        $response['status'] = "error";
        $response['message'] = 'Login failed. Incorrect credentials';
      }
    }else {
      $response['status'] = "error";
      $response['message'] = '¡No se ha encontrado una cuenta con lso datos proporcionados!';
    }
    echoResponse(200, $response);
});
$app->post('/signUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'name', 'password'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    $phone = $r->customer->phone;
    $name = $r->customer->name;
    $email = $r->customer->email;
    $address = $r->customer->address;
    $password = $r->customer->password;
    $isUserExists = $db->getOneRecord("select 1 from customers_auth where phone='$phone' or email='$email'");
    if(!$isUserExists){
        $r->customer->password = passwordHash::hash($password);
        $tabble_name = "customers_auth";
        $column_names = array('phone', 'name', 'email', 'password', 'city', 'address');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "¡La cuenta ha sido creada correctamente!";
            $response["uid"] = $result;
            if (!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['uid'] = $response["uid"];
            $_SESSION['phone'] = $phone;
            $_SESSION['name'] = $name;
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
    
    $rows = $db->select("membresias","*",$response);
    echoResponse(200, $rows);

});




$app->get('/propiedad/:idMem', function($idMem) {

    $response = array();
    $db = new DbHandler();

    $property = $db->getOneRecord("select * from membresias where idMem='$idMem'");
    if ($property != NULL) {

      $response['status'] = "success";
      $response['message'] = 'Ha obtenido la información correctamente.';
      $response['data'] = $property;

    }else {
      $response['status'] = "error";
      $response['message'] = '¡No se ha encontrado una propiedad con los datos proporcionados!';
    }
    echoResponse(200, $response);

});




?>