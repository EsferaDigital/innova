// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let header = document.getElementById('mainHeader')
let itemLink = document.getElementsByClassName('link')

//Declaramos variables que vamos a usar

let lastScrollTop = 0;


// Programamos las funciones

//Oculta el menu
function hideMenu() {
	mainNav.classList.remove('show-menu')
}

//Muestra u ocultamos el menu
function showHideMenu() {
	mainNav.classList.toggle('show-menu')
}

//Muestra u oculta el header
function headerFixed() {
	//al hace scroll aumenta el valor de sctop
	let sctop = document.documentElement.scrollTop;
	let st = window.pageYOffset || document.documentElement.scrollTop;
	// console.log(sctop)

	if (st > lastScrollTop) {
		header.classList.add('show-header')

	} else if (sctop === 0) {
		header.classList.remove('show-header')
	}

	lastScrollTop = st;
}

//Ejecutamos las funciones

document.addEventListener('click', e => {
	if (e.target !== mainNav && e.target !== toggleMenu) hideMenu()
})

mainNav.addEventListener('mouseleave', hideMenu)
toggleMenu.addEventListener('click', showHideMenu)
window.addEventListener('scroll', headerFixed, false);

// for (let n = 0; n < itemLink.length; n++) {
// 	itemLink[n].addEventListener('click', showHideMenu)
// }


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