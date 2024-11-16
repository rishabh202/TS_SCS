"use strict";
// Modules
// Exporting and importing modules
// Default exports 
Object.defineProperty(exports, "__esModule", { value: true });
var payment_1 = require("./payment");
(0, payment_1.addPayment)(21);
// This is basic import and export of files/modules
// Default exports
// Default means ki ek hi cheez export hogi
var payment_2 = require("./payment");
var p = new payment_2.default(36900);
var q = new payment_2.default(900);
console.log(p, q);
