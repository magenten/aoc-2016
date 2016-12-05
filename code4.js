const fs = require("fs");
var _ = require("underscore");
var rot = require("rot");
var sum = 0;
var valid = [];

fs.readFile("l4-1.txt", "utf8", function (e, d) {
    var data = d.split("\n");
    for (i = 0; i < data.length; i++) {
        var x = data[i];
        var checksum = x.substr(x.length - 6, 5);
        var item = x.substring(0, x.length - 11).replace(/-/g, "");
        var sectorID = x.substr(x.length - 10, 3);
        var list = item.split("").sort();
        if (checksum === check(list)) {
            sum += parseInt(sectorID);
            valid.push(rot(item, parseInt(sectorID))+"--"+sectorID);
        }
    }
    console.log(valid);
    console.log("Sum: ",sum);
});


function check(input) {
    var el = [
        { 'l': 'a', 'c': 0 },
        { 'l': 'b', 'c': 0 },
        { 'l': 'c', 'c': 0 },
        { 'l': 'd', 'c': 0 },
        { 'l': 'e', 'c': 0 },
        { 'l': 'f', 'c': 0 },
        { 'l': 'g', 'c': 0 },
        { 'l': 'h', 'c': 0 },
        { 'l': 'i', 'c': 0 },
        { 'l': 'j', 'c': 0 },
        { 'l': 'k', 'c': 0 },
        { 'l': 'l', 'c': 0 },
        { 'l': 'm', 'c': 0 },
        { 'l': 'n', 'c': 0 },
        { 'l': 'o', 'c': 0 },
        { 'l': 'p', 'c': 0 },
        { 'l': 'q', 'c': 0 },
        { 'l': 'r', 'c': 0 },
        { 'l': 's', 'c': 0 },
        { 'l': 't', 'c': 0 },
        { 'l': 'u', 'c': 0 },
        { 'l': 'v', 'c': 0 },
        { 'l': 'w', 'c': 0 },
        { 'l': 'x', 'c': 0 },
        { 'l': 'y', 'c': 0 },
        { 'l': 'z', 'c': 0 }
    ];
    for (j = 0; j < input.length; j++) {
        for (k = 0; k < el.length; k++) {
            if (el[k].l === input[j]) {
                el[k].c++;
            }
        }
    }
    var sorted = el.sort(function (a, b) {
        if (a.c > b.c) {
            return -1;
        }
        if (a.c < b.c) {
            return 1
        }
        if (a.c == b.c) {
            if (a.l > b.l) {
                return 1;
            }
            if (a.l < b.l) {
                return - 1
            }
            if (a.l == b.l) {
                return 0;
            }
        }
    });
    var tmp = "";
    for (var l = 0; l < 5; l++) {
        tmp += sorted[l].l;
    }
    return tmp;
}