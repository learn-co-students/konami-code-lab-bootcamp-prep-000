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
  let counter = 0
  let count = document.createElement("div")
  count.innerHTML = toString(0)
  document.querySelector('body').appendChild(count);
  document.querySelector('body').addEventListener('keydown', function(e){
    if (e.key === codes[counter]){
      counter ++
    }else{
      counter = 0
    }
    if (counter == codes.length){
      alert("acheivement unlocked")
    }
    count.innerHTML = toString(counter)
  })
}