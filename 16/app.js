// Getters and Setters 
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
var u1 = new User("harsh", 25);
u1.getName();
u1.setName("Rishika");
// This is the normal method, now we will use acc to TS
// Generally here in ts tu aisa kr skta hai ki put _ in front of the property that you know is going to be used in getters and setters.
// Then after using get whatever method that function will return we can use that as a property. i.e just ki we dont have to call it, value directly mil jaaegi.
var Students = /** @class */ (function () {
    function Students(_name, _rollno) {
        this._name = _name;
        this._rollno = _rollno;
    }
    Object.defineProperty(Students.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "rollno", {
        get: function () {
            return this._rollno;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "setRollno", {
        set: function (value) {
            this._rollno = value;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
var s1 = new Students("Rohan", 21);
// This is getters and setters | not widely used.
