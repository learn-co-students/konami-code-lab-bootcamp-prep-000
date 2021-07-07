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


function onKeyDownHandler(e, index) {
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("KONAMI");
    }
  }
  else {
    index = 0;
  }
}


function init() {
  // your code here
  let index = 0;
  document.body.addEventListener("keydown", (event) => {
    const key = event.key;
    
    if (key === codes[index]) {
      ++index;
      if (index === codes.length) {
        alert("KONAMI");
      }
    }
    else {
      index = 0;
    }
    
    
    //onKeyDownHandler(event, index);
  });
}

//init();