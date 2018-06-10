'use strict'

//tope de ventana  + ((altura de ventana *3) / 4)
const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
const target = document.querySelectorAll('[data-anime]');

function animaScroll() {
	//para capturar cada objeto con el atributo [data-anime]
	target.forEach(function (e) {
		// getBoundingClientRect() nos da las coordenadas de los objeto con el atributo [data-anime]
		let caja = e.getBoundingClientRect()
		// .top nos da la distancia de esa caja con el tope de la ventana al hacer scroll
		if (windowTop > caja.top) {
			e.classList.add('animate')
		} else {
			e.classList.remove('animate')
		}
	})
}

//capturamos el evento scroll y activamos la funcion
window.addEventListener('scroll', animaScroll);