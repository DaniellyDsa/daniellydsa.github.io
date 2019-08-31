function salvarDados() {
  var nome = document.getElementById("nome").value;
  var tel = document.getElementById("fone").value;
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var quantQuartos = $("#quartos").val();
  var valor;
  if (quantQuartos >= 1) {
    valor = parseFloat($("#tipo1").val());
    var crianca = $("input:radio[name=crianca]:checked").val();
    var idade = $("#idade").val();
    if (crianca == 1 && idade < 5) {
      valor += parseFloat(30.00);
    }
    if (quantQuartos >= 2) {
      valor += parseFloat($("#tipo2").val());
      var crianca = $("input:radio[name=crianca]:checked").val();
      var idade = $("#idade2").val();
      if (crianca == 1 && idade < 5) {
        valor += parseFloat(30.00);
      }
      if (quantQuartos == 3) {
        valor += parseFloat($("#tipo3").val());
        var crianca = $("input:radio[name=crianca]:checked").val();
        var idade = $("#idade3").val();
        if (crianca == 1 && idade < 5) {
          valor += parseFloat(30.00);
        }
      }
    }
  }
   var dias = calcTempo(checkin, checkout);
   valor = valor * dias;
  alert("Valor da reserva: "+valor);
  var pessoa = new Pessoa(nome, tel, checkin, checkout, quantQuartos, valor, crianca, idade);
  return pessoa;
}

function calcTempo(checkin, checkout) {
	var datai = new Date(checkin).getTime();
	var dataf = new Date(checkout).getTime();
	var tempo = new Date(datai - dataf);
	var dia = tempo.getDay();
  console.log(dia);
	return dia;
}

function Pessoa(nome, fone, checkin, checkout, quant, tipo, crianca, idade) {
  this.nome = nome;
  this.telefone = fone;
  this.checkin = checkin;
  this.checkout = checkout;
  this.quantQuartos = quant;
  this.tipo = tipo;
  this.crianca = crianca;
  this.idadeCrianca = idade;
}

function fazerReserva() {
  pessoa = salvarDados();
}

var reserva = document.getElementById("reserva");
reserva.addEventListener("click", fazerReserva, false);
