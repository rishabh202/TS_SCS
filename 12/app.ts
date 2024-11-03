// Access modifiers (public, private, protected)

class BottleMaker{
    constructor(public name: string){

    }
}

let b1 = new BottleMaker("Milton");
b1.name = "fofofrasdfsa";

// So in public u can change the property anywhere in the class and also inherit it outside.
// i.e either constructor me change kro ya usi class me dusre method me ya class k bahar k variable me. It does not matter for public.

//

class BottleMakers{
    constructor(private name: string){

    }
}

let b2 = new BottleMakers("Milton");
b2.name = "fofo";   // u cant do this since it is private

// But yk, even if the code is wrong acc to TS and it is giving error, but it will still execute acc to js, Bcz TS job is just to find erros and make the code typing better.

// For eg: if u check it in console, it has executed it and changed it. (check the corresponding js file)


class BottleMakersThird{
    constructor(private name: string){
    this.name = "helllo?"
    }

    changing(){
        this.name = "hy?"
    }
}

let b3 = new BottleMakersThird("Milton");
b3.changing();


// In private u can obv change in constructor and in a method inside class only. Outside nai.

// -x-


class metalBottleMaker extends BottleMaker{
    constructor(name: string){
        super(name);
    }

    getValue(){
        console.log(this.name);
    }
}

let m1 = new metalBottleMaker("Pink Milton");
m1.getValue();


// Now we can do this bcz the super class is public, agar usko private krde toh obv woh nai hoga. qki extends is bahar of the main class. 
