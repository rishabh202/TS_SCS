// Functions
// Functions types
// Optional and default parameters
// Reset parameters
// Overloads
// Functions are obv when we want to use certain codes only when needed at certain points.
function xyz() {
}
function abcd() {
    return "hey";
}
function abc() {
}
// Now suppose if a function accepts callback function so what?
function ab(name, cb) {
    // void hai as qki return toh kn kr raha hai
}
ab("Roshan", function (value) {
    console.log("value");
});
//
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("Harsh", 21, function (arg) {
    console.log("hello");
});
// Very simple above code, suppose console log me hum arg hi pass kre bs toh obv arg hi aajaeega.
function abcdefg(name, age, cb) {
    cb("hey");
}
abcdefg("Harsh", 21, function (arg) {
    console.log(arg);
});
// This above was functions and function types .
// Now optional and default parameters
function pqrs(name, age, gender) {
    console.log(name, age, gender);
}
pqrs("Prem", 56, "male");
pqrs("random", 36);
// The ? denotes that ki that parameter is optional, however we can also put a default value to it.
// Bt note that ki agr optional hai toh simultaneously hum uski default value nai de skte.
function xyza(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
xyza("pop", 43, "female");
xyza("popi", 34);
