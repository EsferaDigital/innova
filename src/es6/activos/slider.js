let actual = 0;
let punto = document.getElementsByClassName('punto')

function mostrar(n){
	let imagenes = document.getElementsByClassName('slider-item')
	for (i = 0; i < imagenes.length; i++){
		if(imagenes[i].className.includes("actual")){
			imagenes[i].className = imagenes[i].className.replace("actual", "")
			break
		}
	}
	actual = n;
	imagenes[n].className += " actual";
}

//Eventos

function eventos(){
	let punto = document.getElementsByClassName('punto')
	this.addEventListener('click', mostrar, false)
}

