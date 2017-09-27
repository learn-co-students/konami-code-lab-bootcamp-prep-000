var i = 0;
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//const input = document.body;
 function init(){
   let res = 0;
document.body.addEventListener('keydown', function(e) {
  console.log(e.which)
  const num = parseInt(e.which || e.detail);
if (code[i] === num){
  i++
  if (i === code.length){
    i=0;
    alert("Bingo!");
  }
}

else{
  i = 0;
}

})
}
