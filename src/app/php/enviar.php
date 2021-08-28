<?php

if (isset($_SERVER['HTTP_ORIGIN'])) 
{
		header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	}
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
    	header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
	
	exit(0);
}

header('Content-Type: application/json');
 
    $destino= "salomon@amorymagia365.com";

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);


    $nombre=  $request->nombre;
    $celular=  $request->telefono;
    $email=  $request->email;
    $mensaje=  $request->text;

    $contenido = "Mensaje: ". $mensaje. "\n\nNombre: ". $nombre ."\nCorreo: ". $email ."\nCelular: ". $celular;

    mail($destino, "Formulario de Contacto desde Amor y Magia", $contenido);

    echo '{"status":"success","message":"Message sent","service":"1"}';


?>