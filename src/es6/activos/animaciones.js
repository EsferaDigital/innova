//Logica de animaciones

//1° Seleccionar elementos que van a ser animados, para ello agregamos un atributo en html (ej data-anime="left")
//2° Creamos las animaciones en css. Para seleccionarlos usamos el selector de atributo [data-anime]{opacity: 0; (para que no se vean) transition: .3s;} y luego [data-anime="left"]{(ej)transform: translate3d(-50px, 0, 0)}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
	//distancia del scroll (element.offsetTop = distancia de cada elemento con el tope de la ventana)
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
	for(let n = 0; n < target.length; n++){
		if ((windowTop) > target[n].offsetTop) {
			target[n].classList.add(animationClass)
			console.log(target[n].offsetTop)
		}else{
			target[n].classList.remove(animationClass)
		}
	}
}

// target.forEach(function (element) {
// 	if ((windowTop) > element.offsetTop) {
// 		element.classList.add(animationClass)
// 		console.log(element.offsetTop)
// 	}
// })

window.addEventListener('scroll', function(){
	animeScroll();
})