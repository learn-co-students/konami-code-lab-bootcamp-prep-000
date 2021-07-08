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
     document.body.addEventListener('keydown', function(e){/// add a listener for keydown
        const key = parseInt(e.detail || e.which)///var key equals to
      if(key===40){/// if key equals to 40 create an alert
   alert()}
 })
}
