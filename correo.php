<?php

if(isset($_POST["button"])){
    if(!empty($_POST["name"]) && !empty($_POST["number"])){
        $nombre = $_POST["name"];
        $numero = $_POST["number"];
        $gmail = "angel74977@gmail.com";
        $header = "Mensaje enviado desde la pagina por: \n";
        $mensajeC = $header.$nombre."\n"."Numero: ".$numero;
        $vacio = "";
        $correo = @mail($gmail,$mensajeC,$vacio);

        if($correo){
            echo "todo bien!";
        }
    }
}


?>