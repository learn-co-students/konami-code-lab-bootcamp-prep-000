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

const main = document.getElementsByTagName('body')[0];

function init() {
  // your code here
  // get the body element
  

  let index = 0;
  
  //setup listener
  main.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert('Hurray!');
        index = 0;
      }
    }
    else {
      index = 0;
    }
  })
}
