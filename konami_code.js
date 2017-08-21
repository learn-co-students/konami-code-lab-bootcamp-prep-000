const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown',keyListen);
  document.body.contra = new Checker(code);
}

function keyListen(e){
  document.body.contra.checkKey(e.detail || e.which);
}

function Checker(array){
  var index=0, arr=array;
  return {
    checkKey:function(num){
        if(parseInt(num)===arr[index]){
          index++;
        }
        else{
          index=0;
        }
        if(index===(arr.length-1)){
          alert("+30 lives");
        }
    }
  }
}
