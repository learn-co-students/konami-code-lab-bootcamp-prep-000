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
document.body.addEventListener('keydown', init);
  let index = 0;

  function init(e) {
  const keypress = e.key;
  if (keypress === codes[index]) {
    index++;
  
    if (index === codes.length) {
      alert("Hurray!");
      
      index = 0;
    }
  } else {
    index = 0;
  }
}
