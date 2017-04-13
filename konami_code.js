var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  // your code here
var body = document.body;
var index = 0;

body.addEventListener('keydown', function(e){
	var key = parseInt(e.detail || e.which)
	console.log(key);
	if (key === code[index]) {
		index++
	} else {
		index = 0
	}
	if (index === code.length){
		alert('you did it')
	}

})

}

init()
