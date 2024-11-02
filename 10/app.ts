// constructors 
// Ek aisi machine jo ki produce kr rhi hai, final consumeable product is called constructor.
// for eg: bottle -> x; machine which makes bottle -> yes
// for eg: biscuits -> x; machine which makes biscuits -> yes

class BottleMaker {

    constructor(public name: string, public price: number) {

    }
}
let b1 = new BottleMaker("Milton", 1200);


class HumanMaker{
    age=0;
    constructor(public name: string, public isFemale: boolean, public country: string = "India"){

    }
}

// let f1 = new HumanMaker("Tanvi", true, "india", "pakistan");
let f2 = new HumanMaker("Tanvi", true, "Australia");
let f3 = new HumanMaker("Tanvi", true, "india");
let f4 = new HumanMaker("Tanvi", true);

// So accordinly understand all, like see we defined age outside constructor, so its compulsory. Unlike country
// By default variables in constructor are public only.


class Music{
    constructor(public name: string, public artist: string, public thumbnail: string = "thumbnail.png", public length: number, public free: boolean){
     if(!thumbnail){
        this.thumbnail = "thumbnail.png";
     }
    }
}

let m1 = new Music("Psycho killer", "Talking Heads", "" , 1230, false);
let m2 = new Music("Aadmi chutiya hai", "Chutiya Aadmi", "chutiya.jpg" , 24, true);


// You can also change it like:
m2.length = 500;
// ~ly etc
// But this aese changes should not happen which we will learn further


// class Musiccc{
//     constructor(public name: string, public artist: string, public thumbnail: string, public length: number, public free: boolean){
//      if(!thumbnail){
//         this.thumbnail = "thumbnail.png";
//      }
//     }
// }

// let m3 = new Musiccc("Psycho killer", "Talking Heads", "" , 1230, false);




// class Musizk{
//     constructor(public name: string, public artist: string, public length: number, public free: boolean, public thumbnail: string = "thumbnail.png",){

//     }
// }

// let m2 = new Musizk("Psycho killer", "Talking Heads", 1230, false);


// -x-

// Access modifiers (public, private, protected)
// readonly properties
// optional properties
// parameter properties
// Getters and setters
// Static members
// Abstract classes and methods 


