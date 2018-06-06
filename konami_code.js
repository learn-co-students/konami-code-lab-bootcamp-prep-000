const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

                                  
function init() {
  let codeIndex = 0

  document.body.addEventListener("keydown", function (keyPressed) {
    const key = keyPressed.key

    if (codes[codeIndex] === key) {
       codeIndex = ++codeIndex
                                  }
     else {
       codeIndex = 0
          }

    if (codeIndex === codes.length) {
      window.alert("Code entered!");
      codeIndex = 0
                                    }
    }
                            )
              }
