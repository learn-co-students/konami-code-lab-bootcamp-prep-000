const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
document.body.addEventListener('keydown', function (e){
    const key = parseInt(e.which || e.which);
    if (key === code[index]) {
      //console.log(key);
        index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    }else {
      index = 0;
    }
})
}
