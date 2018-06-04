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
function msg(m){
  console.log('msg func called')
  alert(m)
}
msg('start1')
msg('start2')
var ind = 0
function init(e) {
  if(true){  alert('test')}
  // your code here
  var key = e
  //.key
  //console.log(key)
  if(key===codes[ind]){
    ind++
    console.log(key+' is correct, ind now '+ind)
  }else{
      ind=0
      console.log(key+' is not correct, reset to '+ind)
  }
  //console.log(codes.length)
  if(parseInt(ind)===parseInt(codes.length)){
      console.log('correct code entered>>>')
      alert('goo')
      msg('alert') 
      ind=0
      console.log('ALERT')
    }else{
      console.log('not complete yet>>> ind: '+ind+' codes.length: '+codes.length)
    }
}

const listen = document

listen.addEventListener('keydown',function(e){
  //console.log(e.key)
  init(e.key)
  })
//listen.addEventListener('click',function(e){alert('click')})
