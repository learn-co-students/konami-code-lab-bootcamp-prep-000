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
  // your code here
 var index = 0;
	document.body.addEventListener('keydown', (e) => {
		var key = e.key;
		
		if (codes[index] === key) {
			++index;

			if (index === codes.length) {
		    alert("Hurray!");
				index = 0;
			} 
		} else {
		  index = 0;
		}
	});
}
 
	
	 
		
	




  

