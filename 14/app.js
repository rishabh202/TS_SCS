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
// So if we dont want that to change, we can use readonly.
// But obv since it is TS, it will only show error, but the code will still execute.
