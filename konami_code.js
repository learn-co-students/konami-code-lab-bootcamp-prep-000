const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
debugger;

function init() {

  var index = 0

  document.body.addEventListener( 'keydown', function(e) {

    const key1 = parseInt(e.detail)
    const key2 = parseInt(e.which)

    if ( (key1 === code[index]) || (key2 === code[index]) )
    {
      index++

      if (index === code.length - 1)
      {
        alert("YOU DID IT!")
        index = 0
      }

    }
    else
    {
      index = 0
    }
  } )

}  //  End of init
