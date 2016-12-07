var fs = require("fs");
var regex = /\[.*?\]/g;
c = 0;

fs.readFile("l7.txt", "utf8", function (e, d) {
    var data = d.split("\n");
    for (var i = 0; i < data.length; i++) {
        var braq = [];
        do {
            m = regex.exec(data[i]);
            if (m) {
                braq.push(m[0]);
            }
        } while (m);

        flag = false;
        var tmp = testString2(data[i]);
        for (var j = 0; j < braq.length; j++) {
            data[i] = data[i].replace(braq[j], "123");
        }
        for (var j = 0; j < braq.length; j++) {
            
            
            if (tmp) {
                for (var x = 0; x < tmp.length; x++) {
                    if (braq[j].indexOf(tmp[x]) >= 0) {
                        flag = true;
                    }
                }
            }
        }
        flag ? c++ : null;
        console.log(data[i])
    }
    console.log(c);
});


function testString(s) {
    for (j = 0; j < s.length; j++) {
        if (s[j] === s[j + 1]) {
            if (s[j - 1] === s[j + 2] && s[j] != s[j - 1]) {
                return true;
            }
        }
    }
    return false;
}

function testString2(s) {
    var result = [];
    for (j = 0; j < s.length; j++) {
        if (s[j] === s[j + 2] && s[j] != s[j + 1]) {
            result.push("" + s[j + 1] + s[j] + s[j + 1]);
        }
    }
    if (result.length > 0) {
        return result;
    }
    return false;
}