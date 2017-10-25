const anchors = [...document.getElementsByTagName('a')];

for (let anchor of anchors) {
  if (anchor.href === window.location.href) {
    anchor.style.backgroundColor = 'green';
  }
}

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



