// Function overloading
// Function overloading means ki you can keep the name of functions same. 

//

// function abcd(){}
// function abcd(){}


//

// Function overloading in TS 

function abcd(a: string):void;
function abcd(a: string, b: number):number;

function abcd(a: any, b?: any){
    if(typeof a === "string" && b === undefined ){
        console.log("First wala hai obv");
    }
    if(typeof a === "string" && b === "number"){
        return 369;
    }
    else throw new Error("Something is wrong");
}


abcd("232");
abcd("232", 9);
// abcd(9);  // error obv


// This was introduction to function overloading