<?php
class Configuracion
{
	public  $site_name;
	public  $host;
	public  $dirImgs;
  public  $config;

		/*
		public function __construct()
	{
    $this->site_name = "tiempocompartidomovil";
		$this->host = "http://localhost/tiempocompartidomovil/";
		$this->dirImgs = "http://localhost/tiempocompartidomovil/gallery/thumbs/";
		$this->config = array("host"=>"http://localhost/tiempocompartidomovil/","site_name"=>"tiempocompartidomovil","dirImgs"=>"http://localhost/tiempocompartidomovil/catalogo_imgs/","dirImgsThumbs"=>"http://localhost/tiempocompartidomovil/gallery/thumbs/","dirImgs60"=>"http://localhost/tiempocompartidomovil/gallery/60/");
	}
	
	public function get_config(){
		return  array("host"=>"http://localhost/tiempocompartidomovil/",
									"site_name"=>"tiempocompartidomovil",
									"dirImgs"=>"http://localhost/tiempocompartidomovil/catalogo_imgs/",
									"dirImgsThumbs"=>"http://localhost/tiempocompartidomovil/gallery/thumbs/",
									"dirImgs60"=>"http://localhost/tiempocompartidomovil/gallery/60/");
	}
	*/
	public function __construct()
	{
    $this->site_name = "tiempocompartido";
		$this->host = "http://ng.tiempocompartido.com/";
		$this->dirImgs = "http://www.tiempocompartido.com/admin/gallery/thumbs/";
		$this->config = array("host"=>"http://ng.tiempocompartido/","site_name"=>"tiempocompartido","dirImgs"=>"http://www.tiempocompartido.com/catalogo_imgs/","dirImgsThumbs"=>"http://www.tiempocompartido.com/admin/gallery/thumbs/","dirImgs60"=>"http://www.tiempocompartido.com/admin/gallery/60/");
	}
	
	public function get_config(){
		return  array("host"=>"http://ng.tiempocompartido.com/",
									"site_name"=>"tiempocompartido",
									"dirImgs"=>"http://www.tiempocompartido.com/catalogo_imgs/",
									"dirImgsThumbs"=>"http://www.tiempocompartido.com/admin/gallery/thumbs/",
									"dirImgs60"=>"http://www.tiempocompartido.com/admin/gallery/60/");
	}
	

}
?>