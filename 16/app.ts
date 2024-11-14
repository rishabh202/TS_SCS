// Getters and Setters 

class User{
    constructor(public name: string, public age: number){}
     
        getName(){
            return this.name;
        }

        setName(value: string){
            this.name = "value"; 
        }
    
}

let u1 = new User("harsh", 25);
u1.username