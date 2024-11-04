// Access modifiers (protected)
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
var BottleMaker = /** @class */ (function () {
    function BottleMaker() {
        this.name = "harsh";
    }
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    MetalBottleMaker.prototype.changeName = function () {
        this.name = "Leela";
    };
    return MetalBottleMaker;
}(BottleMaker));
var b1 = new MetalBottleMaker();
b1.changeName();
b1.name = "nisha";
// In protected, it is same as private, but if some class extends it then it can be used. That is the difference. Only if a class extends. Not outside.
// Obv since it is TS Execute toh hojaega but error.
