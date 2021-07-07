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

  document.body.addEventListener('keydown', function(event){
    console.log(event.key)
    let key = event.key

    if (key === codes[index]){
      index ++;

      if (index === codes.length){
        alert("KONAMI CODE");
        index=0
      }
    }else{
      index = 0
    }
  })
}
