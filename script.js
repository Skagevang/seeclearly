
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
  evt.preventDefault();
  console.log("navigating now!");
  //history.pushState(null, null, this.getAttribute("href"));
  getData(this.getAttribute("data-part"), loadNewPage);
  var anchors = document.querySelectorAll("#navbar a");
  for(var i = 0; i < anchors[i];i++){
    anchors[i].style.backgroundColor = "";
  }
  this.style.backgroundColor = "green";

  return false; // Stop further navigation
}


getData('/header.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = resp.response + wrapper.innerHTML; // Prepend header
  var anchors = document.getElementsByTagName('a');
  for(var i = 0; i < anchors.length; i++){
    console.log("Adding to element");
    if (anchors[i].href === window.location.href) {
      anchors[i].style.backgroundColor = 'green';
    }
    anchors[i].addEventListener('click', navigateWebsite);
  }
});

getData('/footer.part', function(resp){
  var wrapper = document.querySelector(".wrapper");
  wrapper.parentNode.innerHTML += resp.response;
})