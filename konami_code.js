const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


var codeComplete=0

function init() {

  document.body.addEventListener('keydown', function(e){

    const key = parseInt(e.detail|| e.which);

    console.log(e.which); //outputs what key has been pressed

    if (key === code[codeComplete]){
      codeComplete++;
      if(codeComplete === code.length){
        alert("30 Extra Lives!");
        codeComplete=0;
      }

    } else{
      codeComplete=0;
    }
  })

}
