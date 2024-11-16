// Type assertions & Type casting & non-null assertion operator


// Type assertion means to tell TS that what is the type of a particular thing.
// You do this when you know more than TS ki uss cheez ka value kya hai


let a: any = 12;
// since any type hai, we wont be getting any intelligence
// so for that

   console.log((a as string).length);


// (a as string).
// (a as number).

// or also like

// (<string>a).  // this 
// (<number>a).   // this

// This is type assertion

// -x-

// Below is typecasting 

let z = Number("12");   
// 12 is twelve but "12" is not twelve but 1&2 1-2 i.e two diff characters
console.log(z);
console.log(typeof z);

let x = String(369);
console.log(x);
console.log(typeof x);

// -x-


// non-null assertion operator
// If we put ! in the end of any variable then we can be sure that our variable is atleast not null or undefined. Like below
//  variable!

let p: null | number | undefined;
p = 63;

// p! se ye gurantee milegi ki woh null ya undefined toh nai h, so it helps in intelligence.

// p!.

// -x-