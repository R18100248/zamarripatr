<?php
$servidor = "localhost";
$basedatos = "web18100248";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
$con -> set_charset("utf8");
$consulta = "select * from productosAlimenticios";
$registros = mysqli_query($con,$consulta) or die("Problemas en el select");

$result = mysqli_fetch_all($registros);
mysqli_close($con);
echo json_encode($result);
?>
