<?php
class Conexion
{
    private $db_host;
	private $db_name;
	private $db_user;
	private $db_pass;

    public function __construct($idMem=null)
    {
	$this->db_host = "localhost";
		$this->db_name = "tiempocompartido";
		$this->db_user = "root";
		$this->db_pass = "";
	/*	
        $this->db_host = "localhost";
		$this->db_name = "wwwfunda_tc";
		$this->db_user = "wwwfunda_root";
		$this->db_pass = "klwS@m";
        	*/
        
		$this->conectar($this->db_host,$this->db_name,$this->db_user,$this->db_pass);
	}

    public static function conectar($db_host = null, $db_name = null, $db_user = null, $db_pass = null)
    {			
		mysql_connect($db_host, $db_user,$db_pass) or die(mysql_error()); 
		mysql_select_db($db_name) or die(mysql_error());
		@mysql_query("SET character_set_results='utf8'");
	}
	
	
	public static function limpiar($str)
	{
		$nopermitidos = array("'",'\\','<','>',"\"");
		$str = str_replace($nopermitidos, "", $str);
		return htmlentities(trim($str), ENT_QUOTES);
	}



    public static function encrypt($cadena, $clave = "reason")

    {
        $cifrado = MCRYPT_RIJNDAEL_256;
        $modo = MCRYPT_MODE_ECB;
        return base64_encode( mcrypt_encrypt($cifrado, $clave, $cadena, $modo,
            mcrypt_create_iv(mcrypt_get_iv_size($cifrado, $modo), MCRYPT_RAND)
            ));
    }


    public static function decrypt($cadena, $clave = "reason")

    {

		$cifrado = MCRYPT_RIJNDAEL_256;
		$modo = MCRYPT_MODE_ECB;
		return  base64_decode( mcrypt_decrypt($cifrado, $clave, $cadena, $modo,
			mcrypt_create_iv(mcrypt_get_iv_size($cifrado, $modo), MCRYPT_RAND)
			));

    }





	
	
}
?>