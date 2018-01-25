const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  console.log(code)
  let index = 0;
  document.body.addEventListener('keydown',function(e){
    console.log(`e.location: ${e.location}`);

    if(e.location===code[index]){
      index++;
      console.log(`index: ${index}`)

      if(index===code.length){
        window.alert("Congratulations!");
        index = 0;
        console.log(`index: ${index}`)
      }
    }else{
      i = 0;
    }





  })
}

init()
