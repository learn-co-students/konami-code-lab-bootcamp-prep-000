const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var progress = 0;

  document.body.addEventListener('keydown', konamiChecker);

  function konamiChecker(e){
    var keypressed = parseInt(e.detail || e.which)

    if (keypressed === code[progress]) {
      progress ++;
      if (progress === code.length - 1) {
        eggExplosion()
        resetProgress()
      }
    }
    else {
      resetProgress()
    }
  }

  function resetProgress(){
    progress = 0;
  }

  function eggExplosion(){
    alert("You are awesome!")
    var ronSwansonApproves = document.createElement('img')
    ronSwansonApproves.src = "https://i.chzbgr.com/full/7434632960/hEB368744/"
    ronSwansonApproves.style.width = "100%";
    ronSwansonApproves.style.marginTop= "-20%";
    document.body.style.overflow = "hidden";
    document.body.appendChild(ronSwansonApproves)
}

}

init()
