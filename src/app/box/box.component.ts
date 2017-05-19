import { Component, Input } from '@angular/core';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() box;
  @Input() selected;

  constructor() { }

}
