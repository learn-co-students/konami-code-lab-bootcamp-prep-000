const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e){
    const ky = parseInt(e.detail || e.which);
      for(let i=0; i< code.length; i++){
        if(ky === code[i]){
          alert("Congrats boy");
        }
        else{
          console.log("Oops");
        }
      }
  });
}