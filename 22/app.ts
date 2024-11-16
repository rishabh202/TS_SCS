// Generics
// Generic functions 
// Generic interfaces
// Generic classes


// We want to make a function which will accept any value and print it

function logger(a: string){
     
    // a.
}

logger("hey");
// logger(21);
// logger(false);
// logger(null);

// But it should accept any value, not only string.

function loge(a: any){
     
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

function abcd<T>(a: T){

}

abcd<string>("hey");
abcd<number>(21);
abcd<boolean>(false);

//

function abc<T>(a: T, b: string, c: number){

}

abc<boolean>(true, "pop", 45);

// This were generic functions.
// What's the use case?

function log<T>(val: T){
    console.log(val);
}

log<string>("Hellow");

// So by this, instead of doing console log we can do simply log.
// Like we can do functions like this. yeh toh basic example hai.

log<number>(21);
// and we can if we want, skip the <> here while calling, but we have to write it while defining.
log(false);   // TS automatically knows that.


// This was generic fuctions 
// 
// Generic Interfaces
 
interface halwa<T>{
    name: string;
    age:  number;
    key: T;

}
function xyz(obk: halwa<number>){
    //    obk.key.
}

xyz({name: "popo", age: 56, key: 96 })


// this was generic interfaces 

// Generic classes 

class BottleMaker<T>{
    constructor(public key: T){}
}

let b1 = new BottleMaker("heyee");  // TS automatically infered that ki type is string. Even tho hum define bhi kr skte hai.
log(b1);
let b2 = new BottleMaker<number>(89);
log(b2);

console.log(b1, b2);

// so this is possible bcz of generic classes
// -x-

// But there's a catch: see from this link: https://youtu.be/lVzb6pmel_E?si=Y_Cyay0tvBu80AIV&t=12788


function pqrs<T>(a: T, b: T): T{
    //   return a;  // correct 
      return b;    // correct 
    //   return "what"  // Error
}
pqrs<string>("pop", "popo");


// See anything written in "" is called string literal, which means ki literally likh dia hai.
// and here above we are telling ki return type is generic. so hence cant return string literal. TS will give error.
// WE can do that, but by other methods. like below

function ab<T>(a: T):T{
    return "hey" as T
}
ab<string>("done");

// like this above or also like below

function xy<T>(a: T):T{
    return <T>89;
}
xy<number>(56);