const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

  
  // Write your JavaScript code inside the init() function
  
  const page = document.body;
  let kCodeIndex = 0;
  
  page.addEventListener('keydown', function(e) {
    
    const key = parseInt(e.detail || e.which);
    
    if (key === code[kCodeIndex]) {
      kCodeIndex++;
      
      if (kCodeIndex === code.length) {
        alert("Hurray!");
        
        kCodeIndex = 0;
      }
    } else {
      kCodeIndex = 0;
    }
    
  });
}
    
    /* 
    if (e.which != code[kCodeIndex]) {
      kCodeIndex = 0;  // reset code index if keypress doesn't match necessary key
    }
    else if (e.which === code[kCodeIndex]) {
    // keypress *does* match necessary, so ???
    kCodeIndex++;
    }
    // have we matched all 10 keys?!?
    if (kCodeIndex === code.length) {
      alert('Hurray!');
      kCodeIndex = 0;
    }
  });
} */

init ();