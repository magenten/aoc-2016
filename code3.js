const fs = require("fs");

var invalid = 0;
var valid = 0;

fs.readFile("l3-1.txt", "utf8", function (e, d) {
    var data = d.split("\n");
    for (k = 0; k < data.length; k+=3) {
        var t1 = data[k].split("*");
        var t2 = data[k+1].split("*");
        var t3 = data[k+2].split("*");
        var tri1 = [t1[0],t2[0],t3[0]];
        var tri2 = [t1[1],t2[1],t3[1]];
        var tri3 = [t1[2],t2[2],t3[2]];
        if (!check(tri1[0],tri1[1],tri1[2])) {
            console.log(tri1);
            invalid++;
        } else {
            valid++;
        }
        if (!check(tri2[0],tri2[1],tri2[2])) {
            console.log(tri2);
            invalid++;
        } else {
            valid++;
        }
        if (!check(tri3[0],tri3[1],tri3[2])) {
            console.log(tri3);
            invalid++;
        } else {
            valid++;
        }
    }
    
    console.log("invalid ",invalid);
    console.log("valid: ",valid);
});

function check(a,b,c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    return ((a+b>c)&&(a+c>b)&&(b+c>a));
}