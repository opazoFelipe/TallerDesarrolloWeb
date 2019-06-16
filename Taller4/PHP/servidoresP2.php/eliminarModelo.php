<?php 
	include "../conexionBD.php";
	$idModelo=$_POST["idModelo"];
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="delete from modelo where idmodelo=?";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $idModelo, PDO::PARAM_STR);
	if($stament->execute())
		echo "Datos Eliminados correctamente";
	else
		echo "Error al Eliminar los datos";
 ?>