//Slider

var slider = $('#slider')
var next = $('#btn-next')
var prev = $('#btn-prev')

//Movemos ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first')

slider.css('margin-left', '-' + 100 + '%')

function moverD() {
	slider.animate({
		marginLeft: '-' + 200 + '%'
	}, 700, function () {
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

next.on('click', function () {
	moverD()
})

prev.on('click', function () {
	moverI()
})

function autoplay() {
	setInterval(function () {
		moverD()
	}, 5000)
}

autoplay()

//Fin Slider

//One Page scroll

function onePageScroll(e) {
	e.preventDefault()
	var idLink = $(this).attr('href'),
		coordSection = $(idLink).offset().top

	$('html, body').animate({
		//para separarlo un poco del top le puse (coordSection - 60)
		scrollTop: (coordSection - 60)
	}, 1000)
}

//ejecutamos la funcion onePageScroll en el eventos click de cada enlace

$('.link').on('click', onePageScroll)

//Fin onepage scroll


//Efectos y animaciones

function efectos(){
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

// JS Puro

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
	modal4 = document.getElementById('modal4'),
	modalOculto = document.getElementById('oculto'),
	modalPostula = document.getElementsByClassName('postula')

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
	}, [modalContentEl])

	// Imprimir el modal
	document.body.appendChild(modalContainerEl)

	//Remover el modal
	const removeModal = () => document.body.removeChild(modalContainerEl)

	// Evento que ejecuta la funcion que remueve el modal

	modalContainerEl.addEventListener('click', e => {
		if (e.target === modalContainerEl) removeModal()
	})
}

//Contenido de cada modal
const contModal1 = `<h2 class="c-modal-item-title">Modal 1 Funciona</h2>`,
	contModal2 = `<h2 class="c-modal-item-title">Modal 2 Funciona</h2>`,
	contPostula = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchS7ijK4Kh_jN3BZliG6wUS39kRFNyqgolHuZPBzVU1f-pJQ/viewform?embedded=true" width="700" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
	contModal3 = `<h2>Modal 3 Funciona</h2>`,
	contModal4 = `<h2>Modal 4 Funciona</h2>`,
	contModalOculto = `<h2>Modal Oculto</h2>`

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

modalOculto.addEventListener('click', () => {
	printModal(`${contModalOculto}`)
})

for (let n = 0; n < modalPostula.length; n++) {
	modalPostula[n].addEventListener('click', (e) => {
		e.preventDefault()
		printModal(`${contPostula}`)
	})
}