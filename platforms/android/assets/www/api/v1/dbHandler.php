<?php
require_once("./../../clases/clsConfiguracion.php");

class DbHandler extends Configuracion {

    private $conn;


    public $idMem;
    public $array_membresia;
    public $membresia;
    public $arrayConfig;
    
    public $array_clubes;
    public $array_paises;
    public $array_ciudades;
    
    public $array_paginacion;
    public $paginacion_rango;


    function __construct($idM = null) {
        require_once 'dbConnect.php';
        // opening db connection
        $db = new dbConnect();
        $this->conn = $db->connect();


        $this->idMem = $idM;
        $this->array_membresia = array();
        $this->array_paginacion = array();
        $this->membresia = false;
        $this->paginacion_rango = "";
        $this->arrayConfig = Configuracion::get_config();

    }


    public function get_usuario($idUser = null)
    {   
        $usuario = "";

        $stmt =  $this->conn->prepare("SELECT * FROM  `web_users` WHERE  `id` = ".$idUser);
        $stmt->execute();
        $affected_rows = $stmt->rowCount();
       
        if($affected_rows>=1){

        $r = $stmt->fetch(PDO::FETCH_ASSOC);


            $usuario =  array(
                                "id"            => $r['id'],
                                "user"          => $r['user'],
                                "email"         => $r['email'],
                                "telefono"      => ($r['telefono']!="0")?$r['telefono']:"No especificado",      
                                "celular"       => ($r['celular']!="0")?$r['celular']:"No especificado",        
                                "nombre"        => htmlspecialchars(($r['nombre']!="")?utf8_decode($r['nombre']):""),       
                                "apellidos"     => htmlspecialchars(($r['apellidos']!="")?utf8_decode($r['apellidos']):"No especificado"),      
                                "pais"          => htmlspecialchars(($r['pais']!="")?$r['pais']:"No especificado"),     
                                "estado"        => htmlspecialchars(($r['estado']!="")?$r['estado']:"No especificado"),     
                                "ciudad"        => htmlspecialchars(($r['ciudad']!="")?$r['ciudad']:"No especificado"),     
                                "lenguajes"     => htmlspecialchars(($r['lenguajes']!="")?utf8_decode($r['lenguajes']):"No especificado"),      
                                "status"        => ($r['status']!="")?$r['status']:"No especificado",       
                                "acceso"        => ($r['acceso']!="")?$r['acceso']:"No especificado",       
                                "tipo"          => ($r['tipo']!="")?$r['tipo']:"No especificado",       
                                "fecha"         => ($r['fecha']!="")?$r['fecha']:"No especificada",     
                                "tipo_usuario"  => ($r['tipo_usuario']=="nopropietario")?"No propietario":($r['tipo_usuario']=="propietario")?"Propietario":"No especificado");         

        
        }
        return $usuario;
    }



  public function enlace_des($tipo,$renta,$venta,$intercambio,$ciudad,$pais,$club){
        $enlace = "Tiempo Compartido en ".(($renta=="true")?"Renta":"").((($renta=="true") && ($venta=="true"))?" / ":"").(($venta=="true")?"Venta":"").(((($renta=="true") || ($venta=="true")) && $intercambio=="true")?" / ":"").(($intercambio=="true")?"Intercambio":"").", ".$ciudad.", ".$pais.", ".$club;
        return $enlace;
    }
   public function enlace($tipo,$renta,$venta,$intercambio,$ciudad,$pais,$club,$id){
        $enlace = $this->enlace_des($tipo,$renta,$venta,$intercambio,$ciudad,$pais,$club);
        return strtolower(str_replace("--","-",str_replace("/","",str_replace(",","",str_replace(" ","-",$enlace)))))."--".$id."/"; 
    }


