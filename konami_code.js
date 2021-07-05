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

let counter = 0;

function init(e) {
  
  if(e.key === codes[counter]){
    counter++;
    
    if(counter === codes.length){
      alert('Konami Accepted!!');
    }
  }else{
    counter = 0;
  }
}


document.body.addEventListener('keydown', init);
