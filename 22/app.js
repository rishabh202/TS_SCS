// Generics
// Generic functions 
// Generic interfaces
// Generic classes
// We want to make a function which will accept any value and print it
function logger(a) {
    // a.
}
logger("hey");
// logger(21);
// logger(false);
// logger(null);
// But it should accept any value, not only string.
function loge(a) {
    // a.
}
loge("hi");
loge(21);
loge(false);
loge(null);
// But by putting any we are not getting intelligence. It does not makes use of TS.  i.e by Putting a: any, type checking stops
// 
// So here the use of generics comes
// i.e hum ek function ko use krte waqt bta skte h ki, function argument ko kis trh se treat kre.
function abcd(a) {
}
abcd("hey");
abcd(21);
abcd(false);
//
function abc(a, b, c) {
}
abc(true, "pop", 45);
// This were generic functions.
// What's the use case?
function log(val) {
    console.log(val);
}
log("Hellow");
// So by this, instead of doing console log we can do simply log.
// Like we can do functions like this. yeh toh basic example hai.
log(21);
// and we can if we want, skip the <> here while calling, but we have to write it while defining.
log(false); // TS automatically knows that.
function xyz(obk) {
    //    obk.key.
}
xyz({ name: "popo", age: 56, key: 96 });
// this was generic interfaces 
// Generic classes 
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("heyee"); // TS automatically infered that ki type is string. Even tho hum define bhi kr skte hai.
log(b1);
var b2 = new BottleMaker(89);
log(b2);
console.log(b1, b2);
// so this is possible bcz of generic classes
