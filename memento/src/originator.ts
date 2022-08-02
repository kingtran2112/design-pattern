import { Memento, InputMemento } from "./memento";

export class Originator {
  text: string;
  cursorPos: number;
  constructor(text: string, cursorPos: number) {
    this.text = text;
    this.cursorPos = cursorPos;
  }

  public setText(text: string) {
    this.text = text;
  }

  public setCursor(cursor: number) {
    this.cursorPos = cursor;
  }

  public save(): Memento {
    return new InputMemento(this.text, this.cursorPos);
  }

  public restore(m: Memento) {
    if (!(m instanceof InputMemento)) {
      console.warn(m instanceof InputMemento);
      console.warn(typeof m);
      throw new Error("Something wrong!");
    }

    this.text = m.getText();
    this.cursorPos = m.getCursor();
  }
}
