  //const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]//[u, u, d, d, l, r, l, r, b, a]
  const code = [38, 40]//[up, down]
  var entered = []
  var index = 0

  function init() {
    const body = document.querySelector('body')//selects the body portion
    body.addEventListener('keydown', function(e){
      //var entered = []
      const keyhit = parseInt(e.detail || e.which)//assigns num value of e to key
      entered.push(keyhit)

      for (let i = 0; i < code.length; i++){
        if (entered[i] === code[i]){//if first value is equal to first code iterate index
          index++
          }
        if (index === code.length){//if index equals to length of konami code output "hurray"
          alert("Hurray!")
          index = 0
          }
        }
      index = 0//sets index to 0 if wrong key is struck meaning itll never reach length of code
    })
  }
