const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;
function init(kon) {
  const key = parseInt(kon.detail || kon.which);
  
  if (key === code[index]) {
    index++;
  }
  if (index === code.length) {
    alert ('Congrats, you did it!!');
    index = 0;
  } else { 
    index = 0;
  }
}

