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
  
  var progress = 0;

  function onKeyDownHandler(e) {
    
    const key = e.key;
    //console.log(key + progress);
      
    if(key === codes[progress]) 
      progress++;
    else
      progress = 0;
      
    if(progress === codes.length) {
      alert("Hurray!");
      progress = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler);
}
