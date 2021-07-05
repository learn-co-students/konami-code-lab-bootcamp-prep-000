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
  const body = document.querySelector('body')

  let index = 0;
  
  function onKeyDownHandler(e) {   
     
     const key = e.key;
     
     if (key === codes[index]) {
        index++;
    
      if (index === codes.length) {
        alert('Congratulations, you correctly entered the Konami Code!');
      
        index = 0;
    }
  } 
  else {
   index = 0;
  }
  }
  body.addEventListener('keydown', onKeyDownHandler)
}

