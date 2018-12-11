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
  // document.body.addEventListener('keydown', function(e){
  //   console.log(e.which)
  // });
 
  // Keep track of index outside of the event handler.
  let index = 0;
   
  // This is the function that would be invoked by the event listener.
  document.body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
   
      if (index === codes.length) {
        alert("You Entered the right codes")
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}


