"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
var Caretaker = /** @class */ (function () {
    function Caretaker(originator, history) {
        this.originator = originator;
        this.history = history;
        this.index = 0;
    }
    Caretaker.prototype.save = function () {
        this.history.push(this.originator.save());
        this.index++;
    };
    Caretaker.prototype.undo = function () {
        this.originator.restore(this.history[this.index]);
        this.index--;
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
