const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  body.addEventListener('keydown',function(e){
    console.log(index)
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === code[index]){
      index = index + 1;
      if(index === code.length){
        alert('Holy Fuck You Did it!');
        index = 0;
      }
    } else{
      index = 0;
    }
  })
}