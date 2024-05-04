import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CmmEcomProductCardDataModel } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'cmp-cmm-product-card-v2',
  templateUrl: './cmm-product-card-v2.component.html',
  styleUrls: ['./cmm-product-card-v2.component.scss']
})
export class CmmProductCardV2Component {

  @Input() product!: CmmEcomProductCardDataModel

  @Input() configStyle!: {
    priceColor: string
  }

  @Output() addProduct: EventEmitter<string> = new EventEmitter()

}
