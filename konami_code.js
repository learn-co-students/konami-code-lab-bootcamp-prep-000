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
  var t = [];
  for (var i = 0; i < codes.length; i++) {
    t[i] = document.body.addEventListener('keydown',function(event){event.key})
  }
  if(t === codes){
    return alert('Congs!')
  }else{
    document.body.addEventListener('keydown',function(e){e.key})
  }
}
