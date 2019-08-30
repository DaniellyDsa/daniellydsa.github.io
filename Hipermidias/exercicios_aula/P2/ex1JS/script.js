// $(document).ready(function(){
//   function ocultarTexto(){
//     var elem = $(this).prev('.conteudo');
//
//     $(elem).is(':hidden') ?
//     $(this).text('Ocultar Conteúdo') : $(this).text('Mostrar Conteúdo');
//     $(elem).toggle();
//   }
//   $('.enlace').click(ocultarTexto);
// });

function mudarVisibilidade() {
  var elem = this.previousElementSibling;
  if(elem.hidden == false){
    elem.hidden = true;
    this.textContent = "Mostrar conteúdo";
  } else {
    elem.hidden = false;
    this.textContent = "Ocultar conteúdo";
  }
}

var evento1 = document.getElementById("enlace_1");
var evento2 = document.getElementById("enlace_2");
var evento3 = document.getElementById("enlace_3");

evento1.addEventListener("click", mudarVisibilidade, false);
evento2.addEventListener("click", mudarVisibilidade, false);
evento3.addEventListener("click", mudarVisibilidade, false);
