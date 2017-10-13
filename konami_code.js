const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 var index=0;
function init() {

  function findKonami(e){
    const key= parseInt(e.which||e.detail);
    if(key===code[index]){
        index++
        if(index===code.length){
            alert("You did it!!!")
             index=0;
        }
    }else{
        index=0;
    }
} document.addEventListener("keydown", findKonami)


}
