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
  
let index = 0;
document.body.addEventListener('keydown', function (e) {
  const key = e.key;
	if (key === codes[index]){
	  index++;
	  
	  if (index === codes.length) {
	    alert("Hurray!");
	    index = 0;
	  }
	} else {index = 0;
	  } 
} 
)}


//AssertionError: expected 2 to equal 1
    //at Context.it (test/indexTest.js:35:32)
//This isn't working, maybe try whole metalGear function in .body.addEventListener as next step.