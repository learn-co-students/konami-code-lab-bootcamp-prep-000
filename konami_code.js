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
  // your code here
  let index = 0

  document.body.addEventListener("keydown", (event) => {
    const key = event.key
    index = (key === codes[index])? index+=1 : 0;
    if (index === codes.length) {
      window.alert ("Congrats!");
      index = 0
    }
  })
}
