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



function init(){
  const body = document.querySelector("body");
  let index = 0;
  body.addEventListener('keydown', function(){
    const key = event.key;
  
    if (key === codes[index]){
      index ++;
      if (index === codes.length) {
      alert('You got dis!');
      index = 0;
      }
    } else {
    index = 0;
  }
  })
}