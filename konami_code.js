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
const key = [38,38,40,40,37,37,39,39,66,65]
function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e){
    if (e.key === codes[index]){
      index++;
  } else {
    index =0;
  }
    if (index === codes.length){
    window.alert("Please Help!");
    index = 0;
  }
})
}
