<?php 
	include "conexionBD.php";
	$id=$_POST["id"];
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="delete from Marca where idmarca=?";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $id, PDO::PARAM_INT);
	if($stament->execute())
		echo "Datos Eliminados correctamente";
	else
		echo "Error al Eliminar los datos";
 ?>