$(document).ready(function()
{
	function obtenerTablaModelo()
	{
		$.ajax
		({
			type:"POST",
			url:"../PHP/servidoresP2.php/obtenerTablaModelos.php",
			success: function(respuestaTabla)
			{
				if(respuestaTabla==="No hay Modelos Ingresadas actualmente")
				{
					alert(respuestaTabla);
				}else
				{
					var datos=JSON.parse(respuestaTabla);

					var bodyTabla=$("#bodyTabla");
					var idModeloElementos;

					for(var i=0; i<datos.length; i++)
					{
						var filaTabla;
						var thIdMarca;
						var thDescMarca;
						var thDescModelo;
						var thOpciones;
						var btnModificar;
						var btnEliminar;
						var divBtnOpciones;
						idModeloElementos=datos[i].idModelo;
						//Crear la fila y darle el id del modelo que mostrara
						filaTabla=$("<tr>");
						filaTabla.attr("id", datos[i].idModelo);
						//Crear thIdMarca y darle el id del modelo que mostrara
						thIdMarca=$("<th>");
						thIdMarca.attr("id","thIdMarca"+datos[i].idModelo);
						thIdMarca.addClass("idMarca");
						//Crear thdescMarca y darle el id del modelo que mostrara
						thDescMarca=$("<th>");
						thDescMarca.attr("id", "thDescMarca"+datos[i].idModelo);
						thDescMarca.addClass('columnas');
						//crear thModelo y darle el id del modelo que mostrara
						thDescModelo=$("<th>");
						thDescModelo.attr("id", "thDescModelo"+datos[i].idModelo);
						thDescModelo.addClass('columnas');
						//Crear div de opciones y asignarle el id del modelo de la fila
						thOpciones=$("<th>");
						thOpciones.addClass('columnas');
						//Crear div de botones del th de opciones y dar id de la fila a la que pertenece
						divBtnOpciones=$("<div>");
						divBtnOpciones.attr("id", "divBtnOpciones"+datos[i].idModelo);
						divBtnOpciones.addClass("btn-group");
						//Crear botones del div de botones, estos no llevan id puesto que se usara 
						//el id del padre(div de botones) de para ambos botones
						btnModificar=$("<input>");
						btnModificar.attr("type", "button");
						btnModificar.attr("value", "modificar");
						btnModificar.addClass("btn btn-secondary tamañoBtn modificar");
				

						btnEliminar=$("<input>");
						btnEliminar.attr("type", "button");
						btnEliminar.attr("value", "eliminar");
						btnEliminar.addClass("btn btn-danger tamañoBtn eliminar");

						//Hacer a los botones, hijos del div de botones
						divBtnOpciones.append(btnModificar);
						divBtnOpciones.append(btnEliminar);
						//Hacer al div de botones, hijo del th opciones
						thOpciones.append(divBtnOpciones);

						//Darle Texto a los th..

						//------th idMarca-------
						thIdMarca.text(datos[i].idMarca);
						//------th descMarca-------
						thDescMarca.text(datos[i].descMarca);
						//------th descMarca-------
						thDescModelo.text(datos[i].descModelo);

						//Hacer hijos a todos los th, de la fila del modelo que muestran
						filaTabla.append(thIdMarca);
						filaTabla.append(thDescMarca);
						filaTabla.append(thDescModelo);
						filaTabla.append(thOpciones);
						bodyTabla.append(filaTabla);

					}
				}
				
			}	
		});
	}
	function limpiarTabla()
	{
		$("#bodyTabla").empty();
	}
	obtenerTablaModelo();

	function llenarSelectMarca(select, actualIdMarca)
	{
		var selectMarcas;
		var opcion;
		var datos;
		//Comprobar que existan marcas ingresadas en la tabla marca para llenar el select
		$.ajax
		({
			type:"POST",
			url: "../PHP/obtenerTablaMarcas.php",
			success: function(respuestaMarcas)
			{	//La respuesta debe contener un array con todas las marcas ingresadas
				//Solo llenar el select si la peticion retorna marcas
				if(respuestaMarcas==="No hay Marcas Ingresadas actualmente")
				{
					alert(respuestaMarcas);
				}else{
					datos=JSON.parse(respuestaMarcas);
					selectMarcas=select;
					for(var i=0; i<datos.length; i++)
					{
						//Asignar a cada opcion el id de la marca a la cual pertenece, ademas 
						//el texto con dicho id
						opcion=$("<option>");
						opcion.attr("id", "idMarca"+datos[i].idmarca);
						opcion.attr("value", datos[i].idmarca);
						opcion.text(datos[i].idmarca);
						//Hacer a la opcion, hijo del select marcas
						selectMarcas.append(opcion);
					}
					selectMarcas.val(actualIdMarca);
				}
				
			}
		});

	}
	llenarSelectMarca($("#selectMarca"), "seleccione");

	$("#btnGuardar").click(function()
	{
		var selectMarcas;
		var opcionSeleccionada;
		var idModelo;
		var descModelo;
		//Variables para comprobar que los campos obligatorios están llenados
		var marcaSeleccionada=false;
		var idModeloIngresado=false;

		//Evaluar que campos obligatorios no esten vacíos(selectMarcas, idModelo)
		selectMarcas=$("#selectMarca");
		opcionSeleccionada=selectMarcas.val();
		if(opcionSeleccionada==="seleccione")
		{
			alert("Porfavor, seleccione una marca");
			marcaSeleccionada=false;
		}else{marcaSeleccionada=true;}

		idModelo=$("#cIdModelo").val();
		if(idModelo.length<=0)
		{
			alert("Porfavor, llene el campo Id Modelo");
			idModeloIngresado=false;
		}else{idModeloIngresado=true;}

		//Procede a guardar los datos si los campos obligatorios están llenos
		if(marcaSeleccionada===true && idModeloIngresado===true)
		{
			//Comprobar que el largo del idModelo sea menor a 10 caracteres
			descModelo=$("#cDescModelo").val();
			if(descModelo.length>10)
			{
				alert("Solo se permiten maximo 10 caracteres en el campo Id Modelo");
			}else
			{
				//Hacer peticion ajax
				var datosEnviar="idModelo="+idModelo+"&idMarca="+opcionSeleccionada+"&descModelo="+descModelo;
				$.ajax
				({
					type:"POST",
					url:"../PHP/servidoresP2.php/ingresarModelo.php",
					data:datosEnviar,
					success: function(respuesta)
					{	
						alert(respuesta);
						limpiarTabla();
						obtenerTablaModelo();
					}
				});
			}
		}
		
	});

	$(document).on('click', '.modificar', function()
	{
	 	//Desactivar boton guardar, campo id Modelo y descripcion Modelo del formulario de ingreso
	 	$("#cIdModelo").attr("disabled", true);
	 	$("#cDescModelo").attr("disabled", true);
	 	$("#btnGuardar").attr("disabled", true);
	 	$("#selectMarca").attr("disabled", true);

	 	//Variable que guardara la fila que sera modificada, se usara su id para modificar
	 	//el modelo en la base de datos.
	 	//Cada fila de la tabla se modifica en base al id del modelo, aunque este no
	 	//se muestra en la tabla, a cada fila se le asigna el id del modelo proveniente de la bd.
	 	var idModelo;
	 	var filaModificar; //contiene la fila que se modificara.

	 	//variables que contendran cada columna de la fila a modificar. 
	 	var thIdMarca;
	 	var thDescMarca;
	 	var thDescModelo;

	 	//Columna actual de la fila a modificar que contiene los botones modificar y eliminar
	 	//Este campo ocultara ambos botones y pondra un nuevo boton para guardar la modificacion y otro para
	 	//Cancelarla.
	 	var divBtnOpciones;
	 	var btnGuardarMod; //Boton que reemplazara boton modificar
	 	var btnCancelarMod; //Boton que reemplazara boton Eliminar
	 	var btnModificar; //se crea y añade al div de botones nuevamente el boton modificar
	 	var btnEliminar; //se crea y añade al div de botones nuevamente el boton eliminar

	 	//input text Nuevo que se pondra en la columna IdMarca para modificarla en la bd.
	 	var selectModIdMarca;
	 	//input text Nuevo que se pondra en la columna Descripcion Marca para modificarla en la bd.
	 	var campoModDescMarca;
	 	//input text Nuevo que se pondra en la columna Modelo para modificarla en la bd.
	 	var campoModDescModelo;

	 	

	 	//variables que guardan el contenido actual(que sera reemplazado), de cada
	 	//columna en la fila que se esta modificando
	 	var idMarcaActual;
	 	var descMarcaActual;
	 	var descModeloActual;
	 	
	 	//Inicializar las variables

	 	idModelo=$(this).parent().parent().parent().attr("id");
	 	filaModificar=$("#"+idModelo).attr("id");
	 	filaModificar=$("#"+filaModificar); //ahora contiene la fila que se modificara

	 	thIdMarca=$("#thIdMarca"+idModelo).attr("id");
	 	thIdMarca=$("#"+thIdMarca); //Ahora contiene la columna IdMarca

	 	thDescMarca=$("#thDescMarca"+idModelo).attr("id");
	 	thDescMarca=$("#"+thDescMarca); //Ahora contiene la columna descripcion Marca

	 	thDescModelo=$("#thDescModelo"+idModelo).attr("id");
	 	thDescModelo=$("#"+thDescModelo); //Ahora contiene la columna Modelo

	 	divBtnOpciones=$("#divBtnOpciones"+idModelo).attr("id");
	 	divBtnOpciones=$("#"+divBtnOpciones); //Ahora contiene la columna opciones(botones modificar,eliminar)
	 
	 	//Cuando el boton modificar es clickeado, se borra el contenido de la columna IdMarca de la 
	 	//fila a la que corresponde el boton en la tabla.
	 
	 	//Guardar el contenido de cada columna antes de agregar los inputs text nuevos.
	 	idMarcaActual=thIdMarca.text();
	 	descMarcaActual=thDescMarca.text();
	 	descModeloActual=thDescModelo.text();

	 	//Crear los nuevos inputs para modificar la fila
	 	//Campo id marca se llenara usando el select.
	 	selectModIdMarca=$("<select>");
	 	selectModIdMarca.attr("id", "selectModIdMarca"+idModelo);
	 	selectModIdMarca.addClass("form-control tamañoColumna");
	 	selectModIdMarca.css("border-color", "black");
	 	llenarSelectMarca(selectModIdMarca, idMarcaActual);

	 	//Cuando el select cambie se devera hacer una consulta a la bd para
	 	//Traer la descripcion de la marca del idMarca seleccionado y mostrarla en la columna
	 	//Descripcion Marca

	 	var descripcionMarcaMod=descMarcaActual; 
	 	//Esta variable sirve para mostrarla en la columna descripcion marca
	 	//luego de modificar correctamente la fila, de otro modo, habria que hacer otra peticion 
	 	//ajax para poder obtener la descripcion de la marca con el id marca 
	 	//seleccionado para modificar. Asi, se evita hacer una nueva peticion ajax.
	 	//Esta variable sera global para la funcion del select
	 	//selectModIdMarca.change(function()) 

	 	selectModIdMarca.change(function() 
	 	{
	 		var idMarcaSeleccionada=$(this).val();
	 		var datosPeticion="idMarca="+idMarcaSeleccionada;
	 		$.ajax
	 		({
	 			type:"POST",
	 			url:"../PHP/servidoresP2.php/buscarIdModelo.php",
	 			data:datosPeticion,
	 			success: function(respuesta)
	 			{
	 				var datos=JSON.parse(respuesta);
	 				campoModDescMarca.val(datos[0].descripcionMarca);

	 				//Guardar inmediatamente la descripcion del id Marca seleccionado que posiblemente reemplazara al idMarca a modificar.
	 				descripcionMarcaMod=datos[0].descripcionMarca;
	 			}
	 		});
	 		
	 	});
	 	
	
	 	campoModDescMarca=$("<input>");
	 	campoModDescMarca.attr("id", "campoModDescMarca"+idModelo);
	 	campoModDescMarca.attr("placeholder", descMarcaActual);
	 	campoModDescMarca.attr("disabled", true);
	 	campoModDescMarca.addClass("form-control tamañoColumna");

	 	campoModDescModelo=$("<input>");
	 	campoModDescModelo.attr("id", "campoModDescModelo"+idModelo);
	 	campoModDescModelo.attr("placeholder", descModeloActual);
	 	campoModDescModelo.addClass("form-control tamañoColumna");
	 	campoModDescModelo.css("border-color", "black");

	 	btnGuardarMod=$("<input>");
	 	btnGuardarMod.attr("type", "button");
	 	btnGuardarMod.attr("value", "Listo");
	 	btnGuardarMod.addClass("btn btn-primary tamañoBtn guardarMod");

	 	//Crear accion para boton guardar modificacion(boton listo)
	 	btnGuardarMod.click(function()
	 	{
	 		var idMarcaSeleccionada=selectModIdMarca.val();
	 		var descModeloNuevoLargo=campoModDescModelo.val().length;
	 		var descModeloNuevo=campoModDescModelo.val();
	 		//No hacer nada si ninguna columna fue alterada
	 		if(descModeloNuevoLargo===0)
	 		{
	 			alert("Ingrese un modelo");
	 		}else{
	 			var datosPeticion="idModelo="+idModelo+"&idMarca="+idMarcaSeleccionada+"&descModelo="+descModeloNuevo;
	 			$.ajax
				({
					type:"POST",
	 				url:"../PHP/servidoresP2.php/modificarModelo.php",
	 				data:datosPeticion,
	 				success: function(respuesta)
	 				{
	 					if(respuesta==="Datos modificados correctamente")
	 					{
	 						alert(respuesta);
	 						
	 						thIdMarca.children().remove();
	 						thDescMarca.children().remove();
	 						thDescModelo.children().remove();
	 						divBtnOpciones.children().remove();
	 						
	 						//alert("idMarca="+idMarcaSeleccionada+"\ndescripcion="+descripcionMarcaMod);
	 						thIdMarca.text(idMarcaSeleccionada);
	 						thDescMarca.text(descripcionMarcaMod);
	 						thDescModelo.text(descModeloNuevo);

	 						btnModificar=$("<input>");
							btnModificar.attr("type", "button");
							btnModificar.attr("value", "modificar");
							btnModificar.addClass("btn btn-secondary tamañoBtn modificar");
				
							btnEliminar=$("<input>");
							btnEliminar.attr("type", "button");
							btnEliminar.attr("value", "eliminar");
							btnEliminar.addClass("btn btn-danger tamañoBtn eliminar");

							divBtnOpciones.append(btnModificar);
							divBtnOpciones.append(btnEliminar);

							$("#cIdModelo").attr("disabled", false);
	 						$("#cDescModelo").attr("disabled", false);
	 						$("#btnGuardar").attr("disabled", false);
	 						$("#selectMarca").attr("disabled", false);

	 					}else
	 						alert(respuesta);	
	 				}
				});
	 		}
			
	 	});

	 	btnCancelarMod=$("<input>");
	 	btnCancelarMod.attr("type", "button");
	 	btnCancelarMod.attr("value", "Cancelar");
        btnCancelarMod.addClass("btn btn-danger tamañoBtn cancelarMod");

        btnCancelarMod.click(function()
        {
        	thIdMarca.children().remove();
	 		thDescMarca.children().remove();
	 		thDescModelo.children().remove();
	 		divBtnOpciones.children().remove();

	 		thIdMarca.text(idMarcaActual);
	 		thDescMarca.text(descMarcaActual);
	 		thDescModelo.text(descModeloActual);

	 		btnModificar=$("<input>");
			btnModificar.attr("type", "button");
			btnModificar.attr("value", "modificar");
			btnModificar.addClass("btn btn-secondary tamañoBtn modificar");
				
			btnEliminar=$("<input>");
			btnEliminar.attr("type", "button");
			btnEliminar.attr("value", "eliminar");
			btnEliminar.addClass("btn btn-danger tamañoBtn eliminar");

			divBtnOpciones.append(btnModificar);
			divBtnOpciones.append(btnEliminar);

			$("#cIdModelo").attr("disabled", false);
	 		$("#cDescModelo").attr("disabled", false);
	 		$("#btnGuardar").attr("disabled", false);
	 		$("#selectMarca").attr("disabled", false);
        });
       
      	//Vaciar las columnas de la fila para agregar los nuevos inputs despues.
      	thIdMarca.text("");
      	thDescMarca.text("");
      	thDescModelo.text("");
      	var botones=divBtnOpciones.children();//Obtener los botones modificar,eliminar
 		botones.remove(); //remover los botones, al presionar listo o cancelar se vuelven a
 						 //crear los botones modificar y eliminar

 		//Agregar los nuevos inputs a las columnas de la fila
 		thIdMarca.append(selectModIdMarca);
 		thDescMarca.append(campoModDescMarca);
 		thDescModelo.append(campoModDescModelo);
 		divBtnOpciones.append(btnGuardarMod);
 		divBtnOpciones.append(btnCancelarMod);
	 	
	});
	
	$(document).on('click', '.eliminar', function()
	{
		var idModelo=idModelo=$(this).parent().parent().parent().attr("id");
	 	var filaEliminar=$("#"+idModelo).attr("id");
	 	filaEliminar=$("#"+filaEliminar); //ahora contiene la fila que se eliminara;
	 	datosPeticion="idModelo="+filaEliminar.attr("id");
	 	var opcion=confirm("¿Esta seguro de eliminar los datos?");
        if(opcion===true)
        {
            $.ajax
            ({
                type:"POST",
                url:"../PHP/servidoresP2.php/eliminarModelo.php",
                data:datosPeticion,
                success: function(respuesta)
                {
                    alert(respuesta);
                    filaEliminar.remove();   
                }       
            }); 
        }
	});
});