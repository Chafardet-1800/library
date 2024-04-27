import { Component, Input } from '@angular/core';
import { CmmUtilsService } from 'src/app/common/services/utils.service';

@Component({
  selector: 'cmp-cmm-product-detail-v1',
  templateUrl: './cmm-product-detail-v1.component.html',
  styleUrls: ['./cmm-product-detail-v1.component.scss']
})
export class CmmProductDetailV1Component {

  @Input() product: any

  @Input() currency: string = 'REF.'

  /**
  * Indica si se muestran las cajitas con sombra
  */
  @Input() displayShadow: boolean = true

  toggleFavorite: boolean = false

  @Input() buttonFavoriteMode: 'text' | 'icon' = 'text'

  constructor(
    public utilsService: CmmUtilsService
  ) { }

}
