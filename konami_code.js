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

// attach event listening to document.body
//check for 'keydown' events
//if the user enters this special code, pressing all ten of the key in the correct order,
// alert()
//else if they press a key out of sequence or key that's not a part of the Konami code, then don't alert() and keep listening for the the keydowns


function init() {
  let index = 0;
  document.body.addEventListener('keydown',
  function(event) {
    let key = event.key;
    if (key === codes[index]) {
      console.log(index++);
      if (index == codes.length) {
        window.alert('You win.');
        index =0;
      }
    }else {
      index = 0;
    }
    // alert
    //logic code to check the list
  })
}
