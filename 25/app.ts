// Type Guards And TypeScript Utility Types
// Using typeof and instanceof 
// Partial, Required, Readonly

// type guards is basically type narrowing i.e by using if-else we can be clear about the type

function abcd(arg: string | number){
//   arg.   // here we wil get only those methods which are common to both, string and number. So lets overcome this.
}

abcd(21);
abcd("21");

// simple like this lol

function pqrs(arg: string | boolean | any){
    if(typeof arg === "string"){
        //  arg.
     // here all string ke method and similarly
     return "string";
    }
    if(typeof arg === "boolean"){
        return "boolean"

    }else {
        throw new Error('Nothing hehehihi');
    }
}
console.log(pqrs("dfda"));
console.log(pqrs(false));
// console.log(pqrs(89)); // error obv; Nothing hehehihihi wala



// This was type guards
// -x- 


// Type guards- using typeof and instanceof

class TvRemote{
    switchTvOff(){
        console.log("Switching off TV")
    }
}

class CarRemote{
    switchCarOff(){
        console.log("Switching off Car")
    }

}

const tv = new TvRemote();
const car = new CarRemote();

function swtichOff(device: TvRemote | CarRemote){
    if(device instanceof TvRemote){
        device.switchTvOff();
    }
    else if(device instanceof CarRemote){
        device.switchCarOff();
    }
   
}

// -x-

// so this video ended here.
// Remaning is practice of this with DOM Manipulation.

// -x-