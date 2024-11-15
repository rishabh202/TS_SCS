// Rest parameters 

// ... is called rest or spread operator

 // function ke parameter me agar ... lagaya toh app whn par saare diye gaye args ko ek hi variable as a array rkh rhe ho


function abcd(...args: number[]){

}

abcd(1,2,3,4,5,6,7,8,9,10,12,56,89,432)

//

function abc(val: string){

}
abc("12")

//

function sum(...arr: number[]){
console.log(arr);
}
sum(1,56,134,1521,545,152,21,21,451,23,465,3);

//
function friends(...frds: string[]){
   console.log(frds);
}
friends("abhay", "smith", "Rose", "Mary", "Lana");

// obv hum ek ek argument bhi daal skte the, like a is abhay and is string, b is smith and is also string, but ussey accha use rest parameter.


// Spread operator is like see
var array = [12,13,14,15];
var array1 = [...array];
// we can say clone hogya

// jb function ke parameter me bahut saare arguments bhje, aur uska ek array me lena h ek saath toh uska bolte h rest operator (...)
// and jb ek array ya object ko copy ya clone krna h toh usko spread operator bolte hai (...)

// Rest and Spread both are ... | Depends on use case


