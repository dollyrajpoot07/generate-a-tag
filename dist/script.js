const _input = document.getElementById("input");
const save = document.getElementById("save");
const clrBtn = document.getElementById("btn-1");
const content = document.getElementById("content");

let count = 0;
let _inputValue = "";
let tags = [];

_input.addEventListener("input", (event) => {
	_inputValue = event.target.value;
});

function clearTags() {
	clrBtn.addEventListener("click", () => tagClickHandler(null));
	// clrBtn.addEventListener("click", () => btn-1.removeChild(btn-1.firstChild);
}

function tagClickHandler(value) {
	_input.value = value;
}

save.addEventListener("click", () => {
	const _id = "save-" + count;
	const _tagButton = document.createElement("button");

	const val = _inputValue;
	tags.push(val);

	_tagButton.addEventListener("click", () => tagClickHandler(val));
	_tagButton.innerText = _inputValue;

	content.appendChild(_tagButton);

	_input.value = "";
});