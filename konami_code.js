
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
  // Write your JavaScript code inside the init() function	  
  
  let index = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert("Hurray");
          index = 0;
      }
    } else {
      index = 0;
    }
  }
  }