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
	modal5 = document.getElementById('modal5'),
	modal6 = document.getElementById('modal6'),
	modalPrograma = document.getElementById('modal-programa'),
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
		contModal3 = `<h2>Modal 3 Funciona</h2>`,
		contModal4 = `<h2>Modal 4 Funciona</h2>`,
		contModal5 = `<h2>Modal 5 Funciona</h2>`,
		contModal6 = `<h2>Modal 6 Funciona</h2>`,

	contPostula = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSflJ4hlP3x_0OANM2W2ZywnFvm6PyHrovoDsjxoBSQJw0S5PQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>`,

		contPrograma = `<h2>Modal Programa Funciona</h2>`

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

modal5.addEventListener('click', () => {
	printModal(`${contModal4}`)
})

modal6.addEventListener('click', () => {
	printModal(`${contModal4}`)
})

modalPrograma.addEventListener('click', () => {
	printModal(`${contPrograma}`)
})

for (let n = 0; n < modalPostula.length; n++) {
	modalPostula[n].addEventListener('click', (e) => {
		e.preventDefault()
		printModal(`${contPostula}`)
	})
}