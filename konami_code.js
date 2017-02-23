const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  var index = 0
  // your code here

  document.addEventListener('keydown', function(e){

    var key =parseInt(e.detail || e.which);
  if (key === code[index]){
    index++
    if (index ===code.length){
      alert ("you did it!")


    }

  }
  else{

    index = 0;

  }


})
}
