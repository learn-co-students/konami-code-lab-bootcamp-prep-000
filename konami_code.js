const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  // Write your JavaScript code inside the init() function
function init() {
var i = 0
document.body.addEventListener("keydown", function(e){
var key = parseInt(e.which||e.detail||e.location)
 
        if (key === code[i]) {
            i++;
            if (i === code.length) {
                alert("Congratulations!!");
                i = 0;
            }
        } else {
            index = 0
        }
});

}
