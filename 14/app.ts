// readonly properties
// optional properties

class User{
    constructor(public readonly name:string){

    }

    changeName(){
        this.name = "yellow";
    }
}

let u1 = new User("Deepak");
u1.changeName();


// So if we dont want that to change, we can use readonly.
// But obv since it is TS, it will only show error, but the code will still execute.

