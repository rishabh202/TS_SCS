// Parameter properties
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var u1 = new User("Harsh", 25, "male");
var u2 = new User("Latbataq", 18);
// The ? represents that the required field is now optional.
