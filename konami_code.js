const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
 var index = 0;
document.body.addEventListener('keydown', function (e){
  const key = parseInt(e.detail || e.which);
  console.log(key);
  
  if (key === code[index]){
    index++;
    console.log(key);
    if (index === code.length){
      alert ("Congratulations!!!");
      index = 0;
    }
  } else {
    index = 0;
  }
  e.preventDefault();
})
}