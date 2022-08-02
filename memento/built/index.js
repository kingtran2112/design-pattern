"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var originator_1 = require("./originator");
var caretaker_1 = require("./caretaker");
var inputField = document.querySelector("input");
var originator = new originator_1.Originator(inputField.value, 0);
var caretaker = new caretaker_1.Caretaker(originator, []);
console.log(originator);
console.log(caretaker);
