var c = require("crypto");

var input = "uqwqemis";
var hsh = c.createHash("md5").update(input).digest("hex");

var count = 0;
var count2 = 0;
while (count2 < 15) {
    hsh = c.createHash("md5").update(input + count).digest("hex");
    count++;
    if (hsh.indexOf("00000") == 0) {
        console.log(hsh);
        count2++;
    }
}
