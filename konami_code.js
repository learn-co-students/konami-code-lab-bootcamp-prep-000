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

var count = document.createElement('div');
count.innerHTML = 'Hello, DOM!';
count.style.backgroundColor = '#ffffff';
document.body.appendChild(count)

function init() {
  
  let body = document.querySelector('body')
  let counter = 0

  body.addEventListener('keydown', function(e){
    if (e.key === codes[counter]){
      counter++
    }else{
      counter = 0
    }
    if (counter == codes.length){
      alert("acheivement unlocked")
    }
    count.innerHTML = toString(counter)
  });
}