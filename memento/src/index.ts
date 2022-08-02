import { Originator } from "./originator";
import { Caretaker } from "./caretaker";

let inputField = document.querySelector("input");

let originator = new Originator(inputField.value || "", 0);
let caretaker = new Caretaker(originator, []);
console.log(originator);
console.log(caretaker);

inputField.onkeyup = () => {
  let value = inputField.value;
  caretaker.backup();
  originator.setText(value);
  console.log(originator);
  console.log(caretaker);
};

let undo = document.querySelector("button#undo") as HTMLButtonElement;
undo.onclick = () => {
  caretaker.undo();
  inputField.value = originator.text;
  console.log(originator);
  console.log(caretaker);
};

let redo = document.querySelector("button#redo") as HTMLButtonElement;
redo.onclick = () => {
  caretaker.redo();
  inputField.value = originator.text;
  console.log(originator);
  console.log(caretaker);
};