  public function get_membresia($idMem = null)
  { 
        $idMem = (!isset($idMem)) ? $this->idMem : $idMem;

        $stmt =  $this->conn->prepare("SELECT * FROM  `membresias` WHERE  `idMem` = ".$idMem."");
        $stmt->execute();
        $affected_rows = $stmt->rowCount();

        $r = $stmt->fetch(PDO::FETCH_ASSOC);


        if($affected_rows>=1){
        unset($this->array_membresia);
        unset($arr_membresia);

        /* CARACTERÍSTAICAS */
        $caracteristicas = explode("|",$r['caracteristicas']);
        
        $caracte = "";
        foreach ($caracteristicas as $item => $valor){
            
            if($valor!=""){
                if ($valor!="_"){
                    $caracte[] = ucwords($valor);
                }
            }
        }
        /*FIN  CARACTERÍSTAICAS */



        $arr_membresia =  array(
                                "idMem"         => $r['idMem'],
                                "enlace"        => $this->enlace("Tiempo Compartido", (($r['renta']==1) ? "true" : "false"),(($r['venta']==1) ? "true" : "false"),(($r['intercambio']==1) ? "true" : "false"),$r["ciudad"],$r["pais"],$r["club"],$r["idMem"])."/",
                                "enlace_des" => $this->enlace_des("Tiempo Compartido",(($r['renta']==1) ? "true" : "false"),(($r['venta']==1) ? "true" : "false"),(($r['intercambio']==1) ? "true" : "false"),$r["ciudad"],$r["pais"],$r["club"]),
                                "club"          => $r['club'],
                                "informacion"   => htmlspecialchars(utf8_decode($r['info_adicional'])),
                                "dormitorios"   => $r['dormitorios'],
                                "cap_max"       => $r['cap_max'],
                                "ciudad"        => $r['ciudad'],
                                "pais"          => $r['pais'],
                                "venta"         => ($r['venta']==1) ? "true" : "false",
                                "renta"         => ($r['renta']==1) ? "true" : "false",
                                "intercambio"   => ($r['intercambio']==1) ? "true" : "false",
                                "precio_venta"  => $r['precio_venta'],
                                "precio_renta"  => $r['precio_renta'],
                                "moneda_venta"  => $r['moneda_venta'],
                                "moneda_renta"  => $r['moneda_renta'],
                                "destino_inter" => $r['destino_inter'],             
                                "imagen"        => $this->get_img($r['idMem'],($this->idMem != "")? "" : 1),
                                'estado'            => $r['estado'],
                                'afiliado'      => $r['afiliado'],
                                'caracteristicas' => $caracte,
                                'info_adicional_ingles' => htmlspecialchars(utf8_decode($r['info_adicional_ingles'])),
                                'url'           => $r['url'],
                                'tipo_semana'   => $r['tipo_semana'],
                                'tipo_unidad'   => $r['tipo_unidad'],
                                'tipo_unidad_ing' => $r['tipo_unidad_ing'],
                                'lock_off'      => $r['lock_off'],
                                'sala'          => $r['sala'],
                                'banos'             => $r['banos'],
                                'tipo_cocina'   => $r['tipo_cocina'],
                                'cap_privacidad'    => $r['cap_privacidad'],
                                'res_num_sem'   => $r['res_num_sem'],
                                'res_freq_sem'  => $r['res_freq_sem'],
                                'importe_compra'    => $r['importe_compra'],
                                'ocultar_importe' => $r['ocultar_importe'],
                                'fecha_compra'  => $r['fecha_compra'],
                                'ocultar_fecha'     => $r['ocultar_fecha'],
                                'caducidad_compra' => $r['caducidad_compra'],
                                'sin_caducidad'     => $r['sin_caducidad'],
                                'anos_restantes'    => $r['anos_restantes'],
                                'importe_mantenimiento' => $r['importe_mantenimiento'],
                                'entrada_renta'     => $r['entrada_renta'],
                                'salida_renta'  => $r['salida_renta'],
                                'ubicacion'         => $r['ubicacion'],
                                'capacidad_inter' => $r['capacidad_inter'],
                                'diferencia_inter' => $r['diferencia_inter'],
                                'status'            => $r['status'],
                                'tel_contacto'  => $r['tel_contacto'],
                                'fecha'             => $r['fecha'],
                                'fecha_actualizacion' => $r['fecha_actualizacion'],
                                'especial'      => $r['especial'],
                                'num_pais'      => $r['num_pais'],
                                'num_estado'        => $r['num_estado'],
                                'moneda_cuota'  => $r['moneda_cuota'],
                                'fija_datos'        => $r['fija_datos'],
                                'puntos_datos'  => $r['puntos_datos'],
                                'noches_datos'  => $r['noches_datos'],
                                'flotante_datos'    => $r['flotante_datos'],
                                'destacar'      => $r['destacar'],
                                'fecha_destacado' => $r['fecha_destacado'],
                                'hasta_inter'   => $r['hasta_inter'],
                                'precio_neg_renta' => $r['precio_neg_renta'],
                                'precio_neg_venta' => ($r['precio_neg_venta']=="selecciona")?"":$r['precio_neg_venta'],
                                'usuario'       => $this->get_usuario($r['idUser']),
                                'comentarios'   => $this->get_comentarios($r['idMem'])
                                );
        /*
        if ($this->idMem != "") {
            
            $this->array_membresia = $arr_membresia;    
            $this->membresia = true;
            
            } else {
                
                return $arr_membresia;
                
            }
            */
              return $arr_membresia;
        }
    }
    

