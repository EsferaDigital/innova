'use strict'

// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let itemLink = document.getElementsByClassName('link')

// Programamos las funciones

function mostrarOcultar(){
	mainNav.classList.toggle('mostrar')
}

function ocultarMenu(){
	mainNav.classList.remove('mostrar')
}

//Ejecutamos las funciones

toggleMenu.addEventListener('click', mostrarOcultar)
mainNav.addEventListener('mouseleave', ocultarMenu)


for (let n = 0; n < itemLink.length; n++) {
	itemLink[n].addEventListener('click', mostrarOcultar)
}
