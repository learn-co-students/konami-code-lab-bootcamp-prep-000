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

// Keep track of index outside of the event handler.
let index = 0;
   document.addEventListener('keydown', function(e){
        console.log("key  pressed = " + e.key)
       const key = e.key;
   
    if (key === codes[index]) {
      console.log("index =: " + index + "key =: "+key + " codes[index] =:" + codes[index])
      index++;
      if (index === codes.length) {
        console.log("This logs!")
        alert("Hurray!"); //alert doesn't show up.
        
   
        index = 0;
      }
    } else {
      index = 0;
    }
    })
}

init();
