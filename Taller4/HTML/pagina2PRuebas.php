<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Taller 4 AJAX-JQUERY</title>
	<script
			  src="https://code.jquery.com/jquery-3.4.1.js"
			  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
			  crossorigin="anonymous"></script>
	<script src="../JQUERY/f3.js"></script>
	<link rel="stylesheet" href="../BOOTSRAPT4/css/bootstrap.min.css">
	<link rel="stylesheet" href="../BOOTSRAPT4/css/bootstrap.css">
	<style>
		#filaTablaMarcas th
		{
			text-align: center;
		}
		.tamañoBtn
		{
			width: 120px;
			font-size: x-small;
			font-weight: bold;
		}
		.eliminar
		{
			
			width:100px;
			height:40px;
			font-size: 15px;
		}
		.modificar
		{
			width:100px;
			height:40px;
			font-size: 15px;
		}
		.cancelarMod
		{
			width:100px;
			height:40px;
			font-size: 15px;
		}
		.guardarMod
		{
			width:100px;
			height:40px;
			font-size: 15px;
		}
		.tamañoColumna
		{
			display: block;
		}
		/*.izi
		{
			max-height:400px;
			overflow-y:auto;	
		}*/
		.bodyTabla
		{
			display: block;
			max-height:200px;
		/*	overflow-y:auto;*/
		}
		.headTabla
		{
			display: block;

		}
		.thIDMarca
		{
			min-width:150px;
			max-width: 150px; 

		}
		.thDescMarca
		{

		}
		.thDescModelo
		{

		}
		.thOpciones
		{

		}

		



	

	</style>
</head>
<body >
	<div class="container" style="padding-top: 30px;" id="contenedor">

					<!---------- fila Id Marca ------------>
		<div class="row" id="filaIdMarca"> 	
			<div class="col-md-5 col-sm-12">
				<form action="#" id="formulario">  <!---------- Inicio Formulario------------>
					<div class="form-group container">
						<label for="selectMarca">Id Marca</label>
						<select class="form-control" id="selectMarca" name="selectMarca">
                			<option value="seleccione">Seleccione IdMarca</option>
            			</select>
            		</div>
			</div>
			<div class="col-md-5 col-sm-12">
				<div class=" form-group container">
					<label for="cIdModelo">Id Modelo</label>
					 <input type="text" class="form-control" id="cIdModelo" name="cIdModelo">
				</div>
			</div>
		</div>

		<div class="row" id="filaIdMarca"> 
			<div class="col-md-5 col-sm-12">
				<div class=" form-group container">
					<label for="cDescModelo">Descripcion Modelo</label>
					<input type="text" class="form-control" id="cDescModelo" name="cDescModelo">
				</div>
			</div>
		</div>	

		<div class="row" id="filaIdMarca"> 
			<div class="col-md-2 col-sm-12 col-lg-3">
				<div class=" form-group container">
					<input type="button" class="btn btn-primary btn-block" id="btnGuardar" value="Guardar">
				</div>
			</div>
		</div>
			</form>	<!---------- Fin Formulario------------>

						<!---------- fila Tabla Marcas Ingresadas------------>
		<div class="row container" id="filaTablaMarcas" style="padding-top: 25px;"> 
			<div class="col-md-8">
				
					<table class="table 
								  table-bordered 
								  table-hover 
								  table-responsive-sm 
								  table-responsive-md
								  table-responsive-lg
								  table-responsive-xl"
					id="tablaVehiculos">
					
						<thead class="headTabla">
						<tr>
							<th class="thIDMarca">IdMarca</th>
							<th>Descripcion Marca</th>
							<th>Modelo</th>
							<th>Opciones</th>
						</tr>
					</thead >
				
						<tbody id="bodyTabla" class="bodyTabla">
					
						</tbody>	
					
					
				</table>	
			
			</div>		
		</div>  
	</div>
</body>
</html>