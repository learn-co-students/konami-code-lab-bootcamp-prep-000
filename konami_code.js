const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var init = function() {
    var i = 0;

    var getKey = function(e) {
        const key = parseInt(e.which || e.detail);

        if (code[i] === key) {
            i++;

            if (i === code.length - 1) {
                alert('Success!');
                i = 0;
            }
        } else {
            i = 0;
        }
    };

    document.body.addEventListener('keydown', getKey);
};
