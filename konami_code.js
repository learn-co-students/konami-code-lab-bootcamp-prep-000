const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

init();

function init() {

  document.addEventListener('keydown', (e)=>{
    console.log(e.key);
    // for(i=0;i<e.key.length; i++){
    //   if(e.key == code[i]){
    //     i++;
    //   }else{
    //     i--;
    //   }
    // }

  });
  // Write your JavaScript code inside the init() function

}
