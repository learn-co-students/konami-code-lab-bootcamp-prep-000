const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// ASCII码 对应 方向键左上右下，B A
let index = 0;
function init() {
  var body=document.querySelector('body');
  var keycodes = "";
  body.addEventListener('keydown', function(e){

    // keycodes += e.keyCode;  //记录每次摁下的键值
    // keycodes = e.which;
    keycodes = parseInt(e.detail || e.which || e.location);
      var c = code.join('').slice(0,2*index + 2); //对应当前项的字符串序列
  //  console.log(index);     //键摁对的对应项
    // console.log(keycodes);
  // console.log(code[index]);
  console.log(e.keyCode);
  console.log(e.detail)
  console.log(e.which)
  console.log(e.location)

    if (keycodes == code[index]){     //顺序对应,index加1, 否则 重置index和keycodes
        // alert('you did it!');
        index++;
        if (index == code.length) {alert('you get it ');
        index = 0;
        keycodes = '';
    }
    }else {
        index = 0;
        keycodes = '';
    }
  })
}
init();
