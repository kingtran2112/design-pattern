"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Originator = void 0;
var memento_1 = require("./memento");
var Originator = /** @class */ (function () {
    function Originator(text, cursorPos) {
        this.text = text;
        this.cursorPos = cursorPos;
    }
    Originator.prototype.save = function () {
        return new memento_1.InputMemento(this.text, this.cursorPos);
    };
    Originator.prototype.restore = function (m) {
        if (!(m instanceof memento_1.InputMemento)) {
            throw new Error("Something wrong!");
        }
        this.text = m.getText();
        this.cursorPos = m.getCursor();
    };
    return Originator;
}());
exports.Originator = Originator;
