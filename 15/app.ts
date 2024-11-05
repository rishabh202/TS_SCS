// optional properties

class User{
    constructor(public name: string, public age: number, public gender?: string){
    
    }
}

let u1 = new User("Harsh", 25, "male");
let u2 = new User("Latbataq", 18)

// The ? represents that the required field is now optional.

//

// parameter properties

class Student{
    constructor(public name: string, public age: number, public rollno: number){

    }
}

// parameter properties simply means to declare and initialized those variable in the constructor itself.
// else it can also be done like this, but obv above is better

class Employee{
    public name;
    public salary; 
    public designation; 
    constructor(name: string, salary: number, designation: string){
        this.name = name;
        this.salary = salary;
        this.designation = designation;
    }
    
}

// obv the first one is much better.