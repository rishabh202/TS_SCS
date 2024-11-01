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


// Type aliases
// Intersection types 

