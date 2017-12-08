const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // your code here
  document.addEventListener('keydown', function(e) {
  const key = parseInt(e.which || e.detail);
  console.log(key);
  if(key === code[index]){
    if(index === code.length - 1){
      alert("You did it!");
    }
    index++;
  } else {
    index = 0;
  }
})
}
