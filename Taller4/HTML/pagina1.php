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
	<script src="../JQUERY/f1.js"></script>
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
			margin-left: 10px;
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
		.cancelarModificacion
		{
			margin-left: 10px;
			width:100px;
			height:40px;
			font-size: 15px;
		}
		.guardarModificacion
		{
			width:100px;
			height:40px;
			font-size: 15px;
		}
	</style>
</head>
<body >
	<div class="container" style="padding-top: 30px;" id="contenedor">

					<!---------- fila Id Marca ------------>
		<div class="row" id="filaIdMarca"> 	
			<div class="col-md-6">
				<form action="#" id="formulario">  <!---------- Inicio Formulario------------>
					<div class=" form-group container">
					 	<label for="cIdMarca">Id Marca</label>
					 	<input type="text" class="form-control" id="cIdMarca" name="cIdMarca">
					 	<label for="cDescripMarca">Descripcion Marca</label>
						<input type="text" class="form-control" id="cDescripMarca" name="cDescripMarca">
					</div>
					<div class="row container">
						<div class="col-md-4">
							<input type="button" class="btn btn-primary btn-block" id="btnGuardar" value="Guardar">
						</div>
					</div>
				</form>	<!---------- Fin Formulario------------>
			</div>
		</div>
					<!---------- fila Tabla Marcas Ingresadas------------>
		<div class="row container" id="filaTablaMarcas" style="padding-top: 25px;"> 
			<div class="col-md-6">
				<table class="table table-bordered table-hover" id="tablaVehiculos">
					<thead>
						<tr>
							<th>IdMarca</th>
							<th>Descripcion Marca</th>
							<th>Opciones</th>
						</tr>
					</thead>
					<tbody id="bodyTabla">
					
					</tbody>	
				</table>	
			</div>		
		</div> 
	</div>
</body>
</html>