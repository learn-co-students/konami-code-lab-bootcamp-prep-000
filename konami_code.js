const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var hist=[];
function init() {
  //log key
  function logg(f){
    hist.push(parseInt(f.detail || f.which))
    if (hist.length>code.length){
      hist.shift();
    }
    //console.log(`${hist.join(', ')}`)
  }
  var i=0;
  function equals(a,b){
    //console.log(`alengthis${a.length}, blengthis${b.length}`)
    if(a.length != b.length){
      //console.log('unequal length')
      return false
    } else{
      for (i=0; i< a.length; i++){
        if (a[i]!=b[i]){
          //console.log('false')
          return false
        }
        console.log(`${a.join(', ')} at length=${a.length}, and ${b.join(', ')}, at length=${b.length}`);
        console.log(`${a[9]===b[9]}`)
        
      }
      console.log('true')
      return true
    }
  }
  //check with konami code
  function check(d){
    alert.close
    logg(d)
    if(equals(code, hist)){
      console.log(`${hist.join(', ')}`)
      console.log('congrats!')
      alert('Congrats!')
      let index=0;
    }
  }
  //attach eventListener
  bb=document.querySelector('body')
  bb.addEventListener('keydown',check)
}
