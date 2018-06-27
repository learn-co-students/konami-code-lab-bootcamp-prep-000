const code = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
];


let index = 0;

 function init(){
  window.addEventListener('keydown', onKeyDownHandler)
 }
 
 
function onKeyDownHandler(e) {

  const key = e.which;

 
  if (key === code[index]) {
    index++;
     console.log(index)
      console.log(code.length)
   
    if (index === code.length) {
      window.alert('Hurray!')
      console.log("hurray!")
      index = 0;
    }
  } else {
    index = 0;
  }
}