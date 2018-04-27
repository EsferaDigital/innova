//Slider

var slider = $('#slider')
var next = $('#btn-next')
var prev = $('#btn-prev')

//Movemos ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first')

slider.css('margin-left', '-'+100+'%')

function moverD(){
	slider.animate({
		marginLeft: '-'+200+'%'
	}, 700, function(){
		$('#slider section:first').insertAfter('#slider section:last')
		slider.css('margin-left', '-' + 100 + '%')
	})
}

function moverI() {
	slider.animate({
		marginLeft: 0
	}, 700, function () {
		$('#slider section:last').insertBefore('#slider section:first')
		slider.css('margin-left', '-' + 100 + '%')
	})
}

next.on('click', function(){
	moverD()
})

prev.on('click', function(){
	moverI()
})

function autoplay(){
	setInterval(function(){
		moverD()
	}, 5000)
}

autoplay()

//Fin Slider

// Navegacion

//One Page scroll

function onePageScroll(e){
	e.preventDefault()	
	var idLink = $(this).attr('href'),
		 coordSection = $(idLink).offset().top

	$('html, body').animate({
		scrollTop : coordSection
	}, 1000)
}

//ejecutamos la funcion onePageScroll en el eventos click de cada enlace

$('.link').on('click', onePageScroll)

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

//Oculta el header al ir a un link


//Ejecutamos las funciones

toggleMenu.addEventListener('click', showHideMenu)

mainNav.addEventListener('mouseleave', hideMenu)

window.addEventListener('scroll', showHideHeader, false);

for (let n = 0; n < itemLink.length; n++) {
	itemLink[n].addEventListener('click', showHideMenu)
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

//Fin Efectos y animaciones

//Ventana Modal

// Funciones necesarias

// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
	for (let attr in attrObj) {
		if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
	}
};

// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
	let customElement = document.createElement(element);
	if (children !== undefined) children.forEach(el => {
		if (el.nodeType) {
			if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
		} else {
			customElement.innerHTML += el;
		}
	});
	addAttributes(customElement, attributes);
	return customElement;
};

// Imprimir modal

//Obtenemos cada modal

const modal1 = document.getElementById('modal1'),
		modal2 = document.getElementById('modal2'),
		modal3 = document.getElementById('modal3'),
		modal4 = document.getElementById('modal4')

//content es el parametro que recibe la funcion. En el meteremos el contenido del modal en si que va dentro del div modalContentEl
const printModal = content => {
	//Crea contenedor interno
	const modalContentEl = createCustomElement('div', {
		id: 'content-modal',
		class: 'c-modal-item'
	}, [content])
	// crea contenedor principal
	const modalContainerEl = createCustomElement('div', {
		id: 'container-modal',
		class: 'c-modal'
	}, [modalContentEl] )

	// Imprimri el modal
	document.body.appendChild(modalContainerEl)

	//Remover el modal
	 const removeModal = () => document.body.removeChild(modalContainerEl)

	 // Evento que ejecuta la funcion que remueve el modal

	 modalContainerEl.addEventListener('click', e => {
		 if(e.target === modalContainerEl) removeModal()
	 })
}

//Contenido de cada modal
const contModal1 = `<h2>Modal 1 Funciona</h2>`,
		contModal2 = `<h2>Modal 2 Funciona</h2>`,
		contModal3 = `<h2>Modal 3 Funciona</h2>`,
		contModal4 = `<h2>Modal 4 Funciona</h2>`

//Ejecución de cada modal (esto se puede mejorar con un array de elementos)

// for (let n = 0; n < itemLink.length; n++) {
// 	itemLink[n].addEventListener('click', showHideMenu)
// 	// 	itemLink[n].addEventListener('click', hideHeader)
// }

modal1.addEventListener('click', () => {
	printModal(`${contModal1}`)
})

modal2.addEventListener('click', () => {
	printModal(`${contModal2}`)
})

modal3.addEventListener('click', () => {
	printModal(`${contModal3}`)
})
modal4.addEventListener('click', () => {
	printModal(`${contModal4}`)
})