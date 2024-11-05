// readonly properties
// optional properties
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.changeName = function () {
        this.name = "yellow";
    };
    return User;
}());
var u1 = new User("Deepak");
u1.changeName();
