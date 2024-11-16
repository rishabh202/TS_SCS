// Modules
// Exporting and importing modules
// Default exports 

import { addPayment, getDetails} from "./payment"

addPayment(21);

// This is basic import and export of files/modules


// Default exports
// Default means ki ek hi cheez export hogi

import Payment from "./payment";
let p = new Payment(36900);
let q = new Payment(900);
console.log(p, q);
