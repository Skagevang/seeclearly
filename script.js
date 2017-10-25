const anchors = [...document.getElementsByTagName('a')];

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
