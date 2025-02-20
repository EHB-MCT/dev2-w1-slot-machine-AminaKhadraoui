import { slotMachine } from "./slotMachine.js";

function init() {
	console.log("Init");
	// TODO: log the document using console.log to test if you can get access to it
	// TODO: log the submit button. If that works, store that button in a variable
	// TODO: attach an event listener to that button and show a log "button clicked"
	// TODO: if the submit button is clicked, the lever is pulled (= call that function)

	const submitButton = document
		.querySelector("button")
		.addEventListener("click", function (e) {
			console.log("button clicked");

			pullLever();
		});
}

function pullLever() {
	// TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// TODO: spin the slot machine
	// TODO: show slots and win status

	slotMachine.spin();

	showSlots();
}

function showSlots() {
	// TODO: show the slot symbols in HTML

	let htmlstring = "";

	for (let i = 0; i < slotMachine.slots.length; i++) {
		htmlstring +=
			'<span class="' +
			slotMachine.slots[i] +
			'">' +
			slotMachine.slots[i] +
			"</span>";

		document.querySelector("#result").innerHTML = htmlstring;
	}
}

function showGameResult() {
	// TODO: show a win or lose message in HTML
}

init();
pullLever();
