// Any, unknown, void and more
// how to declare types: | but ts automatically sets the datatype with the value assigned to it.
var a;
a = 63;
// a = 'zi';  // error obv
// if we dont set any type before then it will be considered as any 
var z;
// but make sure ki variable ka type "any" na ho, qki fir ts ka purpose hi khtm ho jaaega
z = 56;
z = 'arua';
// This is the problem in ts if we let the datatype be any.
z.toLowerCase();
// but if
var q;
q = 56;
q = 'arua';
// q.toLowerCase();  // error obv
if (typeof q === "string") {
    q.toLowerCase();
}
// we have to check with unknown
// -----
// void, u have to say what the function returns. if return none then its void
function abc() {
    return true;
}
function xyz() {
    console.log('abx');
}
// -----
// null
var r;
// r = 369; // error obv
// Union 
var s;
s = 'shukla';
s = null;
// s =56; // error
// also rmbr ':' is used to set the datatype, while '=' is used for assigning the value to the declared variable and the the variable is declared using let cont or var, but obv let is preferred.
// -----
var c;
// -----
function pqrs() {
    while (true) {
    }
}
pqrs();
console.log(pqrs);
