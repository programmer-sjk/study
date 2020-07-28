var isDone = true;
var num = 3;
var alias = 'Seo Jeong Kuk';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple = ['hello', 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var r = Color.Red;
var g = Color.Green;
var b = Color.Blue;
console.log(r, g, b);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var r2 = Color2.Red;
var g2 = Color2.Green;
var b2 = Color2.Blue;
console.log(r2, g2, b2);
var notSure = 1;
console.log(notSure);
notSure = 'Seo Jeong Kuk';
console.log(notSure);
var list3 = [1, 'aa', 3, 'bb'];
console.log(list3);
function printString() {
    console.log('aa');
}
printString();
