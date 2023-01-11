const { neq } = require("semver");

module.exports = function reverse (n) {
let str = n.toString();
if (n < 0) return reverse(-n);
let reverseStr = str.split("").reverse().join("");

 return reverseStr;

}
