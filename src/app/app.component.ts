import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  ngOnInit() {
    for (let i = 0; i < 4200; i++) { // generate 4200 random boxes
      this.boxes.push({
        id: i,
        x: Math.floor(Math.random() * 500),
        y: Math.floor(Math.random() * 500)
      });
    }
  }

  mouseDown(event) {
    let id = Number(event.target.getAttribute('dataId'));
    let box = this.boxes[id];
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(
        this.currentId,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
    }
  }

  mouseUp() {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    let box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
