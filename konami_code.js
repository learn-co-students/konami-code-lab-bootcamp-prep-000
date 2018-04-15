const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  // Write your JavaScript code inside the init() function

  let i = 0;

  const body = document.body;

  body.addEventListener('keydown', function onKeyDownHandler(e) {

	const key = parseInt(e.detail || e.which);

	if (key === code[i]) {
		i++;

		if (i === code.length) {
			alert('Congrats!');
			i = 0;
		}

	} else {
		i = 0;
	}
	});
}