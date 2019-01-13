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

var input  = document.querySelector('input');

input.addEventListener('keydown',function(e){
 // if(e.which===71){
  //  return e.preventDefault();
    console.log(e.which);
 // }
})

let divs = document.querySelectorAll('div');


function bubble(e){
  e.stopPropagation(); //forces program to print value of div clicked and not all
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true)
  
}

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
   document.body.addEventListener('keydown',function(e){
      var key = parseInt(e.which || e.detail);
      var index=0;
      if(key === code[index]){
      index++
      
     if(index === code.length){
       alert("Hurray");
       index=0;
     }
  }
     else{
       console.log(e.which);
       index=0;
     }
})
}

init();

 init();

    function init() {

        var index = 0;
        const getElement = document.querySelector('body');

        getElement.addEventListener('keydown', function(e) {
            if (code[index] === e.which || code[index] === e.detail) {
                index++;

                if (index === code.length) {
                    alert("CHEAT EXECUTED!!");
                    index = 0;
                }
            } else {
                index = 0;
            }
        })
    }