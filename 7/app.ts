// Interfaces and type aliases 
// Defining interfaces 
// Using interfaces to define object shapes

function abx(a: number, d: string){
  //  a.  here only number ke method aaenge and likewise
 // d.
};

interface User {
    name: string;
    age: number;
    password: number;

}

function getUserData(obj: User){
// obj.age. 

};


// getUserData({});
getUserData({name: "Rishabh", age: 89, password: 369});
// getUserData({name: "Rishabh", password: 369});   giving error bcz ts wants to know.

// Check video for better understanding


// getUserData({name: "rohan", age: 21, password: 2323, email: "rishabh@gmail.com"})

interface student {
   name: string,
   rollno: number, 
   gender?: string,
}

function studentData(obj: student){
    // obj. 
};

studentData({name: "rish", rollno: 89, gender: "male"});
studentData({name: "rish", rollno: 89});


// --x--


