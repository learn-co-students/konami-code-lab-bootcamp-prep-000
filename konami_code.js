const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//index in Konami code
var index=0

var index = 0

	function onKeyDownHandler(e) {
  	const key = parseInt(e.detail || e.which)
  		if (key === code[index]) {
    			index++

    		if (index === code.length) {
     		 alert("YOU DID IT!")
      		index = 0
    		}
  		} else {
    		index = 0
  		}
	}


function init() {
  //attach event handler to document body
  document.body.addEventListener('keydown', function(e){
    onKeyDownHandler(e)
  })
}
