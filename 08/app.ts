// Extending interfaces

interface User {
    name: string,
    password: number,
    email: string
}
interface Admin extends User {
    admin: boolean;
}

function abc(obj: Admin) {
    // obj. 
}



// see two interfaces of the same name are merged and one interface is formed of them. It does not overwrites but merges
interface xyz {
    name: string;
}
interface xyz {
    email: string;
}


function a(obj: xyz) {
    // obj.  
}


// Introduction to Type aliases

type sankhya = number; 
let p: sankhya;


type value = string | number | null;
let q: value;

function we(obj: value){

}

we("ram");
we(6);
// we(true);   // error obv
we(null);



// Intersection types 
type Employee = {
    name: string,
    email: string
}

type HR =  Employee & {
    getDetails(user: string): void
}

function interview(o: HR){
    // o.
}


// Difference between interfaces and types?
// First difference is that u cant merge types unlike interfaces

// type po = string; 
// type po = number;   Error unlikes interfaces

interface po{
    name: string;
}
interface po{
    age: number;
}

// another difference is that ki type deals with data types and interface deals with creating the shape of the object.
