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
  let index = 0;
  
  document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName === codes[index])
  {
    index++;
  }
  else
  {
    index = 0;
  }
  if(index === codes.length)
  {
    alert('Hurray!');
    index = 0;
  }
});
}
