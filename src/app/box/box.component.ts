import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
  @Input() box;
  @Input() selected;

  constructor() { }

}
