/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Directive,
  EmbeddedViewRef,
  Input,
  DoCheck,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

export class ClearNgforRow {
  constructor(
    public $implicit: any,
    public index: number
  ) {}

  get even(): boolean {
    return this.index % 2 === 0;
  }

  get odd(): boolean {
    return !this.even;
  }
}

@Directive({selector: '[appClearNgfor][appClearNgforOf]'})
export class ClearNgforDirective implements DoCheck {
  @Input() appClearNgforOf: any[];

  constructor(
    private _viewContainer: ViewContainerRef,
    private _template: TemplateRef<ClearNgforRow>
  ) {}

  @Input()
  set ngForTemplate(value: TemplateRef<ClearNgforRow>) {
    if (value) {
      this._template = value;
    }
  }

  ngDoCheck() {
    let oldLen = this._viewContainer.length;
    let newLen = this.appClearNgforOf.length;
    let minLen = Math.min(oldLen, newLen);

    for (var i = 0; i < minLen; i++) {
      let row = this.appClearNgforOf[i];
      let viewRef = <EmbeddedViewRef<ClearNgforRow>>this._viewContainer.get(i);
      viewRef.context.$implicit = row;
    }

    for (var i = oldLen; i < newLen; i++) {
      let row = this.appClearNgforOf[i];
      this._viewContainer.createEmbeddedView(
        this._template, new ClearNgforRow(row, i)
      );
    }

    for (var i = oldLen - 1; i >= newLen; i--) {
      this._viewContainer.remove(i);
    }
  }
}
