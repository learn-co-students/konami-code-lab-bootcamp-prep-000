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

function init() {
  document.body.addEventListener("keydown", function onKeyDownHandler(e){
    const key = e.key
    
    if (key === codes[index]){
      console.log(key)
      index++;
      
      if (index === codes.length){
        alert("Hurray, achievment unlocked!")
        index = 0
      }
    } else {
      e.preventDefault()
      index = 0
    }
  })
}
