import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-product-detail-v1',
  templateUrl: './cmm-product-detail-v1.component.html',
  styleUrls: ['./cmm-product-detail-v1.component.scss']
})
export class CmmProductDetailV1Component {

  @Input() product: any

}
