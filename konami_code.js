const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function (e){
    console.log( e.which || e.detail );
    let num = (e.which || e.detail);
    const key = parseInt(num);
      if( code[index] === key){
          index++;
          if(index === code.length){
            alert("Congrats you won");
    }
  }else {
    index = 0;
  }
  })

  }
