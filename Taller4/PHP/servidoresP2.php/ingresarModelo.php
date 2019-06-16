<?php 
	include "../conexionBD.php";
	$idModelo=$_POST["idModelo"];
	$idMarca=$_POST["idMarca"];
	$descModelo=$_POST["descModelo"];

	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="select existeModelo(?)";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $idModelo, PDO::PARAM_STR);
	if($stament->execute())
	{
		$result = $stament->fetch(PDO::FETCH_ASSOC);
		if($result["existemodelo"]>=1)
			echo "IdModelo ingresado ya existe, cambie el valor";
		else
		{
			$sql="insert into Modelo values(?,?,?)";
			$stament = $conexion->prepare($sql);
			$stament->bindValue(1, $idModelo, PDO::PARAM_STR);
			$stament->bindValue(2, $idMarca, PDO::PARAM_INT);
			$stament->bindValue(3, $descModelo, PDO::PARAM_STR);
			if($stament->execute())
			
				echo "Datos ingresados correctamente";
			else
				echo "Error al ingresar los datos";
		}	
	}
 ?>