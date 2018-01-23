const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  let index = 0;
  document.body.addEventListener('keydown',function(e){

    if(e.which===code[index]){
      index++;
      console.log(`index: ${index}`)
    }else{
      i = 0;
    }
    console.log(e.which);

    if(index===10){
      alert("Congratulations!");
      index = 0;
    }

  })



}

init()
