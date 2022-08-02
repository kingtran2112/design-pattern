import { Originator } from "./originator";
import { Memento } from "./memento";

export class Caretaker {
  originator: Originator;
  history: Memento[];
  index: number;
  constructor(originator: Originator, history: Memento[]) {
    this.originator = originator;
    this.history = history;
    this.index = 0;
  }
  public backup() {
    this.history[this.index] = this.originator.save();
    this.index++;
  }

  public undo() {
    if (this.index < 1) {
      return;
    }
    this.originator.restore(this.history[--this.index]);
  }

  public redo() {
    if (this.index >= this.history.length) {
      return;
    }
    this.originator.restore(this.history[this.index++]);
  }
}
