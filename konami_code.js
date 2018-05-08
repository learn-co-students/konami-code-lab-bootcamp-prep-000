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
//setup variable called index = 0
 

function init() {
 let index = 0;

 //listen for keydown events
  document.body.addEventListener('keydown', function(e) {
    
  //if the key is correct, increment 'index' variable
  const key = e.key;
  console.log (key);
  console.log (codes[index])
  if (key === codes[index]) {
    index++;
    console.log(index)
    
  // use the index variable to compare a spot in the codes array  
    
  } else {
    index = 0;
  }
  if (index === codes.length) {
      index = 0;
      alert("Hooray!");
    }
});
}