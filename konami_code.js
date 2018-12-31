const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
}

  var counter = 0;
	  const key = document.addEventListener('keydown', function(e) {
	    const key2 = e.key;
	    //debugger;
	      if (key2 === codes[counter]) {
	        counter++;
	        if (counter === codes.length) {
	          window.alert("Congratulations, you have correctly inputed the cheat code!");
	          return;
	        }
	      }
	      else {
	        counter = 0;
	      }
	  });
	}