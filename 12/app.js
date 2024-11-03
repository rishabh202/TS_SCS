// Access modifiers (public, private, protected)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton");
b1.name = "fofofrasdfsa";
// So in public u can change the property anywhere in the class and also inherit it outside.
// i.e either constructor me change kro ya usi class me dusre method me ya class k bahar k variable me. It does not matter for public.
//
var BottleMakers = /** @class */ (function () {
    function BottleMakers(name) {
        this.name = name;
    }
    return BottleMakers;
}());
var b2 = new BottleMakers("Milton");
b2.name = "fofo"; // u cant do this since it is private
// But yk, even if the code is wrong acc to TS and it is giving error, but it will still execute acc to js, Bcz TS job is just to find erros and make the code typing better.
// For eg: if u check it in console, it has executed it and changed it. (check the corresponding js file)
var BottleMakersThird = /** @class */ (function () {
    function BottleMakersThird(name) {
        this.name = name;
        this.name = "helllo?";
    }
    BottleMakersThird.prototype.changing = function () {
        this.name = "hy?";
    };
    return BottleMakersThird;
}());
var b3 = new BottleMakersThird("Milton");
b3.changing();
// In private u can obv change in constructor and in a method inside class only. Outside nai.
// -x-
var metalBottleMaker = /** @class */ (function (_super) {
    __extends(metalBottleMaker, _super);
    function metalBottleMaker(name) {
        return _super.call(this, name) || this;
    }
    metalBottleMaker.prototype.getValue = function () {
        console.log(this.name);
    };
    return metalBottleMaker;
}(BottleMaker));
var m1 = new metalBottleMaker("Pink Milton");
m1.getValue();
