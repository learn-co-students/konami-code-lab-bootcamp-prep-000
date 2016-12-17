const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here

  var codesSeen = 0;
  var bodyElem = document.querySelector('body');

  var preElem = document.createElement('pre');

  bodyElem.appendChild(preElem)

  function debugMsg(msg) {
    var newNode = document.createTextNode(msg+"\n");
    preElem.appendChild(newNode)
  }

  debugMsg('DEBUG:');

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    debugMsg(`Got key: ${key}, e: ${JSON.stringify(e)}`);
    debugMsg(`codesSeen: ${codesSeen}, expecting ${code[codesSeen]}`);

    if (key === code[codesSeen]) {
      debugMsg('\tKey matched');
      codesSeen++;
      debugMsg(`codesSeen: ${codesSeen}, code.length: ${code.length}`);

      if (codesSeen == code.length) {
        debugMsg('match complete')
        alert("YOU DID IT!")
        codesSeen = 0;
      }
    } else {
      codesSeen = 0;
    }
  }

  bodyElem.addEventListener('keydown',onKeyDownHandler);
}
