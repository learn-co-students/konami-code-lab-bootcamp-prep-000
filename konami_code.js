const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

init();

function init() {
var i=0;
  document.addEventListener('keydown', (e)=>{
    if(i == code.length-1){ //if reach end of array
      alert("congratulatory message"); //alert
      console.log("Congrats");
      i=0;
    }
    console.log("index "   + i);
    console.log("e.which " e.which);
    console.log("code[i] " + code[i]);
    console.log("e.which || e.detail " +e.which || e.detail);

    console.log((e.which || e.detail) === code[i]);
      if((e.which || e.detail) === code[i]){ //if key val is equal to array
        i++;
      }else {
        i=0;
      }

  });
}
