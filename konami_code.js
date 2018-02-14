var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
	 
	document.body.addEventListener('keydown', onKeyDownHandler) 	
 
}

var index = 0;

function onKeyDownHandler(e) {
	
	var key = parseInt(e.detail || e.which);

	console.log(key);
	console.log(index);

	if(key === code[index]) {

		index++;

		if(index === code.length) {
			
			alert("Konami Code!");
			index = 0;
		
		} } else {

			index = 0;
		
		}

}