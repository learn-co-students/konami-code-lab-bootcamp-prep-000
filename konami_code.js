const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0; // index of code

  function onKeyDownHandler(e){

    console.log("e.location > " + e.location)
    const key = parseInt(e.which || e.location );
    //debugger
    console.log(" key > "+ key)
    console.log(code[index])
    if (key === code[index]){
      index++;
      console.log("index :" + index)

      if (index === code.length){
        //console.log("Konami Code entered!")
        window.alert("Konami Code entered!");
        index = 0;
      }
    }

    else{
      index = 0
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
