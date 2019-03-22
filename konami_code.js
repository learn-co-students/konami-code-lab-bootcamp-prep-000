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


function init () {
  // Initializing a count of commands done in the correct sequence
  console.log('Hello');
  let index = 0;
  
  document.body.addEventListener('keydown', function (e) {
    //Code below attempts to match the user input with the correct character sequence
  
    const key = e.key;
    
  // First if statement adds to the count on the condition that it's the correct character
    
    if (key === codes[index]) {
      index ++;
  
  // Second if statement initializes an alert once the index matches the length of the codes array, i.e. the cheat code was entered fully and in the correct order
      
      if (index === codes.length) {
        alert ('Contra Code');
        
  // Resets the count once the cheat code was executed      
        index = 0;
      }
    } else {
      
  // Arbitrary statement to do nothing if there is no input    
      
      index = 0;
    }
  });
  
  
}







