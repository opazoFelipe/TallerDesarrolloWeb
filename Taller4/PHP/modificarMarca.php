<?php 
	include "conexionBD.php";
	$idReemplazar=$_POST["idReemplazar"];
	$idNuevo=$_POST["idNuevo"];
	$desc=$_POST["desc"];

	if($idReemplazar===$idNuevo)
	{
		$conexion=new conexion();
		$conexion=$conexion->get_conexion();
		$sql="update Marca set descripcionmarca=? where idmarca=?";
		$stament = $conexion->prepare($sql);
		$stament->bindValue(1, $desc, PDO::PARAM_STR);
		$stament->bindValue(2, $idNuevo, PDO::PARAM_INT);
		if($stament->execute())
			echo "Datos modificados correctamente";
		else
			echo "Error al modificar los datos";
		
	}else
	{
		$conexion=new conexion();
		$conexion=$conexion->get_conexion();
		$sql="select existeIdMarca(?)";
		$stament = $conexion->prepare($sql);
		$stament->bindValue(1, $idNuevo, PDO::PARAM_INT);
		if($stament->execute())
		{
			$result = $stament->fetch(PDO::FETCH_ASSOC);
			if($result["existeidmarca"]>=1)
				echo "IdMarca ingresado ya existe, cambie el valor";
			else
			{
				$sql="update Marca set idmarca=?, descripcionmarca=? where idmarca=?";
				$stament = $conexion->prepare($sql);
				$stament->bindValue(1, $idNuevo, PDO::PARAM_INT);
				$stament->bindValue(2, $desc, PDO::PARAM_STR);
				$stament->bindValue(3, $idReemplazar, PDO::PARAM_INT);
				if($stament->execute())
					echo "Datos modificados correctamente";
				else
					echo "Error al modificar los datos";
			}	
		}
	}
	
 ?>