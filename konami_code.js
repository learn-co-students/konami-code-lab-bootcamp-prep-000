//38 - u
//40 - d
//39 - r
//37 - l
//66 - b
//65 - a

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

var index = 0;

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)



function onKeyDownHandler(e) {
  const key = e.key;
  console.log(e.key)
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Done!!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}
