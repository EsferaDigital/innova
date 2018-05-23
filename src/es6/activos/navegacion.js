// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let header = document.getElementById('mainHeader')

let itemLink = document.getElementsByClassName('link')

//Declaramos variables que vamos a usar

let lastScrollTop = 0;

// Programamos las funciones

//Muestra u ocultamos el menu
function showHideMenu() {
	mainNav.classList.toggle('show-menu')
}

//Oculta el menu
function hideMenu() {
	mainNav.classList.remove('show-menu')
}

//Muestra u oculta el header
function showHideHeader() {
	let st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > lastScrollTop) {
		header.classList.replace('show-header', 'hide-header')

	} else {
		header.classList.replace('hide-header', 'show-header')
	}

	lastScrollTop = st;
}

//Ejecutamos las funciones

toggleMenu.addEventListener('click', showHideMenu)

mainNav.addEventListener('mouseleave', hideMenu)

window.addEventListener('scroll', showHideHeader, false);

for (let n = 0; n < itemLink.length; n++) {
	itemLink[n].addEventListener('click', showHideMenu)
}


	//para probar, hacer scroll y ver si el console.log() funciona
	//console.log(windowTop);

//Efectos y animaciones

function efectos() {
	$('#up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0,
			scrollLeft: 0
		}, 1000)
	})
}

function showUp() {
	var scrollVertical = $(window).scrollTop(),
		scrollHorizontal = $(window).scrollLeft()
	//console.log(scrollVertical, scrollHorizontal)	
	//Si scrollVertical es mayor a 700px al id up añadele un fadeIn, sino añadele un fadeOut
	return (scrollVertical > 700) ? $('#up').fadeIn() : $('#up').fadeOut()
}

//ejecutamos la funcion efectos cuando el documento esté cargado
$(document).ready(efectos)
//ejecutamos la funcion showUp cuando la ventana esté cargada
$(window).on('scroll', showUp)