'use strict'

// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let header = document.getElementById('mainHeader')

let itemLink = document.getElementsByClassName('link')

//Declaramos variables que vamos a usar

let lastScrollTop = 0;

// Programamos las funciones

//Muestra u ocultamos el menu
function mostrarOcultar(){
	mainNav.classList.toggle('mostrar')
}

//Oculta el menu
function ocultarMenu(){
	mainNav.classList.remove('mostrar')
}

//Muestra u oculta el header
function detectedScroll() {
	let st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > lastScrollTop) {
		header.classList.add('header-scroll')
	} else {
		header.classList.remove('header-scroll')
	}
	lastScrollTop = st;
}

//Ejecutamos las funciones

toggleMenu.addEventListener('click', mostrarOcultar)

mainNav.addEventListener('mouseleave', ocultarMenu)

window.addEventListener('scroll', detectedScroll, false);

for (let n = 0; n < itemLink.length; n++) {
	itemLink[n].addEventListener('click', mostrarOcultar)
}