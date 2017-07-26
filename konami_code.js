const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let ind=0;
  const inp=document.querySelector('body');
  inp.addEventListener('keydown', function(pr){
    var key=parseInt(pr.which)

    if(key===code[ind]){
      ind++;

      if(ind===code.length){
        window.alert("DZIAŁA LOL");
        ind=0;


      }
    } else{
      ind=0;
    }

  })
}
