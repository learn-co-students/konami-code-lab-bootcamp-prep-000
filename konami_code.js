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
  
  var index = 0;
  
  var body = document.querySelector('body');
  
  //the listener event takes to arguments, the name of the event, and a function to handle the event
  body.addEventListener('keydown', function onKeyDownHandler(e){
  
  var key = e.key;
  
  //this checks if the key that is pressed is equal to the current key value of the index
  //this iterates though the array if the conditions match
  if(key === codes[index]){
  index++; // this increases by one, or goes to the next index if they match
  
  //if the pressed key continues till the last index of the array then you get an alert which congratulates you
  if(index === codes.length){
    alert("Here's 30 Lives!");
    index = 0; // this resets the index count
    
  }
  
  }else{ // if the wrong key is press, it resets
    index = 0;
  }
  })
  
}
