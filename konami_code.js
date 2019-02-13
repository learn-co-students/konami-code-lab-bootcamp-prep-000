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
  var index = 0
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(e){
    console.log(e.key)
    if (e.key === codes[index]){
      index++
      console.log(index)
      if (index === codes.length){
        console.log('code matched')
        alert('Success!');
      }
    } else {
      index = 0
    }
  })
}
//init()
