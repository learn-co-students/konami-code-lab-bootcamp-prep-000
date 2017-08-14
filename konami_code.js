const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
 
	var index = 0

	document.body.addEventListener('keydown', function onKeyDownHandler(e) {
		const key = parseInt(e.detail || e.keyCode)

	  if (key === code[index]) {
	    index++

	    if (index === code.length - 1) {
	      alert("YOU DID IT!")
	      index = 0
	    }
	  } else {
	    index = 0
	  }
	})
	  //console.log(e.which)

}

	// keep track of index outside of the event handler
	
	// unattached event handler
	//function onKeyDownHandler(e) {
	  
