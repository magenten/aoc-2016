Array.prototype.rotate = (function () {
    var push = Array.prototype.push,
        splice = Array.prototype.splice;

    return function (count) {
        var len = this.length >>> 0,
            count = count >> 0;
        count = ((count % len) + len) % len;
        push.apply(this, splice.call(this, 0, count));
        return this;
    };
})();

var fs = require("fs");
var x = [];

for (var i = 0; i < 6; i++) {
    x.push([]);
    for (var j=0; j<50; j++) {
        x[i].push(" ");
    }
}


fs.readFile("l8.txt", "utf8", function (e, d) {
    var data = d.split("\n");
    for (var i = 0; i< data.length; i++) {
        if (data[i].indexOf("rect")!= -1) {
            var tmp = data[i].match(/\d+x\d+/)[0].split("x");
            console.log("rect: "+tmp);
            rect (x, parseInt(tmp[1]), parseInt(tmp[0]));
        } else if (data[i].indexOf("row")!= -1) {
            var tmp = data[i].match(/\d+/g);
            console.log("row: "+tmp);
            rotateRow(parseInt(tmp[0]), parseInt(tmp[1]));

        } else if(data[i].indexOf("column")!= -1) {
            var tmp = data[i].match(/\d+/g);
            console.log("column: "+tmp);
            rotateCol(parseInt(tmp[0]), parseInt(tmp[1]));
        }
        console.log(i);
        printMatrix(x);
    }
    count();
});
/*printMatrix(x);
rect(x, 2,3);
printMatrix(x);
rotateRow(0,6);
printMatrix(x);
rect(x, 1,1);
printMatrix(x);
rotateCol(0,2);
printMatrix(x);*/

function printMatrix(a) {
    for (i = 0; i < a.length; i++) {
        var s = "";
        for (j = 0; j < a[i].length; j++) {
            s += a[i][j] + " ";
        }
        console.log(s);
    }
    console.log();

}

function trans(array) {
    var newArray = array[0].map(function (col, i) {
        return array.map(function (row) {
            return row[i]
        })
    });
    return newArray;
};

function rect(a, y, _x) {
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < _x; j++) {
            a[i][j] = "#";
        }
    }
}


function rotateRow(n, by) {
    x[n] = x[n].rotate(-by);
}

function rotateCol(n, by) {
    x = trans(x);
    x[n] = x[n].rotate(-by);
    x = trans(x);
}
function count() {
    var c = 0;
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x[i].length; j++) {
            x[i][j] == "#" ? c++ : null;
        }
    }
    console.log("count: ", c);
}