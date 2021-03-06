function palindromo() {
	var str = prompt("Digite uma palavra: ");
	var inverse = str.split('');
	inverse = inverse.reverse();
	inverse = inverse.join('');
	str == inverse ? alert("A palavra é um palíndromo") : alert("A palavra não é um palíndromo");
}

function calcTempo() {
	var input = prompt("Digite uma data: ");
	var data = new Date(input).getTime();
	var dataAtual = new Date().getTime();
	var tempo = new Date(dataAtual - data);
	var dia = tempo.getDay();
	var mes = tempo.getMonth();
	var ano = tempo.getFullYear() - 1970;
	alert("Tempo decorrido da data informada até agora: \nDias: "+dia+"\nMeses: "+mes+"\nAno: "+ano);

}

function validarEmail(){
	/*var email = prompt("Digite o email: ");
  	var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  	if(pattern.test(email)) {
    	alert('Email válido!');
  	} else {
  		alert('Email inválido!');
  	}*/
  	var email = prompt("Digite o email: ");
  	var user = email.split("@");
  	if (user.length == 2 && user[0].length > 0 && user[1].length > 0) {
  		var domi = user[1].split(".");
  		if (domi.length > 2 && domi[1].length > 2) {
  			alert("Email válido");
  			return 0;
  		}
  	}
  	alert("Email inválido");
  	return 1;
}

function addLista() {
	var input = document.getElementById("item");
	var texto = input.value;
	if (texto.length > 0) {
		var lista = document.querySelector("ul");
		var item = document.createElement("li");
		item.textContent = texto;
		lista.appendChild(item);
		input.value = "";
	} else {
		alert("Item vazio.");
	}
}

// function addFrase() {
// 	var txt = document.getElementById("frase");
// 	txt.innerHTML = this.value;
// }

var elem1 = document.getElementById("palindromo");
elem1.addEventListener("click", palindromo, false);

var elem2 = document.getElementById("calcTempo");
elem2.addEventListener("click", calcTempo, false);

var elem3 = document.getElementById("email");
elem3.addEventListener("click", validarEmail, false);

var elem4 = document.getElementById("addLista");
elem4.addEventListener("click", addLista, false);

// var elem5 = document.getElementById("addFrase");
// elem5.addEventListener("input", addFrase, false);

//JQuery
$(document).ready(function(){
  $("#addFrase").keyup(function(){
    $('span').text($("#addFrase").val());
  });
});

//AJAX
$(document).ready(function (id) {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/users",
		success: function(result) {
			for (let i of result)
				$("#usuarios").append(`<option value="${i.id}">${i.name}</option>`)
		}
	});
	function mostrarPosts(id) {
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/posts",
			data: {userId: id},
			success: function(result) {
				if (result.length > 0) {
					$("#posts").empty();
					for (let i of result)
						$("#posts").append(`<div><p>ID: ${i.id}</p><p>${i.title}</p><p>${i.body}</p></div><br>`)
				} else {
					$("#posts").empty();
					$("#posts").append(`<p> Id não encontrado</p>`);
				}
			}
		});
	}
	$('#buscaId').click(function(e)
	{
			mostrarPosts($('#pesquisaId').val());
	});

	$('#pesquisaId').keydown(function(e)
	{
			if (e.keyCode == 13)
					mostrarPosts($('#pesquisaId').val());
	});

	$('#usuarios').change(function(e)
	{
			mostrarPosts($('#usuarios').val());
	});
});
