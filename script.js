// const cyanButton = document.getElementById("cyan");
// const grayButton = document.getElementById("gray");
// const purpleButton = document.getElementById("purple");

cyan.addEventListener("click", function () {
	document.querySelector("body").classList.add("cyan");
	document.querySelector("body").classList.remove("gray");
	document.querySelector("body").classList.remove("purple");
});

gray.addEventListener("click", function () {
	document.querySelector("body").classList.add("gray");
	document.querySelector("body").classList.remove("cyan");
	document.querySelector("body").classList.remove("purple");
});

purple.addEventListener("click", function () {
	document.querySelector("body").classList.add("purple");
	document.querySelector("body").classList.remove("cyan");
	document.querySelector("body").classList.remove("gray");
});

// CALCULATOR FUNTIONS

var numbers = document.querySelectorAll(".calc_key");
var input = document.querySelector(".inp");
var del = document.querySelector(".del");
var reset = document.querySelector(".reset");
var equal = document.querySelector(".equal");

var inp_text = "";

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {
		if (
			numbers[i].classList.contains("op") &&
			!numbers[i].classList.contains("dot")
		) {
			var op = inp_text.slice(-1);
			if (
				op == "+" ||
				op == "-" ||
				op == "*" ||
				op == "/" ||
				(op == "." && op == null) ||
				inp_text == ""
			) {
			} else {
				inp_text += numbers[i].innerHTML;
				input.value = inp_text;
			}
		} else if (numbers[i].classList.contains("dot")) {
			var test = inp_text.slice(-1);
			var op = ["+", "-", "*", "/", "."];
			var table = [];
			for (let i = 0; i < op.length; i++) {
				table[i] = inp_text.lastIndexOf(op[i]);
			}
			if (Math.max.apply(null, table) == table[4] && table[4] != -1) {
			} else if (
				test == "+" ||
				test == "-" ||
				test == "/" ||
				test == "*" ||
				(test == ".") & (test == null) ||
				inp_text == ""
			) {
			} else {
				inp_text += numbers[i].innerHTML;
				input.value = inp_text;
			}
		} else {
			inp_text += numbers[i].innerHTML;
			input.value = inp_text;
		}
	});
}

function check(text) {
	var op = ["+", "-", "*", "/", "."];
	var table = [];
	for (let i = 0; i < op.length; i++) {
		table[i] = text.lastIndexOf(op[i]);
	}
	if (Math.max.apply(Math, table) == table[4]) {
	} else {
	}
}

reset.addEventListener("click", () => {
	inp_text = "";
	input.value = inp_text;
});

del.addEventListener("click", () => {
	inp_text = inp_text.slice(0, -1);
	input.value = inp_text;
});

equal.addEventListener("click", () => {
	inp_text = isNaN(eval(inp_text)) ? "" : eval(inp_text);
	input.value = inp_text;
});
