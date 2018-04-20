var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var punto = document.getElementsByClassName("punto");

	if(n > slides.length) {slideIndex = 1}
	if(n < 1) {slideIndex = slides.length}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < punto.length; i++){
		punto[i].className = punto[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	punto[slideIndex-1].className += " active";
}

function showSlides(){
	var i;
	var slides = document.getElementsByClassName("slider-item");
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length){slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 3000);
}