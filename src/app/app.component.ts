import {
  Component,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  currentBox: BoxComponent = null;
  boxes = [];
  offsetX;
  offsetY;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detach();
  }

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
    let boxComponent = <BoxComponent> event.target['BoxComponent'];

    let box = boxComponent.box;
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;

    this.currentBox = boxComponent;

    boxComponent.selected = true;
    boxComponent.update();
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentBox !== null) {
      this.updateBox(
        this.currentBox,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
    }
  }

  mouseUp() {
    if (this.currentBox) {
      this.currentBox.selected = false;
      this.currentBox.update();
    }
    this.currentBox = null;
  }

  updateBox(boxRef, x, y) {
    boxRef.box.x = x;
    boxRef.box.y = y;
    boxRef.update();
  }
}
