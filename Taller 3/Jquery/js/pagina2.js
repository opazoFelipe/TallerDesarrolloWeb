$( document ).ready(function() {

inicializarEventos();

function inicializarEventos()
{
  var x;
  x=$("tr");
  x.click(presionFila);
}
	
function presionFila()
{
  var x;
  x=$(this);
  x.css("background-color","#eeeeee");
}

	
});