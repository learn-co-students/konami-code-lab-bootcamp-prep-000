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
  let i = 0
  document.body.addEventListener("keydown", (e) => {
    let key = ( codes[i] === e.key ) ? ++i : false
    if (i === codes.length){
      alert("Gottem")
      i = 0 
    }
  })
}