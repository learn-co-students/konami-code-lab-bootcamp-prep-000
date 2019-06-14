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

let index = 0;

function isThisIt(c) {
  const key = c.key;

  if (key === codes[index]) { 
    index++;
//    log.textContent += index;
//    log.textContent += " " + c.key + " ";
    if (index === codes.length) 
    {
//        log.textContent += 'success!';
        window.alert("Success!");
        index = 0;
    }
  } 
  else { 
    index = 0;
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown', isThisIt);
}

