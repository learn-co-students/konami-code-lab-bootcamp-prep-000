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

let i = 0;

function init(){

   var keyStroke = document.body.addEventListener('keydown', (event) => {

        if (event.key == codes[i]){
        i++;

        if (i == codes.length){
          alert('Hooray!')
        }
  } else {
    i = 0;
  }
});
}
