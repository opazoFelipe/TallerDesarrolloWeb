<?php 

	include "conexionBD.php";
	$id=$_POST["id"];
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="select * from marca where idmarca=?";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $id, PDO::PARAM_INT);
	if($stament->execute())
	{
		$result = $stament->fetch(PDO::FETCH_ASSOC);
		$idmarca=$result["idmarca"];
		$desc=$result["descripcionmarca"];
		$marca[]=array("idmarca"=>$idmarca, "descripcionmarca"=>$desc);
		$arregloJSON=json_encode($marca);
		echo $arregloJSON;
	}else{
		echo "Hubo un error en la consulta select";
	}
	
 ?>