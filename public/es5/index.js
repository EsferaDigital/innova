"use strict";var windowTop=window.pageYOffset+3*window.innerHeight/4,target=document.querySelectorAll("[data-anime]");function animaScroll(){target.forEach(function(e){var t=e.getBoundingClientRect();windowTop>t.top?e.classList.add("animate"):e.classList.remove("animate")})}window.addEventListener("scroll",animaScroll);var addAttributes=function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])},createCustomElement=function(e,t,n){var o=document.createElement(e);return void 0!==n&&n.forEach(function(e){e.nodeType?1!==e.nodeType&&11!==e.nodeType||o.appendChild(e):o.innerHTML+=e}),addAttributes(o,t),o},modal1=document.getElementById("modal1"),modal2=document.getElementById("modal2"),modal3=document.getElementById("modal3"),modal4=document.getElementById("modal4"),modal5=document.getElementById("modal5"),modal6=document.getElementById("modal6"),modalPrograma=document.getElementById("modal-programa"),modalPostula=document.getElementsByClassName("postula"),printModal=function(e){var t=createCustomElement("div",{id:"content-modal",class:"c-modal-item"},[e]),n=createCustomElement("div",{id:"container-modal",class:"c-modal"},[t]);document.body.appendChild(n);n.addEventListener("click",function(e){e.target===n&&document.body.removeChild(n)})},contModal1='<h2 class="c-modal-item-title">Modal 1 Funciona</h2>',contModal2='<h2 class="c-modal-item-title">Modal 2 Funciona</h2>',contModal3="<h2>Modal 3 Funciona</h2>",contModal4="<h2>Modal 4 Funciona</h2>",contModal5="<h2>Modal 5 Funciona</h2>",contModal6="<h2>Modal 6 Funciona</h2>",contPostula='<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSflJ4hlP3x_0OANM2W2ZywnFvm6PyHrovoDsjxoBSQJw0S5PQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',contPrograma="<h2>Modal Programa Funciona</h2>";modal1.addEventListener("click",function(){printModal(""+contModal1)}),modal2.addEventListener("click",function(){printModal(""+contModal2)}),modal3.addEventListener("click",function(){printModal(""+contModal3)}),modal4.addEventListener("click",function(){printModal(""+contModal4)}),modal5.addEventListener("click",function(){printModal(""+contModal4)}),modal6.addEventListener("click",function(){printModal(""+contModal4)}),modalPrograma.addEventListener("click",function(){printModal(""+contPrograma)});for(var n=0;n<modalPostula.length;n++)modalPostula[n].addEventListener("click",function(e){e.preventDefault(),printModal(""+contPostula)});var mainNav=document.getElementById("main-nav"),toggleMenu=document.getElementById("toggle-menu"),header=document.getElementById("mainHeader"),itemLink=document.getElementsByClassName("link"),lastScrollTop=0;function hideMenu(){mainNav.classList.remove("show-menu")}function showHideMenu(){mainNav.classList.toggle("show-menu")}function headerFixed(){var e=document.documentElement.scrollTop,t=window.pageYOffset||document.documentElement.scrollTop;lastScrollTop<t?header.classList.add("show-header"):0===e&&header.classList.remove("show-header"),lastScrollTop=t}function efectos(){$("#up").on("click",function(){$("html, body").animate({scrollTop:0,scrollLeft:0},1e3)})}function showUp(){var e=$(window).scrollTop();$(window).scrollLeft();return 700<e?$("#up").fadeIn():$("#up").fadeOut()}document.addEventListener("click",function(e){e.target!==mainNav&&e.target!==toggleMenu&&hideMenu()}),mainNav.addEventListener("mouseleave",hideMenu),toggleMenu.addEventListener("click",showHideMenu),window.addEventListener("scroll",headerFixed,!1),$(document).ready(efectos),$(window).on("scroll",showUp);var alturaHeader=header.offsetHeight;function onePageScroll(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("html, body").animate({scrollTop:n-alturaHeader},1e3)}$(".link").on("click",onePageScroll);var slider=$("#slider"),next=$("#btn-next"),prev=$("#btn-prev");function moverD(){slider.animate({marginLeft:"-200%"},700,function(){$("#slider section:first").insertAfter("#slider section:last"),slider.css("margin-left","-100%")})}function moverI(){slider.animate({marginLeft:0},700,function(){$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%")})}function autoplay(){setInterval(function(){moverD()},5e3)}$("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%"),next.on("click",function(){moverD()}),prev.on("click",function(){moverI()}),autoplay();