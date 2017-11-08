
function getData(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', "partials/"+url, true);
  request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
          // Success
          cb(request);
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
  var wrapper, header;
  wrapper = document.querySelector(".wrapper");
  header = document.createElement("header");
  header.innerHTML = resp.response;
  wrapper.insertBefore(header, wrapper.children[0]); // Preprend header
  colorRightNavLink();
});

getData('footer.part', function(resp){
  var wrapper, footer;
  wrapper = document.querySelector(".wrapper");
  footer = document.createElement("footer");
  footer.innerHTML = resp.response;
  wrapper.parentNode.appendChild(footer);
})
