
function getData(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', "/partials/"+url, true);
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
function loadNewPage(resp){
  var content = document.querySelector(".main");
  content.innerHTML = resp.response;
}
function navigateWebsite(evt){
  if(this.getAttribute("data-part")){
    evt.preventDefault();
    history.pushState(null, null, this.getAttribute("href"));
    getData(this.getAttribute("data-part"), loadNewPage);
    var anchors = document.querySelectorAll("#navbar a");
    for(var i = 0; i < anchors.length;i++){
      anchors[i].style.removeProperty("background-color");
    }
    console.log(this);
    this.style.backgroundColor = "green";
    return false; // Stop further navigation
  }
}

function updateClickListeners(){

  var anchors = document.querySelectorAll("a");
  for(var i = 0; i < anchors.length; i++){
    if (anchors[i].href === window.location.href) {
      anchors[i].style.backgroundColor = 'green';
    }
    anchors[i].addEventListener('click', navigateWebsite);
    console.log("Attatching to", anchors[i]);
  }
}

getData('/header.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = resp.response + wrapper.innerHTML; // Prepend header
  updateClickListeners();
});

getData('/footer.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.parentNode.innerHTML += resp.response;
  updateClickListeners();
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