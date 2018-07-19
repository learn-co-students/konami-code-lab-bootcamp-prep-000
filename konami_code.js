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

const input = document.getElementById('mocha');

function init(e) {
  // your code here
  
  let currentEvent = e;
  
  if (currentEvent === codes[index]) {
    index++;
    if (index === codes.length) {
      alert('Hurray!');
      
      index = 0;
    } 
  } else {
      console.log('fired');
      index = 0;
  }
}

document.body.addEventListener ('keydown', (event) => {
  let keyName = event.key;
  init(keyName);
});


