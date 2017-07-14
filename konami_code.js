//(function() {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function init()
  {
    let index = 0;
    const body = document.querySelector('body')
    body.addEventListener('keydown', function(e) {
      //console.log(e.which)
      const a = parseInt(e.detail || e.which);

      if (a === code[index])
      {
        index++;
        if (index === code.length)
        {
          alert("Yeah! You pressed all ten of the keys in the correct order!");
          index = 0;
        }
      }
      else
      {
        index = 0;
      }
    })
  }
  //init();
//})();
