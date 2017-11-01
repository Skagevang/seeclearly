/*
FILE NAME: faq.js
WRITTEN BY: Sigurd Aasbrenn
WHEN: October 2017
PURPOSE: Provides a function to the faq.html page to show/hide the answers to frequently asked questions
			and switches the direction of the arrow on the button based on if the answer is visible or not
*/

function toggle_visibility(button_id, answer_div_id) {
	//Grabs elements by the ID provided
	let div = document.getElementById(answer_div_id);
	let but = document.getElementById(button_id);
	//Extracts the html from the burron
	let text_with_arrow = but.innerHTML;
	//Removes the arrow + arrow tags from the text
	text = text_with_arrow.substr(0, text_with_arrow.length - 8);

	//Checks if the answer div is visible (that is set do display = block)
	if (div.style.display === "block") {
		//If yes removes the answer from the docuement flow and changes the direction of the arrow on the button
		div.style.display = "none";
		but.innerHTML = text + "▼</span>";
	}
	//If not then sets display of the answer to block and changes the direction of the arrow on the button
	else {
		div.style.display = "block";
		but.innerHTML = text + "▲</span>";
	}
}