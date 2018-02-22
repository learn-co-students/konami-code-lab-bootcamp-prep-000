const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//

// function arraysEqual(arr1, arr2) {
//     if(arr1.length !== arr2.length)
//         return false;
//     for(var i = arr1.length; i--;) {
//         if(arr1[i] !== arr2[i])
//             return false;
//     }

//     return true;
// }

function init() {
  // Write your JavaScript code inside the init() function

  // var pressed = []

  let index = 0;


  document.body.addEventListener('keydown', function(e) {

    // add to arr
    // limit arr to 10 items
    // if arr matches desired arr, success
    // pressed.push(parseInt(e.which))
    // // console.log(e.which)

    // last10 = pressed.slice(Math.max(pressed.length - 10, 1))

    // if (arraysEqual(last10, code)) {
    // 	alert("konami")
    // }

    const key = parseInt(e.detail || e.which);
    console.log(key)

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
  })
}

init()
