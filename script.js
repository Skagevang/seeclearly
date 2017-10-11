const anchors = [...document.getElementsByTagName('a')];

for (let anchor of anchors) {
  if (anchor.href === window.location.href) {
    anchor.style.backgroundColor = 'green';
  }
}
