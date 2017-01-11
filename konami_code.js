const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


const body = document.body;
function init(e) {
// keep track of index outside of the event handler
  }

  body.addEventListener('keydown',  (e)=>{
    var index = 0;
    const key = parseInt(e.detail || e.which);
    for(var i = 0; i<code.length; i++){
      if(code[i]===key){
        index++;
        alert("so far so good");
      }
    }
    if(index === code.length){
      alert("you got it right! yay")
    }

  });
