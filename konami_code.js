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
  var count = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[count]) {  
        count++; 
  } else {
       count = 0;
    }
  if (count === codes.length) { 
         alert('Congratulations!'); 
         count = 0;
    }
      }
)}