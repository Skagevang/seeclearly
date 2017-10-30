
function getData(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', "partials/"+url, true);
  request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
          // Success
          cb(request);
      } else {
          // Handle error
          console.log("Unable to load request " + request.status + " - " + request.statusText);
      }
  }
  request.send();
}

const colorRightNavLink = () => {
  const anchors = [...document.querySelectorAll("a")];
  for (let anchor of anchors) {
    if (anchor.href === window.location.href) {
      anchor.style.backgroundColor = 'green';
      anchor.style.color = 'white';
    }
    else if (window.location.href.indexOf('about') !== -1) {
      if (anchor.href.indexOf('about.html') !== -1) {
        anchor.style.backgroundColor = 'green';
        anchor.style.color = 'white';
      }
    }
  }
}

getData('header.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = resp.response + wrapper.innerHTML; // Prepend header
  colorRightNavLink();
});

getData('footer.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.parentNode.innerHTML += resp.response;
})

//FAQ - show/hide the answer part of the "questions" and changes arrow direction

function toggle_visibility(button, answer_div) {
	let div = document.getElementById(answer_div);
	let but = document.getElementById(button);
	let text_with_arrow = but.innerHTML;
	text = text_with_arrow.substr(0, text_with_arrow.length -16);


	if (div.style.display === "block") {
		div.style.display = "none";
		but.innerHTML = text + "<arrow>▼</arrow>";
	}
	else {
		div.style.display = "block";
		but.innerHTML = text + "<arrow>▲</arrow>";
	}
}

//Code for the slideshow on the home page

/*
* Code for slideshow is taken from  
* https://www.w3schools.com/howto/howto_js_slideshow.asp
* and only modified slightly to suit our needs and preferences.
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