    public function get_valores(){
                
    $qry = mysql_query("SELECT * FROM membresias WHERE status='publicado'");
        $cnt_mem = mysql_num_rows($qry); 
    
        if($cnt_mem>=1){
            while($r=mysql_fetch_array($qry)){
                $arr_clubes['clubes'][] =  array("club" => ucwords($r['club']));
                $array_paises['paises'][] =  array("pais" => ucwords($r['pais']));      
                $array_ciudades['ciudades'][] =  array("ciudad" => ucwords($r['ciudad']));              
            }

            $this->array_clubes = $arr_clubes;
            $this->array_paises = $array_paises;
            $this->array_ciudades = $array_ciudades;

        }
    
    }

        
    public function get_busqueda_resultados($porpagina){

        $valores = array(
            "pagina" => @$_GET['pagina'],
            "club" => @$_GET['club'],
            "pais" => @$_GET['pais'],
            "ciudad" => @$_GET['ciudad'],
            "renta" => (@$_GET['renta']=='on')? 1: "",
            "venta" => (@$_GET['venta']=='on')? 1: "",
            "intercambio" => (@$_GET['intercambio']=='on')? 1: "",
            "moneda_venta" => (@$_GET['venta']=='on')? @$_GET['moneda']: "",
            "moneda_renta" => (@$_GET['renta']=='on')? @$_GET['moneda']: "",
            "precio_min" => @$_GET['precio_min'],
            "precio_max" => @$_GET['precio_max'],
            "pers_max" => @$_GET['pers_max'],
            "cuartos" => @$_GET['cuartos'],
            "banos" => @$_GET['banos']
        );
        
        /*
        echo"<pre>";
        print_r($valores);
        echo"</pre>";
        */
        
        $string = "";
        foreach ($valores as $valor => $item){
            if($item!="" && $valor!="pagina"){
                $string .= $valor ." = '".$item."' AND ";
            }
        }
        
        $qry_cnt = mysql_query("SELECT * FROM membresias WHERE ".$string." status='publicado'");
    $qry = mysql_query("SELECT * FROM membresias WHERE ".$string." status='publicado' ORDER BY fecha DESC LIMIT ".($valores["pagina"]-1)*$porpagina.",".$valores["pagina"]*$porpagina);
        
        $this->paginacion_rango = ($valores["pagina"]-1)*$porpagina." de ".$valores["pagina"]*$porpagina;
        
        @$cnt = mysql_num_rows($qry_cnt); 
        @$cnt_mem = mysql_num_rows($qry); 
    
        if($cnt_mem>=1){
            while($r=mysql_fetch_array($qry)){
                $arr_membresia['membresias'][] =  array("membresia" => $this->get_membresia($r['idMem']));          
            }

        $this->array_membresia  = $arr_membresia;

        }
                    
        $paginas = $cnt/$porpagina; 
        for($i=1;$i<=$paginas+1;$i++){
            $array_paginacion['paginas'][] = array("pagina"=>$i);   
        }
        
        $this->array_paginacion = @$array_paginacion;
    }

    
    public function get_especiales($especial,$pais=null,$ciudad=null){

        switch ($especial){
            
            case "destacadas":
            
                $hoy=date("Y-m-d"); 
                //d.fecha_inicio <= '".$hoy."'
                //AND  d.fecha_fin >= '".$hoy."'
                                    
                $sql = "SELECT *
                                FROM destacados AS d
                                INNER JOIN membresias AS m ON m.idMem = d.idMem
                                WHERE
                                m.status='publicado'
                                ORDER BY d.fecha_fin DESC";
            
            break;
            case "mas_visitadas":
            
                $sql = "SELECT * FROM membresias, visitas WHERE membresias.idMem = visitas.idMem AND status='publicado' ORDER BY visitas.cont DESC LIMIT 0,5";
            
            break;
            case "relacionadas":
        
                $sql = "SELECT * FROM membresias WHERE ciudad='".$ciudad."' OR  pais ='".$pais."' AND status='publicado' ORDER BY fecha DESC LIMIT 0,5";
                $this->idMem = "";
            break;
            default:
                exit;
            break;
            
        }
            
        $qry =  mysql_query($sql);

        $cnt_mem = mysql_num_rows($qry); 

        if($cnt_mem>=1){
            while($r=mysql_fetch_array($qry)){
                $arr_membresia['membresias'][] =  array("membresia" => $this->get_membresia($r['idMem']));          
            }

        $this->array_membresia = $arr_membresia;
        $this->membresia = true;    
        }
    }
    
        
    public function get_categoria($categoria){

    $qry = mysql_query("SELECT * FROM membresias WHERE ".$categoria." = 1 AND status='publicado' ORDER BY fecha  LIMIT 0,3");
        $cnt_mem = mysql_num_rows($qry); 
    
        if($cnt_mem>=1){
            while($r=mysql_fetch_array($qry)){
                $arr_membresia['membresias'][] =  array("membresia" => $this->get_membresia($r['idMem']));          
            }

        $this->array_membresia = $arr_membresia;
        $this->membresia = true;    
        }
    }


