import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-product-card',
  templateUrl: './cmm-product-card.component.html',
  styleUrls: ['./cmm-product-card.component.scss']
})
export class CmmProductCardComponent {

  @Input() data: any

  choosenVariant: number = 0

}
