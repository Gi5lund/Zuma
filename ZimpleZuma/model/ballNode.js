export class Node {
  constructor() {
    this.value = this.setRandomColor();
    this.prev = null;
    this.next = null;
  }
  setRandomColor() {
    const colors = ["red", "blue", "green", "yellow"];
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  }
}