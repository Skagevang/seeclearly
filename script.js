const anchors = [...document.getElementsByTagName('a')];

for (let anchor of anchors) {
  if (anchor.href === window.location.href) {
    anchor.style.backgroundColor = 'green';
  }
}

//FAQ - show/hide the answer part of the categories

function toggle_visibility(answer_div) {
	let a = document.getElementById(answer_div);
	if (a.style.display === "block") {
		a.style.display = "none";
	}
	else {
		a.style.display = "block";
	}
}



