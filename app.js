function generateColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function circle() {
	var radius = Math.random() * 100 + 50,
		diameter = radius * 2,
		color = generateColor(),
		htmlCode = `<div style="width: ${diameter}px; \
								height: ${diameter}px; \
								border-radius: 50%;
								background: ${color};"></div>`;

	document.write(htmlCode);
}

var i = 0;
function showCircle() {
	circle();
	if (i < 20) {
		i++;
		setTimeout(showCircle, 1000);
	}
}

showCircle();