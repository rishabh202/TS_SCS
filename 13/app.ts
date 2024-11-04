// Access modifiers (protected)


// class BottleMaker{
//     public name =  "harsh";

// }

// class MetalBottleMaker extends BottleMaker{
//     public material = "metal";

//     changeName(){
//         this.name = "priya";
//     }
// }

// let b1 = new MetalBottleMaker();
// b1.changeName();

// -----


// class BottleMaker{
//      private name =  "harsh";

// }

// class MetalBottleMaker extends BottleMaker{
//     public material = "metal";

//     changeName(){
//         this.name = "Leela";
//     }
// }

// let b1 = new MetalBottleMaker();
// b1.changeName();


// -----


class BottleMaker{
     protected name =  "harsh";

}

class MetalBottleMaker extends BottleMaker{
    public material = "metal";

    changeName(){
        this.name = "Leela";
    }
}

let b1 = new MetalBottleMaker();
b1.changeName();

b1.name = "nisha";


// In protected, it is same as private, but if some class extends it then it can be used. That is the difference. Only if a class extends. Not outside.
// Obv since it is TS Execute toh hojaega but error.






