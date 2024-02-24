export class Node {
  constructor() {
    this.value = this.setRandmColor();
    this.prev = null;
    this.next = null;
  }
  setRandmColor() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  }
}