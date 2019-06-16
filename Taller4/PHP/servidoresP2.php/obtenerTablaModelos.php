<?php 
	include "../conexionBD.php";
	$conexion=new conexion();
	$conexion=$conexion->get_conexion();
	$sql=
		"select
			marca.idmarca, 
			marca.descripcionmarca, 
			modelo.idmodelo, 
			modelo.descripcionmodelo
		from
			marca, modelo
		where 
			marca.idmarca=modelo.idmarca 
		order by 
			idmodelo"
	;
	$stament = $conexion->prepare($sql);
	if($stament->execute())
	{
		if($stament->rowCount() >= 1)
		{
			while($result = $stament->fetch(PDO::FETCH_ASSOC))
			{
				$idModelo = $result["idmodelo"];
				$descModelo=$result["descripcionmodelo"];
				$idMarca=$result["idmarca"];
				$descMarca=$result["descripcionmarca"];
				$modelos[]=array(
								"idModelo"=>$idModelo, 
								"descModelo"=>$descModelo,
								"idMarca"=>$idMarca,
								"descMarca"=>$descMarca,
						  		);			
			}
			$arregloJSON=json_encode($modelos);
			echo $arregloJSON;
		}else{
			echo "No hay Modelos Ingresadas actualmente";
		}			
	}
?>