/*
 * Function to simplify XML  Http request
 * Performs cb function on success
 * @params: String url, function cb
 * @return: void
 */
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
/*
 * Function to color the currect link according to the current url
 * Sets the background color to green and text color to white of the current link
 * @params: void
 * @return: void
 */
const colorRightNavLink = () => {
  const anchors = [...document.querySelectorAll("a")];
  for (let anchor of anchors) {
    if (anchor.href === window.location.href) {
      anchor.style.backgroundColor = 'green';
      anchor.style.color = 'white';
    }
  }
}
/*
 * call getData function to get header.part with anonomous function as callback
 * function inserts response as HTML inside a created HEADER element
 * This is then inserted into the wrapper before the first child
 */
getData('header.part', function(resp){
  var wrapper, header;
  wrapper = document.querySelector(".wrapper");
  header = document.createElement("header");
  header.innerHTML = resp.response;
  wrapper.insertBefore(header, wrapper.children[0]); // Preprend header
  colorRightNavLink();
});
/*
 * Call getData function to get footer.part with another anonomous function as callback
 * function inserts response as HTML inside a created FOOTER element
 * This is then appended to the wrapper (inserted at the end)
 */
getData('footer.part', function(resp){
  var wrapper, footer;
  wrapper = document.querySelector(".wrapper");
  footer = document.createElement("footer");
  footer.innerHTML = resp.response;
  wrapper.parentNode.appendChild(footer);
})
