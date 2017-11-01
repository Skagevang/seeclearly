
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
