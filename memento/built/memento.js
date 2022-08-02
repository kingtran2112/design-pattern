"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMemento = void 0;
var InputMemento = /** @class */ (function () {
    function InputMemento(text, cursor) {
        this.text = text;
        this.cursor = cursor;
    }
    InputMemento.prototype.getText = function () {
        return this.text;
    };
    InputMemento.prototype.getCursor = function () {
        return this.cursor;
    };
    InputMemento.prototype.getName = function () {
        return "InputMemento";
    };
    InputMemento.prototype.getDate = function () {
        return new Date().toISOString();
    };
    return InputMemento;
}());
exports.InputMemento = InputMemento;
