<?php
require("clsConfiguracion.php");
class Usuario extends Configuracion
{
    public $idUsua;
	public $array_usuario;

	public $arrayConfig;
	
	
    public function __construct($idMem = null)
    {	

		$this->idUsua = $idMem;
		$this->array_membresia = array();
		$this->membresia = false;
		$this->arrayConfig = Configuracion::get_config();
	}


    public function get_membresia($idMem = null)
    {	
		$idMem = (!isset($idMem)) ? $this->idMem : $idMem;
		$sql = "SELECT * FROM  `membresias` WHERE  `idMem` = ".$idMem;
        $qry = mysql_query($sql);
		
		$cnt_mem=mysql_num_rows($qry); 

		if($cnt_mem>=1){
		$r=mysql_fetch_array($qry);
		unset($this->array_membresia);
		unset($arr_membresia);

		/* CARACTERÍSTAICAS */
		$caracteristicas = explode("|",$r['caracteristicas']);
		
		foreach ($caracteristicas as $item => $valor){
			if($valor!=""){
				$caracte[$valor] = ($valor!="_")?"true":"false";
			}
		}
		/*FIN  CARACTERÍSTAICAS */
  
		$arr_membresia =  array(
								"idMem" 		=> $r['idMem'],
								"club" 			=> $r['club'],
								"informacion" 	=> $r['info_adicional'],
								"dormitorios" 	=> $r['dormitorios'],
								"cap_max" 		=> $r['cap_max'],
								"ciudad" 		=> $r['ciudad'],
								"pais" 			=> $r['pais'],
								"venta" 		=> ($r['venta']=="1") ? true : false,
								"renta" 		=> ($r['renta']=="1") ? true : false,
								"intercambio" 	=> ($r['intercambio']=="1") ? true : false,
								"precio_venta"  => $r['precio_venta'],
								"precio_renta"  => $r['precio_renta'],
								"moneda_venta"  => $r['moneda_venta'],
								"moneda_renta"  => $r['moneda_renta'],
								"destino_inter" => $r['destino_inter'],				
								"imagen" 		=> $this->get_img($r['idMem'],($this->idMem != "")? "" : 1),
							  'estado' => $r['estado'],
							  'afiliado' => $r['afiliado'],
							  'caracteristicas' => $caracte,
							  'info_adicional_ingles' => $r['info_adicional_ingles'],
							  'url' => $r['url'],
							  'tipo_semana' => $r['tipo_semana'],
							  'tipo_unidad' => $r['tipo_unidad'],
							  'tipo_unidad_ing' => $r['tipo_unidad_ing'],
							  'lock_off' => $r['lock_off'],
							  'sala' => $r['sala'],
							  'banos' => $r['banos'],
							  'tipo_cocina' => $r['tipo_cocina'],
							  'cap_privacidad' => $r['cap_privacidad'],
							  'res_num_sem' => $r['res_num_sem'],
							  'res_freq_sem' => $r['res_freq_sem'],
							  'importe_compra' => $r['importe_compra'],
							  'ocultar_importe' => $r['ocultar_importe'],
							  'fecha_compra' => $r['fecha_compra'],
							  'ocultar_fecha' => $r['ocultar_fecha'],
							  'caducidad_compra' => $r['caducidad_compra'],
							  'sin_caducidad' => $r['sin_caducidad'],
							  'anos_restantes' => $r['anos_restantes'],
							  'importe_mantenimiento' => $r['importe_mantenimiento'],
							  'entrada_renta' => $r['entrada_renta'],
							  'salida_renta' => $r['salida_renta'],
							  'ubicacion' => $r['ubicacion'],
							  'capacidad_inter' => $r['capacidad_inter'],
							  'diferencia_inter' => $r['diferencia_inter'],
							  'idUser' => $r['idUser'],
							  'status' => $r['status'],
							  'tel_contacto' => $r['tel_contacto'],
							  'fecha' => $r['fecha'],
							  'fecha_actualizacion' => $r['fecha_actualizacion'],
							  'especial' => $r['especial'],
							  'num_pais' => $r['num_pais'],
							  'num_estado' => $r['num_estado'],
							  'moneda_cuota' => $r['moneda_cuota'],
							  'fija_datos' => $r['fija_datos'],
							  'puntos_datos' => $r['puntos_datos'],
							  'noches_datos' => $r['noches_datos'],
							  'flotante_datos' => $r['flotante_datos'],
							  'destacar' => $r['destacar'],
							  'fecha_destacado' => $r['fecha_destacado'],
							  'hasta_inter' => $r['hasta_inter'],
							  'precio_neg_renta' => $r['precio_neg_renta'],
							  'precio_neg_venta' => ($r['precio_neg_venta']=="selecciona")?"":$r['precio_neg_venta']			
								);
		if ($this->idMem != "") {
			
			$this->array_membresia = $arr_membresia;	
			$this->membresia = true;
			
			} else {
				
				return $arr_membresia;
				
			}
		}
    }
	

