// Type Guards And TypeScript Utility Types
// Using typeof and instanceof 
// Partial, Required, Readonly
// type guards is basically type narrowing
function abcd(arg) {
    //   arg.   // here we wil get only those methods which are common to both, string and number. So lets overcome this.
}
abcd(21);
abcd("21");
// simple like this lol
function pqrs(arg) {
    if (typeof arg === "string") {
        //  arg.
        // here all string ke method and similarly
        return "string";
    }
    if (typeof arg === "boolean") {
        return "boolean";
    }
    else {
        throw new Error('Nothing hehehihi');
    }
}
console.log(pqrs("dfda"));
console.log(pqrs(false));
console.log(pqrs(89));
// -x- 
