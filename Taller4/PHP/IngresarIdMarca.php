<?php 
	include "conexionBD.php";
	$id=$_POST["cIdMarca"];
	$descripcion=$_POST["cDescripMarca"];

	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="select existeIdMarca(?)";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $id, PDO::PARAM_INT);
	if($stament->execute())
	{
		$result = $stament->fetch(PDO::FETCH_ASSOC);
		if($result["existeidmarca"]>=1)
			echo "IdMarca ingresado ya existe, cambie el valor";
		else
		{
			$sql="insert into Marca values(?,?)";
			$stament = $conexion->prepare($sql);
			$stament->bindValue(1, $id, PDO::PARAM_INT);
			$stament->bindValue(2, $descripcion, PDO::PARAM_STR);
			if($stament->execute())
			
				echo "Datos ingresados correctamente";
			else
				echo "Error al ingresar los datos";
		}	
	}
 ?>