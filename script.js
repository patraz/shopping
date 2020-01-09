var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", markListItem);

	// var guzik = li.createElement("BUTTON");
	// var t = li.createTextNode("DELETE");
	// li.addEventListener("click", addButton);

	// function addButton() {
	// li.appendChild(guzik.appendChild(t))

	var btn = document.createElement("BUTTON");
	btn.innerHTML = "				 X "
	btn.addEventListener("click", remov)
	li.appendChild(btn)

	function remov() {
		li.remove();
	}

	function markListItem() {
	li.classList.toggle("done");
}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


