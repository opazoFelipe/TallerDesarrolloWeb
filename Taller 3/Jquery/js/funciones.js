
$(document).ready(function()
{

	var contadorNombre=0;
	var contadorPasaporte=0;

	//Variables de los campos obligatorios que guardan true si el campo ha sido..
	//..llenado correctamente para cambiar el color del boton Guardar
	var nombre=false;
	var campoRut=false;
	// //Este es el campo nacionalidad, el cual aparece cuando se selecciona nacionalidad..
	// //..extranjera en el select de nacionalidad
	// var nacionalidad=false;
	var pasaporte=false;
	var guia=false;
	var guiaTieneTexto=false;


	//iniciarEventosNacionalidad();
	iniciarEventos();


	function iniciarEventos()
	{
		borrarNodoVehiculo();
		$("#numeroGuia").removeAttr("required");
		borrarNodoNacionalidad();
		agregarNodoRut();
		$("#botonGuardar").addClass("formIncompleto");
	}

	function agregarNodoExtranjeros()
	{
		//Obtener la fila 2
		var divFilaAnterior=$("#fila2");
		//Crear la fila que se agregara despues de la fila 2
		var divFilaNacionalidad=$("<div>").attr("id", "filaNacionalidad");
		divFilaNacionalidad.addClass("row");
		//Crear el div principal columna 1
		var divColumna=$("<div>").attr("id", "columnaExtranjeros");
		divColumna.addClass("col-md-8");
		//Crear el div que tendra el select de nacionalidades extranjeras
		var divSelNacExtr=$("<div>").attr("id", "divSelNacExtr");
		divSelNacExtr.addClass("form-group container");
		//Crear el label para el select
		var labelSelect=$("<label>").attr("for","selNacExtr");
		labelSelect.text("Nacionalidad");
		//Crear el select de nacionalidades extranjeras
		var selectNacExtr=$("<select>").attr("id","selNacExtr");
		selectNacExtr.attr("name", "selNacExtr");
		selectNacExtr.addClass("form-control");
		//Crear las opciones del select
		var opcion1=$("<option>").attr("value","1");
		opcion1.text("Argentina");
		var opcion2=$("<option>").attr("value","2");
		opcion2.text("Colombiana");

		//Crear el div que tendra el campo Pasaporte
		var divPasaporte=$("<div>").attr("id", "divPasaporte");
		divPasaporte.addClass("form-group container");
		//Crear el label para el campo Pasaporte
		var labelPasaporte=$("<label>").attr("for", "pasaporte");
		labelPasaporte.text("Pasaporte");
		//Crear el campo Pasaporte
		var pasaporte=$("<input>").attr("id", "pasaporte");
		pasaporte.attr("type", "text");
		pasaporte.attr("name", "pasaporte");
		pasaporte.attr("required", true);
		pasaporte.addClass("form-control");

		//Embeber los nodos al nodo padre
		divFilaAnterior.after(divFilaNacionalidad);
		divFilaNacionalidad.prepend(divColumna);
		divColumna.append(divSelNacExtr);
		divColumna.append(divPasaporte);
		divSelNacExtr.append(labelSelect);
		divSelNacExtr.append(selectNacExtr);
		selectNacExtr.append(opcion1);
		selectNacExtr.append(opcion2);
		divPasaporte.append(labelPasaporte);
		divPasaporte.append(pasaporte);
		campoRut=true;
		pasaporte=false;
		cambiarColorBoton();	
	}

	function agregarNodoRut()
	{
		var divFilaAnterior=$("#fila2");
		//Crear la fila que se agregara despues de la fila 2
		var divFilaNacionalidad=$("<div>").attr("id", "filaNacionalidad");
		divFilaNacionalidad.addClass("row");
		//Crear el div principal columna 1
		var divColumna=$("<div>").attr("id", "columnaRut");
		divColumna.addClass("col-md-8");
		//Crear el div que tendra el campo Rut
		var divRut=$("<div>").attr("id", "divRut");
		divRut.addClass("form-group container");
		//Crear el label para el campo Pasaporte
		var labelRut=$("<label>").attr("for", "rut");
		labelRut.text("Rut");
		//Crear el campo Pasaporte
		var rut=$("<input>").attr("id", "rut");
		rut.attr("type", "text");
		rut.attr("name", "rut");
		rut.attr("required", true);
		rut.addClass("form-control");

		//Embeber los nodos al nodo padre
		divFilaAnterior.after(divFilaNacionalidad);
		divFilaNacionalidad.prepend(divColumna);
		divColumna.append(divRut);
		divRut.append(labelRut);
		divRut.append(rut);	
		pasaporte=true;
		campoRut=false;
	}

	function agregarNodoVehiculo()
	{
		var divFilaAnterior=$("#filaTipoIngreso");
		//Crear la fila que se agregara despues de la fila 2
		var divFilaVehiculo=$("<div>").attr("id", "filaVehiculo");
		divFilaVehiculo.addClass("row");
		//Crear el div principal columna 1
		var divColumna=$("<div>").attr("id", "columnaVehiculo");
		divColumna.addClass("col-md-8");

		//Crear el div que tendra el select tipo de vehiculo
		var divselTipoVehiculo=$("<div>").attr("id", "divselTipoVehiculo");
		divselTipoVehiculo.addClass("form-group container");
		//Crear el label para el select
		var labelSelTipoVehiculo=$("<label>").attr("for","selectTipoVehiculo");
		labelSelTipoVehiculo.text("Tipo de vehiculo");
		//Crear el select de nacionalidades extranjeras
		var selectTipoVehiculo=$("<select>").attr("id","selectTipoVehiculo");
		selectTipoVehiculo.attr("name", "selectTipoVehiculo");
		selectTipoVehiculo.addClass("form-control");
		//Crear las opciones del select
		var opcion1=$("<option>").attr("value","1");
		opcion1.text("Auto");
		var opcion2=$("<option>").attr("value","2");
		opcion2.text("Camion");

		//Crear el div que tendra el campo patente
		var divPatente=$("<div>").attr("id", "divPatente");
		divPatente.addClass("form-group container");
		//Crear el label para el campo Pasaporte
		var labelPatente=$("<label>").attr("for", "Patente");
		labelPatente.text("Patente");
		//Crear el campo Pasaporte
		var Patente=$("<input>").attr("id", "Patente");
		Patente.attr("type", "text");
		Patente.attr("name", "Patente");
		Patente.addClass("form-control");

		//Crear el div que tendra el select Detalle
		var divselDetalle=$("<div>").attr("id", "divselDetalle");
		divselDetalle.addClass("form-group container");
		//Crear el label para el select
		var labelselDetalle=$("<label>").attr("for","labelselDetalle");
		labelselDetalle.text("Detalle");
		//Crear el select de nacionalidades extranjeras
		var selectDetalle=$("<select>").attr("id", "selectDetalle");
		selectDetalle.attr("name", "selectDetalle");
		selectDetalle.addClass("form-control");
		//Crear las opciones del select Detalle
		var opcion3=$("<option>").attr("value","1");
		opcion3.text("LLeno");
		var opcion4=$("<option>").attr("value","2");
		opcion4.text("Vacio");

		//Embeber los nodos en el DOOM
		divFilaAnterior.after(divFilaVehiculo);
		divFilaVehiculo.prepend(divColumna);

		divColumna.append(divselTipoVehiculo);
		divColumna.append(divPatente);
		divColumna.append(divselDetalle);

		divselTipoVehiculo.append(labelSelTipoVehiculo);
		divselTipoVehiculo.append(selectTipoVehiculo);
		selectTipoVehiculo.append(opcion1);
		selectTipoVehiculo.append(opcion2);

		divPatente.append(labelPatente);
		divPatente.append(Patente);

		divselDetalle.append(labelselDetalle);
		divselDetalle.append(selectDetalle);
		selectDetalle.append(opcion3);
		selectDetalle.append(opcion4);
		guia=false;
		cambiarColorBoton();
	}

	function borrarNodoNacionalidad()
	{
		var fila2=$("#fila2");
		var filaNacionalidad=fila2.next();
		filaNacionalidad.remove();
	}
	function borrarNodoVehiculo()
	{
		var fila3=$("#filaTipoIngreso");
		var fila=fila3.next();
		fila.remove();
		$("#numeroGuia").removeAttr("required");
		guia=true;
		cambiarColorBoton();
	}
	
	$("#selectNacionalidad").change(function()
	{
		if($("#selectNacionalidad").val() === "1")
		{
			borrarNodoNacionalidad();
			agregarNodoRut();
			campoRut=false;
			cambiarColorBoton();
		}else
		{
			borrarNodoNacionalidad();
			pasaporte=false;
			cambiarColorBoton();
			agregarNodoExtranjeros();
		}
	});

	$("#selectTipoIngreso").change(function()
	{
		if($("#selectTipoIngreso").val() === "1")
		{
			borrarNodoVehiculo();
			guia=true;
		}else
		{
			agregarNodoVehiculo();
			if(guiaTieneTexto)
			{
				guia=true;
			}else{
				guia=false;
			}
		}
		cambiarColorBoton();
	});

	//Asociar evento al select de detalle cuando sea creado dinamicamente
	$(document).on("change", $("#selectDetalle"), function() {
		if($("#selectDetalle").val() === "1")
		{
			$("#numeroGuia").attr("required", true);
			if($("#numeroGuia").val().length > 0)
			{
				guia=true;
				guiaTieneTexto=true;
				cambiarColorBoton();
			}else{
				guia=false;
				guiaTieneTexto=false;
				cambiarColorBoton();
			}
		}
		if($("#selectDetalle").val() === "2")
		{
			$("#numeroGuia").removeAttr("required");
			guia=true;
			cambiarColorBoton();
		}
	});

	$(document).on("change", $("#pasaporte"), function() {
		$("#pasaporte").blur(function() 
    	{
        	if($(this).val().length > 0)
        	{
        		pasaporte=true;
        		cambiarColorBoton();
        	}else{
        		pasaporte=false;
        		cambiarColorBoton();
        	}
		});
	});

	$(document).on("change", $("#rut"), function() {
		$("#rut").rut().on('rutInvalido', function(e) {
		if($(this).val().length >0)
		{
			campoRut=false;
			cambiarColorBoton();
			alert("El rut: "+$(this).val()+"\nes inválido, porfavor ingreselo nuevamente");
		}
		campoRut=false;
		cambiarColorBoton();	
		$("#rut").val("");
	});

	$("input#rut").rut().on('rutValido', function(e, rut, dv) {
		campoRut=true;
		cambiarColorBoton();
	});
	});

	$(document).on("change", $("#pasaporte"),evaluadorAlfanumerico);

	function evaluadorAlfanumerico()
	{
		$("#pasaporte").keyup(function(tecla) 
    	{
        	if (!/^[ a-z0-9ñ]*$/i.test(this.value)) {
        	this.value = this.value.replace(/[^ a-z0-9ñ]+/ig,"");
 			}
		});
	}

	//Perder foco del campo nombre
	$("#nombre").blur(function(){
		if(contadorNombre===0)
		{
			var campoNombre=$("#nombre");
			var adv=$("<p>").attr("id", "advNombre");
			adv.addClass("colorAdvertencia")
			adv.text("*Debe registrar un nombre obligatoriamente");
			campoNombre.after(adv);
			contadorNombre=1;
		}
		if($(this).val().length > 2)
		{
			nombre=true;
			cambiarColorBoton();
		}
		else
		{
			nombre=false;
			cambiarColorBoton();
		}	
	});

	function cambiarColorBoton()
	{
		if(nombre==true && campoRut==true && pasaporte==true && guia==true)
		{
			$("#botonGuardar").removeClass("formIncompleto");
			$("#botonGuardar").addClass("formListo");
		}
		else
		{
			$("#botonGuardar").removeClass("formListo");
			$("#botonGuardar").addClass("formIncompleto");
		}
	}

	$("#numeroGuia").blur(function()
	{
		if($(this).val().length > 0)
		{
			guiaTieneTexto=true;
			guia=true;
			cambiarColorBoton();
		}else{
			cambiarColorBoton();
			guiaTieneTexto=false;
		}
	});
});






















	//Validar el formulario 

	// $("#formulario").submit(function() { 
 //      if($("#nombre").val().length < 3) {  
 //        alert("El nombre debe tener como mínimo 3 caracteres");  
 //      }    
 //    });  

	// //Ocultar campos extranjeros cuando se selecciona nacionalidad chilena
	// var contadorRut=1;
 //  	$('#selectNacionalidad').on('change', function() {
 //  		if(this.value === "1"){
 //  			if($('#divNacionalidadesExtranjera').is(":visible"))
 //  			{
 //  				$('#divNacionalidadesExtranjera').hide();
 //  				if(!($('#divRut').is(":visible")))
 //  				{
 //  					$('#divRut').show();
 //  					contadorRut=1;
 //  				}
  		
 //  			}
 //  		}
 //  		if(this.value === "2"){
 //  			if(!($('#divNacionalidadesExtranjera').is(":visible")))
 //  			{
 //  				$('#divNacionalidadesExtranjera').show();
 //  				$('#divRut').hide();
 //  				contadorRut=0;
 //  			}
 //  		}
	// });

 // //  	$("#nombre").keyup(function(){
 // //  		if(contador === 1)
 // //  		{
 // //  			var padre=document.getElementById("adevertenciaNombre");
 // //  			var advertenciaNombre=document.getElementById("adverNombre");
 // //  			padre.removeChild(advertenciaNombre);
 // //  			contador=0;
 // //  		}
	// // });

	// $("#rut").blur(function(){
 //    	//$("#adevertenciaNombre").text("<p class="h1">Debe registrar un nombre obligatoriamente</p>");	
 //    	if(contadorRut===1)
 //    	{
 //    		if($("#rut").val().length===0)
 //    		{
 //    			var padre=document.getElementById("adevertenciaNombre");
	// 			var parrafo=document.createElement("p");
	// 			var contenidoParrafo=document.createTextNode("Debe registrar un nombre obligatoriamente");
	// 			parrafo.className+="h5";
	// 			parrafo.id="adverNombre";
	// 			parrafo.appendChild(contenidoParrafo);
	// 			padre.appendChild(parrafo);
	// 			contador=1;
 //    		}	
 //    	}
	// });

	// $("#rut").keyup(function(){
 //  		if(contadorRut === 1)
 //  		{
 //  			if($("#rut").val().length>0)
 //  			{
 //  				$("#adverRut").hide();
 //  			}
 //  		}
	// });

	



// <div class="col-md-8" id="extranjeros" style="border-style: solid;">
//         <div class=" form-group container" id="divNacionalidadesExtranjera" style="padding-top: 0px;">
//             <label for="selectNacionalidadExtranjera">Nacionalidad</label>
//               <select class="form-control" id="selectNacionalidadExtranjera" name="selectNacionalidadExtranjera" required>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//             </select>
//         </div>
//         <div class=" form-group container" id="divPasaporte" >
//           <label for="pasaporte">Pasaporte</label>
//         <input type="text" class="form-control" id="pasaporte" name="pasaporte" required>
//         </div>
//       </div> 