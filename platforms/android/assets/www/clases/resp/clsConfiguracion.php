<?php
class Configuracion
{
	public  $site_name;
	public  $host;
	public  $dirImgs;
  public  $config;

	
		public function __construct()
	{
    $this->site_name = "tiempocompartido";
		$this->host = "http://localhost/tiempocompartido/";
		$this->dirImgs = "http://localhost/tiempocompartido/gallery/thumbs/";
		$this->config = array("host"=>"http://localhost/tiempocompartido/","site_name"=>"tiempocompartido","dirImgs"=>"http://localhost/tiempocompartido/catalogo_imgs/","dirImgsThumbs"=>"http://localhost/tiempocompartido/gallery/thumbs/","dirImgs60"=>"http://localhost/tiempocompartido/gallery/60/");
	}
	
	public function get_config(){
		return  array("host"=>"http://localhost/tiempocompartido/",
									"site_name"=>"tiempocompartido",
									"dirImgs"=>"http://localhost/tiempocompartido/catalogo_imgs/",
									"dirImgsThumbs"=>"http://localhost/tiempocompartido/gallery/thumbs/",
									"dirImgs60"=>"http://localhost/tiempocompartido/gallery/60/");
	}
	
	/*
	public function __construct()
	{
    $this->site_name = "tiempocompartido";
		$this->host = "http://nuevo.tiempocompartido.com/";
		$this->dirImgs = "http://www.tiempocompartido.com/admin/gallery/thumbs/";
		$this->config = array("host"=>"http://nuevo.tiempocompartido/","site_name"=>"tiempocompartido","dirImgs"=>"http://www.tiempocompartido.com/catalogo_imgs/","dirImgsThumbs"=>"http://www.tiempocompartido.com/admin/gallery/thumbs/","dirImgs60"=>"http://www.tiempocompartido.com/admin/gallery/60/");
	}
	
	public function get_config(){
		return  array("host"=>"http://nuevo.tiempocompartido.com/",
									"site_name"=>"tiempocompartido",
									"dirImgs"=>"http://www.tiempocompartido.com/catalogo_imgs/",
									"dirImgsThumbs"=>"http://www.tiempocompartido.com/admin/gallery/thumbs/",
									"dirImgs60"=>"http://www.tiempocompartido.com/admin/gallery/60/");
	}
	*/
}
?>