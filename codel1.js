const fs = require("fs");
const pad = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 2, 3, 4, 0, 0],
    [0, 5, 6, 7, 8, 9, 0],
    [0, 0, 10, 11, 12, 0, 0],
    [0, 0, 0, 13, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
var i = 3;
var j = 1;

fs.readFile("l2-2.txt", "utf8", function (e, d) {
    var data = d.split("\n");
    for (k = 0; k < data.length; k++) {
        var input = data[k];
        for (l = 0; l < input.length; l++) {
            step(input[l]);
        }
        console.log(pad[i][j]);
    }
});

function step(input) {
    switch (input) {
        case "U":
            if (pad[i - 1][j] != 0) {
                i--;
            }
            break;
        case "R":
            if (pad[i][j + 1] != 0) {
                j++;
            }
            break;
        case "D":
            if (pad[i + 1][j] != 0) {
                i++;
            }
            break;
        case "L":
            if (pad[i][j - 1] != 0) {
                j--;
            }
            break;
    }
}
