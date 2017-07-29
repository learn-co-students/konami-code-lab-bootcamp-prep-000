const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// let match = [];

function init() {
  let index = 0;
  document.addEventListener("keydown", function(e){
    let key = parseInt(e.detail || e.which); console.log(`key is ${key}`)

    // if(code[index] === e.which){ index++; //console.log("index is " + index)
    if(code[index] === key){ index++; //console.log("index is " + index)
      }
    else {index = 0; //console.log("index reset " + index)
    }
    if(index === code.length){
      // alert("Hurray!"); //console.log("code entered correctly. Setting index to 0")
      window.alert("Hurray!"); //console.log("code entered correctly. Setting index to 0")
      index = 0;
    }
  });
}

init();
