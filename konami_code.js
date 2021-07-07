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
  let count=0
  const main = document.querySelector('body')
  main.addEventListener('keydown', function(event) {
    // console.log(event.key)
    if (event.key === codes[count]){
      count++;
    } else {
      count = 0
    }
    if (count === codes.length){
      alert("YOU DID IT!")
      count = 0
    }
  })
}

