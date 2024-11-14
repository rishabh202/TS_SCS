// Getters and Setters 

class User{
    constructor(public name: string, public age: number){}
     
        getName(){
            return this.name;
        }

        setName(value: string){
            this.name = value; 
        }
    
}

let u1 = new User("harsh", 25);
u1.getName();
u1.setName("Rishika");

// This is the normal method, now we will use acc to TS
// Generally here in ts tu aisa kr skta hai ki put _ in front of the property that you know is going to be used in getters and setters.
// Then after using get whatever method that function will return we can use that as a property. i.e just ki we dont have to call it, value directly mil jaaegi.

class Students{
    constructor(public _name: string, public _rollno: number){}

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get rollno(){
        return this._rollno;
    }

    set setRollno(value: number){
        this._rollno = value;
    }
}

let s1 = new Students("Rohan", 21);

// This is getters and setters | not widely used.
