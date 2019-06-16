$( document ).ready(function() {

inicializarEventos();

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(resaltar);
}

function resaltar()
{
  var x;
  x=$(".resaltado");

	x.css({'color':'red','font-size':'1.3em','background':'yellow'});
}


});