    public function get_membresias_relacionadas($pais=null,$ciudad=null){

    $qry =  mysql_query("SELECT * FROM membresias WHERE ciudad='".$ciudad."' OR  pais ='".$pais."' AND status='publicado' ORDER BY fecha DESC LIMIT 0,5");
        $cnt_mem = mysql_num_rows($qry); 
    
        if($cnt_mem>=1){
            while($r=mysql_fetch_array($qry)){
                $arr_membresia['membresias'][] =  array("membresia" => $this->get_membresia($r['idMem']));  
            }

        $this->array_membresia =$arr_membresia;
        $this->membresia = true;    
            
        }
    }
    
    
    public function get_img($id,  $limit = null){
        

        if ($limit){
            $stmt =  $this->conn->prepare("SELECT nombre, comentario FROM files WHERE idMem = '".$id."' LIMIT 0,".$limit."");            
        } else {
            $stmt =  $this->conn->prepare("SELECT nombre, comentario FROM files WHERE idMem = '".$id."'");       
        }
        $stmt->execute();
        $affected_rows = $stmt->rowCount();


        // si hay foto
        if($affected_rows>1){
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach($rows as $key => $value){
                $arrImagen[] = array("src"=> $rows[$key]["nombre"], "descripcion" => $rows[$key]["comentario"],"dirImgs"=>$this->arrayConfig['dirImgs'], "dirImgsThumbs"=>$this->arrayConfig['dirImgsThumbs'], "dirImgs60"=>$this->arrayConfig['dirImgs60'], "cont"=>$key);  
            }
        } else if($affected_rows==1){
            $f = $stmt->fetch(PDO::FETCH_ASSOC); 
            $arrImagen[] = array("src"=> $f['nombre'], "descripcion" => $f['comentario'],"dirImgs"=>$this->arrayConfig['dirImgs'], "dirImgsThumbs"=>$this->arrayConfig['dirImgsThumbs'], "dirImgs60"=>$this->arrayConfig['dirImgs60'], "cont"=>0);    
                
        } else if($affected_rows==0){
            $arrImagen[] = array("src"=>'sin_foto_m.jpg', "descripcion" => 'No hay imagen para esta membresia', "dirImgsThumbs"=>$this->arrayConfig['dirImgsThumbs']);             
        } 
        
        return $arrImagen;
    }





