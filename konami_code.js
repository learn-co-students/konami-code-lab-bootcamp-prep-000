const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const body=document.querySelector('body')
  var index=0
  body.addEventListener('keydown',function(e){
    const key=parseInt(e.which || e.detail)
    while(index<code.length){
    if(key === code[index]){
      alert("Congrats! You did it")
      index=code.length
    }
    else
      index++
  }
})

}
