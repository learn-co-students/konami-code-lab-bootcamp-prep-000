const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function init(){
newArray=[]
let a=0
const oye=document.querySelector('body')
oye.addEventListener('keydown', function(e){ 
  const key=e.key
    if(key===codes[a]){
      a++;
    
      if (a==codes.length){
        alert('GREAT JOB! HAHAHA you did it!')
      a=0;  
      }
    }else{
      a=0;  
      }
    }
  )}