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

let index = 0;

document.addEventListener('keydown', init);

function init(e) { //will run everytime a key is pressed with addEventListener, no need for a loop.
  // your code here
  const key = e.key;
  if(key === codes[index]){ 
    index++;
    if(index === codes.length){
      alert('code was entered correctly');
      
      index =0;
    }
  } else {
    index = 0;
  }
}
