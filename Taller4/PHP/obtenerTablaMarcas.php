<?php 
	include "conexionBD.php";
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql="select * from marca order by idmarca";
	$stament = $conexion->prepare($sql);
	if($stament->execute())
	{
		if($stament->rowCount() >= 1)
		{
			while($result = $stament->fetch(PDO::FETCH_ASSOC))
			{
				$idmarca = $result["idmarca"];
				$descripcionmarca=$result["descripcionmarca"];
				$marcas[]=array("idmarca"=>$idmarca, "descripcionmarca"=>$descripcionmarca);			
			}
			$arregloJSON=json_encode($marcas);
			echo $arregloJSON;
		}else{
			echo "No hay Marcas Ingresadas actualmente";
		}			
	}
?>