const codes=[38,38,40,40,37,39,37,39,66,65];
function init(){
  let done=0;
  let nd=document.querySelector('body');
  nd.addEventListener('keydown',function(e){ 
    
    let k=e.which;
    //console.log(k);
    if(k===codes[done]){
        done++;
      //console.log(done);
    
      if(done===codes.length){
      alert('Congrats!');
      done=0;
      }      
    }
    else {
      done=0;
    }
  });

}
//mistakes I did: (1)for loop inside eventlistener--not agood idea,the coach said. (2)Then if keyvalues are used--use e.which method. If key names are used--use e.key method. I used the keyvalues and e.key.(3)For this browser,alert could not be triggered. Code was perfectly fine after correcting above mistakes. So a codeblock in the indexTest.js file was made a comment using/*---*/
  
