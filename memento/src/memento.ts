export interface Memento {
  getName(): string;

  getDate(): string;
}

export class InputMemento implements Memento {
  private text: string;
  private cursor: number;

  constructor(text: string, cursor: number) {
    this.text = text;
    this.cursor = cursor;
  }

  getText(): string {
    return this.text;
  }

  getCursor(): number {
    return this.cursor;
  }

  getName(): string {
    return "InputMemento";
  }
  getDate(): string {
    return new Date().toISOString();
  }
}
