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
  document.body.addEventListener('keydown',onKeyDownHandler);
  let index = 0;
  function onKeyDownHandler(e) {
  	const key = e.key;
  	console.log(key);
  	if(key === codes[index]) {
  		index++;
  		if(index === codes.length) {
  			alert("Yay!");
  			index = 0;
  		}
  	} else {
  		index = 0;
  	}
  }
}
