<?php 
	include "../conexionBD.php";
	$idModelo=$_POST["idModelo"];
	$idMarca=$_POST["idMarca"];
	$descModelo=$_POST["descModelo"];

	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="update 
			modelo 
		  set 
		  	idmarca=?, 
		  	descripcionmodelo=?
		  where
		  	idmodelo=?";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $idMarca, PDO::PARAM_INT);
	$stament->bindValue(2, $descModelo, PDO::PARAM_STR);
	$stament->bindValue(3, $idModelo, PDO::PARAM_STR);
	if($stament->execute())
		echo "Datos modificados correctamente";
	else
		echo "Error al modificar los datos";
 ?>