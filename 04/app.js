// Enums or Enumerations
// JavaScript doesn’t natively support enums like TypeScript does. However, similar behavior can be mimicked using objects.
var statusCodes;
(function (statusCodes) {
    statusCodes["ABONDED"] = "abonded status codes 500";
    statusCodes["NOTFOUND"] = "not found status codes 404";
})(statusCodes || (statusCodes = {}));
statusCodes.ABONDED;
