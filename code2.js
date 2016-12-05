const fs = require("fs");

var x = 0;
var y = 0;

var path = [];

fs.readFile("l1-1.txt", "utf8", function (e, d) {
    var data = d.split(", ");
    for (i = 0; i < data.length; i++) {
        turn(data[i].substr(0, 1));
        walk(data[i].substr(1, data[i].length));
    }
    console.log(path);
});

var direction = "N"



function turn(turn) {
    switch (direction) {
        case "N":
            turn == "L" ? direction = "W" : direction = "O";
            break;
        case "O":
            turn == "L" ? direction = "N" : direction = "S";
            break;
        case "S":
            turn == "L" ? direction = "O" : direction = "W";
            break;
        case "W":
            turn == "L" ? direction = "S" : direction = "N";
            break;
    }
}

function walk(steps) {
    steps = parseInt(steps);
    switch (direction) {
        case "N":
            for (var z = 0; z < steps; z++) {
                var pos = x + "/" + y;
                if (path.indexOf(pos) != -1) {
                    console.log("hit---------------");
                    console.log(pos);
                    return;
                } else {
                    path.push(pos);
                }
                y--;
            }
            break;
        case "O":
            for (var z = 0; z < steps; z++) {
                var pos = x + "/" + y;
                if (path.indexOf(pos) != -1) {
                    console.log("hit---------------");
                    console.log(pos);
                    return;
                } else {
                    path.push(pos);
                }
                x++;
            }
            break;
        case "S":
            for (var z = 0; z < steps; z++) {
                var pos = x + "/" + y;
                if (path.indexOf(pos) != -1) {
                    console.log("hit---------------");
                    console.log(pos);
                    return;
                } else {
                    path.push(pos);
                }
                y++;
            }
            break;
        case "W":
            for (var z = 0; z < steps; z++) {
                var pos = x + "/" + y;
                if (path.indexOf(pos) != -1) {
                    console.log("hit---------------");
                    console.log(pos);
                    return;
                } else {
                    path.push(pos);
                }
                x--;
            }
            break;
    }
}