    public function get_comentarios($id){

        $nuevo_arreglo = array();

        $stmt =  $this->conn->prepare("SELECT web_users.user, preguntas.pregunta, preguntas.fecha, preguntas.idPreg 
                                        FROM preguntas 
                                        INNER JOIN web_users ON web_users.id = preguntas.idUser 
                                        WHERE preguntas.idMem = ".$id." ORDER BY preguntas.idPreg DESC");   

        $stmt->execute();
        $affected_rows = $stmt->rowCount();

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach($rows as $key => $value){

            $nuevo_arreglo[] = array("user"=>$rows[$key]["user"],
                                    "idResp"=>"",
                                    "idPreg"=>$rows[$key]["idPreg"],
                                    "fecha"=>$rows[$key]["fecha"],
                                    "idMem"=>"",
                                    "status"=>"",
                                    "texto"=>utf8_decode($rows[$key]["pregunta"]),
                                    "lpreg"=>true,
                                    "lresp"=>false);

            $stmt2 =  $this->conn->prepare("SELECT web_users.user,respuestas.idResp,respuestas.idPreg,respuestas.fecha,respuestas.idMem,respuestas.status,respuestas.respuesta 
                                            FROM respuestas 
                                            INNER JOIN web_users ON web_users.id = respuestas.idUser
                                            WHERE idPreg = '".$rows[$key]['idPreg']."' ORDER BY fecha DESC");   
            $stmt2->execute();
            $affected_rows2 = $stmt2->rowCount();

            $rows2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);

            foreach($rows2 as $key2 => $value2){

                $nuevo_arreglo[] = array("user"=>$rows2[$key2]["user"],
                                        "idResp"=>$rows2[$key2]["idResp"],
                                        "idPreg"=>$rows2[$key2]["idPreg"],
                                        "fecha"=>$rows2[$key2]["fecha"],
                                        "idMem"=>$rows2[$key2]["idMem"],
                                        "status"=>$rows2[$key2]["user"],
                                        "texto"=>utf8_decode($rows2[$key2]["respuesta"]),
                                        "lpreg"=>false,
                                        "lresp"=>true);
            }

        }

        return $nuevo_arreglo;
    }













    /**
     * Fetching single record
     */
    public function getOneRecord($query) {
        $stmt =  $this->conn->prepare($query.' LIMIT 1');
        $stmt->execute();
        $rows = $stmt->fetch(PDO::FETCH_ASSOC);
        return $rows;
    }
    /**
     * Creating new record
     */
    public function insertIntoTable($obj, $column_names, $table_name) {
        
        $c = (array) $obj;
        $keys = array_keys($c);
        $columns = '';
        $values = '';
        foreach($column_names as $desired_key){ // Check the obj received. If blank insert blank into the array.
           if(!in_array($desired_key, $keys)) {
                $$desired_key = '';
            }else{
                $$desired_key = $c[$desired_key];
            }
            $columns = $columns.$desired_key.',';
            $values = $values."'".$$desired_key."',";
        }

        $stmt =  $this->conn->prepare("INSERT INTO ".$table_name."(".trim($columns,',').") VALUES(".trim($values,',').")");
        $stmt->execute();
        $affected_rows = $stmt->rowCount();
        $lastInsertId = $this->conn->lastInsertId();

        if ($stmt){
            return $lastInsertId;
            } else {
            return NULL;
        }

    }
public function getSession(){
    if (!isset($_SESSION)) {
        session_start();
    }
    $sess = array();
    if(isset($_SESSION['uid']))
    {
        $sess["uid"] = $_SESSION['uid'];
        $sess["nombre"] = $_SESSION['nombre'];
        $sess["email"] = $_SESSION['email'];
    }
    else
    {
        $sess["uid"] = '';
        $sess["nombre"] = 'Guest';
        $sess["email"] = '';
    }
    return $sess;
}
public function destroySession(){
    if (!isset($_SESSION)) {
    session_start();
    }
    if(isset($_SESSION['uid']))
    {
        unset($_SESSION['uid']);
        unset($_SESSION['nombre']);
        unset($_SESSION['email']);
        $info='info';
        if(isSet($_COOKIE[$info]))
        {
            setcookie ($info, '', time() - $cookie_time);
        }
        $msg="Logged Out Successfully...";
    }
    else
    {
        $msg = "Not logged in...";
    }
    return $msg;
}
 

public function getProperty($idMem) {

    return $this->get_membresia($idMem);
}

public function select($table, $columns, $where, $limit){
        try{
            $a = array();
            $w = "";
            foreach ($where as $key => $value) {
                $w .= " and " .$key. " like :".$key;
                $a[":".$key] = $value;
            }

            $stmt = $this->conn->prepare("select ".$columns." from ".$table." where 1=1 ". $w . " LIMIT ".$limit." ");
            $stmt->execute($a);

            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            foreach($rows as $key => $value){
                $arr_membresia[] =  $this->get_membresia($rows[$key]['idMem']);    
            }
            $this->array_membresia = $arr_membresia;

            if(count($rows)<=0){
                $response["status"] = "warning";
                $response["message"] = "No se encontraron datos.";
            }else{
                $response["status"] = "success";
                $response["message"] = "Datos obtenidos de base de datos";
            }
                $response["data"] = $this->array_membresia;
        }catch(PDOException $e){
            $response["status"] = "error";
            $response["message"] = 'Select ha fallado: ' .$e->getMessage();
            $response["data"] = null;
        }
        return $response;
    }



}

?>
