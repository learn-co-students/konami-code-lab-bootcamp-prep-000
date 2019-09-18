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
  let index = 0;

  document.body.addEventListener('keydown', function(e){
      const key = e.key;

      if (key === codes[index]) {
        index++;

        if (index === codes.length) {
          alert("Hurray!");

          index = 0;
        }
      } else {
        index = 0;
      }
  })

}
//init()  // you want this in file to test out in browser, but it needs to be removed when running the tests

// if the student has already run the tests, the tests will now likely interfere with the alert.
// the student needs to comment out everything in test file but init(), and should remove the init() in their
// own code file. may also need to refresh the page.
