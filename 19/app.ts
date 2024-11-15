// Functions
// Functions types
// Optional and default parameters
// Reset parameters
// Overloads

// Functions are obv when we want to use certain codes only when needed at certain points.

function xyz(){

}

function abcd():string{
    return "hey";
}

function abc():void{

}

// Now suppose if a function accepts callback function so what?

function ab(name: string, cb: (value: string) => void){
  // void hai as qki return toh kn kr raha hai

}

ab("Roshan", (value: string)=>{
    console.log("value")
})

//

function abcdef(name: string, age: number, cb: (arg: string)=> void){
  cb("hey");
}

abcdef("Harsh", 21, (arg: string)=>{
    console.log("hello")
})


// Very simple above code, suppose console log me hum arg hi pass kre bs toh obv arg hi aajaeega.

function abcdefg(name: string, age: number, cb: (arg: string)=> void){
  cb("hey");
}

abcdefg("Harsh", 21, (arg: string)=>{
    console.log(arg);
})


// This above was functions and function types .
// Now optional and default parameters

function pqrs(name: string, age: number, gender?: string){
             console.log(name, age, gender);
}

pqrs("Prem", 56, "male");
pqrs("random", 36,);

// The ? denotes that ki that parameter is optional, however we can also put a default value to it.
// Bt note that ki agr optional hai toh simultaneously hum uski default value nai de skte.

function xyza(name: string, age: number, gender: string = "not to be disclosed"){
   console.log(name, age, gender);
}

xyza("pop", 43, "female");
xyza("popi", 34);