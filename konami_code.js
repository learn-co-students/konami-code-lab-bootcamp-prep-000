const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
];

function testEnd(){
  var tester = []
  for (var i = 0; i < codes.length; i++){
    tester.push(codes[i])
  }
  if (codes == tester){
    alert()
  }
}

var konamiHold= [];

function keyDowned(e){
  const key = e.key;
}

const input = document.querySelector('body')




function init() {
input.addEventListener('keydown', function(e) {
  konamiHold.push(e.key);
  
  
  if (e.key != codes[(konamiHold.length)-1]){
  konamiHold = [];  
  }
  
  if (e.key == 'a'){
    alert('Gradius EZ mode enabled')
  }

}
);
}
