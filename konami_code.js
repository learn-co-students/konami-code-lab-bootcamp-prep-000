const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  let index = 0;

 document.body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail || e.which);
  console.log(key);
  
  if (key === code[index]) {    
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
      }
    } else {     
      index = 0;
      }
    });
  
}


//   const body = document.getElementsByTagName('body')[0];
  
//   body.addEventListener('keydown', function(e) {
//     console.log(e.which);
    
//     if (e.detail === code[i]) {
      
    
//         i++;
//         console.log('Talk to me nice');
        
//       if(i === code.length){
 
//         alert("Hurray!");
        
//           i=0;
          
//         }
//       }
   
//       else {
//           i=0; 
//     }
//   });
// }