	public function get_valores(){
				
        $qry = mysql_query("SELECT * FROM membresias WHERE status='publicado'");
		$cnt_mem = mysql_num_rows($qry); 
	
		if($cnt_mem>=1){
			while($r=mysql_fetch_array($qry)){
				$arr_clubes['clubes'][] =  array("club" => ucwords($r['club']));
				$array_ciudades['paises'][] =  array("pais" => ucwords($r['pais']));		
				$array_ciudades['ciudades'][] =  array("ciudad" => ucwords($r['ciudad']));				
			}

		$this->array_clubes = $arr_clubes;
		$this->array_paises = $array_ciudades;
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
			"moneda" => @$_GET['moneda'],
			"precio_min" => @$_GET['precio_min'],
			"precio_max" => @$_GET['precio_max'],
			"pers_max" => @$_GET['pers_max'],
			"cuartos" => @$_GET['cuartos'],
			"banos" => @$_GET['banos']
		);
		
		$string = "";
		foreach ($valores as $valor => $item){
				if($item!=""){
					$string .= $valor ." = '".$item."' AND ";
				}
			}

			
        $qry = mysql_query("SELECT * FROM membresias WHERE ".$string." status='publicado' ORDER BY fecha DESC");
		@$cnt_mem = mysql_num_rows($qry); 
	
		if($cnt_mem>=1){
			while($r=mysql_fetch_array($qry)){
				$arr_membresia['membresias'][] =  array("membresia" => $this->get_membresia($r['idMem']));			
			}
			
		$paginas = $cnt_mem/$porpagina;	
		for($i=2;$i<=$paginas+1;$i++){
			$array_paginacion['paginas'][] = array("pagina"=>$i);	
			}
		
		$this->array_paginacion = @$array_paginacion;
		$this->array_membresia  = $arr_membresia;

		}
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
						ORDER BY d.fecha_fin DESC LIMIT 0,2";
			
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
			
		$qry = 	mysql_query($sql);

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

        $qry = 	mysql_query("SELECT * FROM membresias WHERE ciudad='".$ciudad."' OR  pais ='".$pais."' AND status='publicado' ORDER BY fecha DESC LIMIT 0,5");
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
					$qry_img=mysql_query("SELECT nombre, comentario FROM files WHERE idMem = '".$id."' LIMIT 0,".$limit."");
					} else {
					$qry_img=mysql_query("SELECT nombre, comentario FROM files WHERE idMem = '".$id."'");	
						}
				
				$cnt_img = mysql_num_rows($qry_img);	
				// si hay foto
				if($cnt_img>1){
					$cont=0;
					while($f=mysql_fetch_array($qry_img)){	
						$arrImagen[] = array("src"=> $f['nombre'], "descripcion" => $f['comentario'],"dirImgs"=>$this->arrayConfig['dirImgs'], "dirImgsThumbs"=>$this->arrayConfig['dirImgsThumbs'], "dirImgs60"=>$this->arrayConfig['dirImgs60'], "cont"=>$cont);	
						$cont++;		
					}
				} else if($cnt_img==1){
					$f=mysql_fetch_array($qry_img);	
					$arrImagen = array("src"=> $f['nombre'], "descripcion" => $f['comentario'],"dirImgs"=>$this->arrayConfig['dirImgs'], "dirImgsThumbs"=>$this->arrayConfig['dirImgsThumbs'], "dirImgs60"=>$this->arrayConfig['dirImgs60'], "cont"=>0);	
						
				} else if($cnt_img==0){
					$arrImagen = array("src"=>'viejo/familia2.jpg', "descripcion" => 'No hay imagen para esta membresia');			 
				} 
				
				return $arrImagen;
	}



}
?>