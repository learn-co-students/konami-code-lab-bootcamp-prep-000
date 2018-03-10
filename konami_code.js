const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  
  
  var keying =[];
  
  document.addEventListener('keydown',(e)=>{

    if(e.location == code[keying.length]){
      keying.push(e.location);
      
      if(keying.length === code.length){
      keying.splice(0);
      alert("Hurray, you crack the code!");
      }
    }
    else{
      
      keying.splice(0);
    }
  });
}
