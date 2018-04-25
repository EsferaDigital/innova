//Slider
(function ($) {
	'use strict';

	function efectos() {
		$('.flexslider').flexslider({
			animation: 'slide',
			/*direction : 'vertical',*/
			slideShow: true,
			controlNav: true
		});
	}
	$(document).ready(efectos);
})(jQuery);

//Fin Slider

// Navegacion

// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let header = document.getElementById('mainHeader')

let itemLink = document.getElementsByClassName('link')

//Declaramos variables que vamos a usar

let lastScrollTop = 0;

// Programamos las funciones

//Muestra u ocultamos el menu
function mostrarOcultar() {
	mainNav.classList.toggle('mostrar')
}

//Oculta el menu
function ocultarMenu() {
	mainNav.classList.remove('mostrar')
}

//Muestra u oculta el header
function showHideHeader() {
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

window.addEventListener('scroll', showHideHeader, false);

for (let n = 0; n < itemLink.length; n++) {
	itemLink[n].addEventListener('click', mostrarOcultar)
}

//Fin Navegacion

//Efectos y animaciones

function efectos(){
	//Muestra seccion oculta
	$('.c-programa-button').on('click', function(){
		//velocidades fast, slow y swing
		$('.capa').slideToggle()
	})
	//Acciona el boton subir
	$('#subir').on('click', function(){
		$('html, body').animate({
			scrollTop : 0,
			scrollLeft : 0
		}, 1000)
	})
}
 function detectedScroll(){
	var scrollVertical = $(window).scrollTop(),
		 scrollHorizontal = $(window).scrollLeft()
	//console.log(scrollVertical, scrollHorizontal)	
	//Si scrollVertical es mayor a 700px al id subir añadele un fadeIn, sino añadele un fadeOut
	return ( scrollVertical > 700 ) ? $('#subir').fadeIn() : $('#subir').fadeOut()
 }

$(document).ready(efectos)
$(window).on('scroll', detectedScroll)