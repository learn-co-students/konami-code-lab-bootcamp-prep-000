const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;


    function onKeyDownHandler(e){

      const key = parseInt(e.detail || e.which);
      console.log("Key entered: " + key);

      if (key === code[index]) {
        index++;
        console.log("Index is " + index)
        if (index === code.length) {
          alert("You did it!");
          index = 0;
        }
      } else {
        index = 0;
      }

    }


    document.body.addEventListener('keydown', onKeyDownHandler);



}
