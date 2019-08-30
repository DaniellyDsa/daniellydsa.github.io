var quebrada = false;
/*function mudaLampada(tipo) {
	if (!quebrada) {
		document.getElementById("luz").src = tipo + ".jpg";
		if (tipo == "lampada-quebrada") {
			quebrada = true;
		}
	}
}*/

function mudaLampada() {
	if(this.src.includes("apagada")) {
		this.src = "lampada-acesa.jpg";
	} else {
		this.src = "lampada-apagada.jpg";
	}
}

function quebraLampada() {
	if (!this.src.includes("quebrada")) {
		this.src = "lampada-quebrada.jpg"
		this.removeEventListener("click", mudaLampada, false);
	}
}

document.getElementById("luz").addEventListener("click", mudaLampada, false);
document.getElementById("luz").addEventListener("dblclick", quebraLampada, false);
