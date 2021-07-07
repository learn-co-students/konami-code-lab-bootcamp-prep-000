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

function init() {
	let i = 0;
  	document.body.addEventListener('keydown', (e) => { 
  		const key = e.key;
    	if (key === codes[i]) {
      		i++;
      		if (i === codes.length) {
      			alert("Hurray!"); 
      			i = 0;
      		}
    	}
    	else {
      		i = 0;
    	}
  	})
}

/*
function init() {
 
for (let i = 0; i < divs.length; i++) {
  codes[i].addEventListener('keydown', bubble)
}
}

const input = document.querySelector('input')
 
body.addEventListener('keydown', function(event) {
  alert("Congratulations -- you did it!")
})
*/