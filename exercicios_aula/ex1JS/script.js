
var evento1 = document.getElementById("enlace_1");
var evento2 = document.getElementById("enlace_2");
var evento3 = document.getElementById("enlace_3");

evento1.addEventListener("click", () => {mudarVisibilidade("conteudo_1", evento1);}, false);
evento2.addEventListener("click", () => {mudarVisibilidade("conteudo_2", evento2);}, false);
evento3.addEventListener("click", () => {mudarVisibilidade("conteudo_3", evento3);}, false);

function mudarVisibilidade(p_id, evento) {
  var elem = document.getElementById(p_id);
  if(elem.style.display == "none"){
    elem.style.display = "block";
    evento.textContent = "Ocultar conteúdo"
  } else {
    elem.style.display = "none";
    evento.textContent = "Mostrar conteúdo"
  }
}
