const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  const keyhitlogger=[]
  document.body.addEventListener('keydown', function (event){
    keyhitlogger.push(parseInt(event.detail||event.which))
    if(code.length!==keyhitlogger.length){
      return false
    }
    for(i=0;i<keyhitlogger.length;i++){
      if(code[i]!==keyhitlogger[i])
          return false
    }
    alert('Yay congrats!')
  })
}
init()
