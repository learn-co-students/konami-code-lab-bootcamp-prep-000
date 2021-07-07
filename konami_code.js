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
  //your code here
 var index = 0;
  document.body.addEventListener("keydown", keyListener);
  
  function keyListener(e) {
    const key = e.key;
    console.log(key);
    if ( key === codes[index]) {
      index++;
      console.log(index);
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
}