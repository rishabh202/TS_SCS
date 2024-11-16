"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
function addPayment(val) { console.log(val); }
;
function getDetails() { }
// -x-
var Payment = /** @class */ (function () {
    function Payment(price) {
        this.price = price;
    }
    return Payment;
}());
exports.default = Payment;
// // Default means ki ek hi cheez export hogi
