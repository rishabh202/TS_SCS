// Like see Math is a method, so how can we use any properties of Math without new.
// so by using static we can use it without any instance.
// Static members
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.getRandomNumber = function () {
        return Math.random();
    };
    Hero.version = 0.23;
    return Hero;
}());
