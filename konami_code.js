const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let count = 0;
  document.body.addEventListener("keydown", (e) => {
    if(e.location===code[count]){
      count++;
    }
    else{
      count=0;
    }
    if(count===10){
      alert("Congrats");
    }
  })

}