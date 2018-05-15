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
var i=0
function init() {
  // your code here
  console.log("hello")
  document.querySelector("body").addEventListener("keydown", function(e) {return checkcode(e)})
  console.log()
}

function checkcode(e){
  console.log(e.key)
  if (e.key == codes[i]){
    i++
    console.log(i)
  }
  else{
    i=0
  }
  if (i==10){
    alert("konami code engaged.... lets party baby") 
  }
}
