// This keyword

// Basically to access something inside class, which is not in the parent thing,  u need to use this

class Abcd{
    name = "Harsh";

    changeSomeStuff(){
        console.log(this.name);
        this.changeSomeMoreStuff;

    }

    changeSomeMoreStuff(){
        console.log("hey");
        let a = 65;
        a;  // obv here no need for this, cz a issi me hai.

    }
}

class bottleMaker{
    constructor(public name: string){
        this.name = name;
    }
}

let b1 = new bottleMaker("milton");


//

/*
class bottleeMaker{
    constructor(public name: string){
    }
}

let b2 = new bottleMaker("milton");

*/
