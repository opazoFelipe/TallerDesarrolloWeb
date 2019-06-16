$(document).ready(function()
{
    //Permite solo ingresar numeros del 0 al 9 en un campo de texto

    $("#cIdMarca").keyup(function(tecla) 
    {
        if (!/^[ 0-9]*$/i.test(this.value)) {
        this.value = this.value.replace(/[^ 0-9]+/ig,"");
        }
    });
    $("#cIdMarca").blur(function(tecla) 
    {
        if (!/^[ 0-9]*$/i.test(this.value)) {
        this.value = this.value.replace(/[^ 0-9]+/ig,"");
        }
    });
    $(document).on('click', '.modificar', function()
    {   

        var id2=$(this).parent().attr("id");
        var actualID=$("#thId"+id2).text();
        var actualDesc=$("#thDesc"+id2).text();
        var actualThId=$("#thId"+id2);
        var actualThDesc=$("#thDesc"+id2);
        var id="id="+id2;
        $.ajax
        ({
            type:"POST",
            url: "../PHP/BuscarID.php",
            data: id,
            success: function(respuesta)
            {   
                var datos=JSON.parse(respuesta);
                //Ocultar botones actuales
                $("#btnGuardar").attr("disabled", true);
                var botonModificar=$("#btnMod"+id2);
                var botonEliminar=$("#btnElim"+id2);
                botonModificar.hide();
                botonEliminar.hide();

                //Crear y mostrar boton guardar modificacion
                var btnGuardarModificacion=$("<input>");
                btnGuardarModificacion.attr("type", "button");
                btnGuardarModificacion.addClass("btn btn-primary tamañoBtn guardarModificacion");
                btnGuardarModificacion.attr("value", "Listo");
                $("#"+id2).append(btnGuardarModificacion);
                

                //Crear y mostrar cancelar modificacion
                var btncancelarModificacion=$("<input>");
                btncancelarModificacion.attr("type", "button");
                btncancelarModificacion.addClass("btn btn-danger tamañoBtn cancelarModificacion");
                btncancelarModificacion.attr("value", "Cancelar");
                $("#"+id2).append(btncancelarModificacion);


                //Crear y agregar el nuevo input text de modificar id marca
                $("#thId"+id2).text("");
                var idNuevo=$("<input>");
                idNuevo.attr("type", "text");
                idNuevo.css("margin", "auto auto");
                idNuevo.attr("id", "cIdNuevo"+id2);
                idNuevo.attr("placeholder", actualID);
                idNuevo.css("width", "100px");
                idNuevo.css("height", "40px");
                idNuevo.addClass("form-control");
                $("#thId"+id2).append(idNuevo);

                //Crear y agregar el nuevo input text de modificar descripcion marca
                $("#thDesc"+id2).text("");
                var descNuevo=$("<input>");
                descNuevo.attr("type", "text");
                descNuevo.css("margin", "auto auto");
                descNuevo.attr("id", "cDescNuevo"+id2);
                descNuevo.attr("placeholder", actualDesc);
                descNuevo.css("width", "150px");
                descNuevo.css("height", "40px");
                descNuevo.addClass("form-control");
                $("#thDesc"+id2).append(descNuevo);

                idNuevo.keyup(function(tecla) 
                {
                    if (!/^[ 0-9]*$/i.test(this.value)) {
                    this.value = this.value.replace(/[^ 0-9]+/ig,"");
                    }
                });

                //Funcion para modificar la marca en la base de datos
                btnGuardarModificacion.click(function(){
                    var idReemplazar=$(this).parent().attr("id"); //Id(Antiguo) que se reemplazara en la BD
                    var NuevoId=idNuevo.val(); //Guarda el id ingresado en el campo modificar
                    var NuevaDesc=descNuevo.val(); //Guarda la descripcion ingresada en el campo modificar
                    if(NuevoId.length>0)
                    {
                        idNuevo.css("border", "");
                    
                        var datosNuevos="idReemplazar="+idReemplazar+"&idNuevo="+NuevoId+"&desc="+NuevaDesc;
                        var filaActual=$("#idFila"+idReemplazar);

                        $.ajax //Peticion para modificar la marca
                        ({
                            type:"POST",
                            url:"../PHP/modificarMarca.php",
                            data:datosNuevos,
                            success: function(respuesta)
                            {   

                                if(respuesta==="Datos modificados correctamente")
                                {
                                alert(respuesta);
                                idNuevo.parent().attr("id", "thId"+NuevoId);
                                descNuevo.parent().attr("id", "thDesc"+NuevoId);
                                btnGuardarModificacion.parent().attr("id", NuevoId);
                                btncancelarModificacion.parent().attr("id", NuevoId);
                                filaActual.attr("id", "idFila"+NuevoId);
                                var thId=$("#thId"+NuevoId);
                                thId.empty();
                                thId.text(NuevoId);
                                var thDesc=$("#thDesc"+NuevoId);
                                thDesc.empty();
                                thDesc.text(NuevaDesc);
                                btnGuardarModificacion.remove();
                                btncancelarModificacion.remove();
                                botonModificar.show();
                                botonModificar.attr("id", "btnMod"+NuevoId);
                                botonEliminar.show();
                                botonEliminar.attr("id", "btnElim"+NuevoId);
                                $("#btnGuardar").attr("disabled", false);

                                }else {alert(respuesta)};
                            }       
                        });
                    }else{   
                       alert("Llene el campo id");
                    } 
                });

                //Funcion para cancelar modificacion de marca en la base de datos
                btncancelarModificacion.click(function() {
                    botonModificar.show();
                    botonEliminar.show();
                    btnGuardarModificacion.remove();
                    btncancelarModificacion.remove();
                    actualThId.empty();
                    actualThDesc.empty();
                    actualThId.text(actualID);
                    actualThDesc.text(actualDesc);
                    $("#btnGuardar").attr("disabled", false);
                });
            }
        });
    });

    $(document).on('click', '.eliminar', function()
    {   
        var id2=$(this).parent().attr("id");
        var idFila="idFila"+id2;
        idEliminar="id="+id2;
        var opcion=confirm("¿Esta seguro de eliminar los datos?");
        if(opcion===true)
        {
            $.ajax
            ({
                type:"POST",
                url:"../PHP/eliminarMarca.php",
                data:idEliminar,//only input
                success: function(respuesta)
                {
                    alert(respuesta);
                    $("#"+idFila).remove();   
                }       
            }); 
        }

    });    

	$("#btnGuardar").click(function()
	{
        var id=($("#cIdMarca").val()).length;
        var desc=($("#cDescripMarca").val()).length;
        if(id===0 | (desc===0))
        {
            alert("Complete todos los campos");
        }else{
            if(desc>49)
            {
                alert("La descripcion no puede superar 50 caracteres, acortela");
            }else{
            $.ajax
            ({
                type:"POST",
                url:"../PHP/IngresarIdMarca.php",
                data:$("#formulario").serialize(),//only input
                success: function(respuesta)
                {
                    if(respuesta==="IdMarca ingresado ya existe, cambie el valor")
                    {
                        alert(respuesta);
                    }else{
                        alert(respuesta);
                        limpiarTabla();
                        obtenerTabla(); 
                    } 
                }       
            }); 
        }
        }
        
    });

    function obtenerTabla()
    {
        $.ajax
        ({
            type:"POST",
            url:"../PHP/obtenerTablaMarcas.php",
                // dataType: "json",
            success: function(respuesta2)
            {
                var bodyTabla=$("#bodyTabla");
                var datos=JSON.parse(respuesta2);
                for(var i=0; i<datos.length; i++)
                {
                    var filaNueva=$("<tr>");
                    filaNueva.attr("id", "idFila"+datos[i].idmarca);
                    var id=$("<th>");
                    id.attr("id", "thId"+datos[i].idmarca);
                    var desc=$("<th>");
                    desc.attr("id", "thDesc"+datos[i].idmarca);
                    var opciones=$("<th>");
                    opciones.attr("id", datos[i].idmarca);
                    opciones.addClass("opciones btn-group");
                    var btnModificar=$("<input>");
                    btnModificar.attr("type", "button");
                    btnModificar.attr("value", "Modificar");
                    btnModificar.attr("id", "btnMod"+datos[i].idmarca);
                    btnModificar.addClass("btn btn-secondary tamañoBtn modificar");
                    var btnEliminar=$("<input>");
                    btnEliminar.attr("type", "button");
                    btnEliminar.attr("value", "Eliminar");
                    btnEliminar.attr("id", "btnElim"+datos[i].idmarca);
                    btnEliminar.addClass("btn btn-danger tamañoBtn eliminar");
                    id.text(datos[i].idmarca);
                    desc.text(datos[i].descripcionmarca);
                    opciones.append(btnModificar);
                    opciones.append(btnEliminar);
                    filaNueva.append(id);
                    filaNueva.append(desc);
                    filaNueva.append(opciones);
                    bodyTabla.append(filaNueva);
                }
            }    
        });
    }

    function limpiarTabla()
    {
        $("#bodyTabla tr").remove();
    }
    obtenerTabla();

    //Aqui quede, en hacer la accion del boton guardarModificacion("listo") y cancelarModificacion

});



