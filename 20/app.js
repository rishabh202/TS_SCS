// Rest parameters 
// ... is called rest or spread operator
// function ke parameter me agar ... lagaya toh app whn par saare diye gaye args ko ek hi variable as a array rkh rhe ho
function abcd() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 56, 89, 432);
//
function abc(val) {
}
abc("12");
//
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 56, 134, 1521, 545, 152, 21, 21, 451, 23, 465, 3);
//
function friends() {
    var frds = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        frds[_i] = arguments[_i];
    }
    console.log(frds);
}
friends("abhay", "smith", "Rose", "Mary", "Lana");
// obv hum ek ek argument bhi daal skte the, like a is abhay and is string, b is smith and is also string, but ussey accha use rest parameter.
