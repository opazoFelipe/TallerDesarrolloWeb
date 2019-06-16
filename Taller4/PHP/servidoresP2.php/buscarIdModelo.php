<?php 
	include "../conexionBD.php";
	$idMarca=$_POST["idMarca"];
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="select * from marca where idMarca=?";
	$stament = $conexion->prepare($sql);
	$stament->bindValue(1, $idMarca, PDO::PARAM_INT);
	if($stament->execute())
	{
		while($result = $stament->fetch(PDO::FETCH_ASSOC))
		{
			$descripcionMarca = $result["descripcionmarca"];
			$marca[]=array(
							"descripcionMarca"=>$descripcionMarca, 
						  	);			
		}
		$arregloJSON=json_encode($marca);
		echo $arregloJSON;
	}
 ?>