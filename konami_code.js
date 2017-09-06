const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var cheat = []
function init() {
  // Write your JavaScript code inside the init() function

document.body.addEventListener('keydown', konamii)
}

function konamii(e)
{
  var cc = 0
  cc=parseInt(e.which || e.detail)
  console.log(cc)
  if(cheat.length==0)
  {
    if(cc==code[0])
    {
      cheat.push(cc)
      console.log(cheat)
    //  console.log(cc)
    }
  }
  else
  {
    if(code[cheat.length]==cc)
    {
      cheat.push(cc)
      console.log(cheat)
    }
    else {
      cheat=[]
    }
  }
  if(cheat.length===code.length)
  {
    alert('Hurray!')
    cheat=[]
  }
}
