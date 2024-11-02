// constructors 
// Ek aisi machine jo ki produce kr rhi hai, final consumeable product is called constructor.
// for eg: bottle -> x; machine which makes bottle -> yes
// for eg: biscuits -> x; machine which makes biscuits -> yes
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isFemale, country) {
        if (country === void 0) { country = "India"; }
        this.name = name;
        this.isFemale = isFemale;
        this.country = country;
        this.age = 0;
    }
    return HumanMaker;
}());
// let f1 = new HumanMaker("Tanvi", true, "india", "pakistan");
var f2 = new HumanMaker("Tanvi", true, "Australia");
var f3 = new HumanMaker("Tanvi", true, "india");
var f4 = new HumanMaker("Tanvi", true);
// So accordinly understand all, like see we defined age outside constructor, so its compulsory. Unlike country
// By default variables in constructor are public only.
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        if (thumbnail === void 0) { thumbnail = "thumbnail.png"; }
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "thumbnail.png";
        }
    }
    return Music;
}());
var m1 = new Music("Psycho killer", "Talking Heads", "", 1230, false);
var m2 = new Music("Aadmi chutiya hai", "Chutiya Aadmi", "chutiya.jpg", 24, true);
// You can also change it like:
m2.length = 500;
// ~ly etc
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
