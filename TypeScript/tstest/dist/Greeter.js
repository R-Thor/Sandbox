"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        //test
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=Greeter.js.map