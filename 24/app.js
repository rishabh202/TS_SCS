// Type assertions 
// Type assertion means to tell TS that what is the type of a particular thing.
// You do this when you know more than TS ki uss cheez ka value kya hai
var a = 12;
// since any type hai, we wont be getting any intelligence
// so for that
console.log(a.length);
// (a as string).
// (a as number).
// or also like
// (<string>a).  // this 
// (<number>a).   // this
// This is type assertion
// -x-
// Below is typecasting 
var z = Number("12");
// 12 is twelve but "12" is not twelve but 1&2 1-2 i.e two diff characters
console.log(z);
console.log(typeof z);
var x = String(369);
console.log(x);
console.log(typeof x);
// -x-
