const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// body.addEventListener('click', function(event) {
//   alert('Hooray, you don\'t suck so bad')
// }) //TEMPLATE

let index = 0;

function init() {

  document.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);

   if (key === code[index]) {
     index++;

   if (index === code.length) {
     alert("Hooray, you don\'t suck so bad!");

      index = 0;
    }
  } else {
    index = 0;
}
})
}
