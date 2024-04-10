import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-new-button',
  templateUrl: './cmm-new-button.component.html',
  styleUrls: ['./cmm-new-button.component.scss']
})
export class CmmNewButtonComponent {

  /**
   * Indica si el botón es de tipo outlined
   */
  @Input() outlined: boolean = false

}
