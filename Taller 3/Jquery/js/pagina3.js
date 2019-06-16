$( document ).ready(function() {

inicializarEventos();

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(ocultarItem);
}

function ocultarItem()
{
	
	
  var x;
  x=$("#lista1 li");
  
  var esVisible = x.is(":visible");
  

  
  if(esVisible){
	  $("#boton1").val('Mostrar item primer lista');
	    x.hide();
  }else{
	    $("#boton1").val('ocultar item primer lista');
	    x.show();
  }

}
	
});