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



function init() {
  
  let index = 0;

document.body.addEventListener('keydown',function(event){
  const key = event.key;
  
 if(codes[index] === key){
    index++;
    } else {
    index = 0;
    }
  if(index === codes.length){
   window.alert("Konami code entered");
    index = 0;

    }
  });
}







