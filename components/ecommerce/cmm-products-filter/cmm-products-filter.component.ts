import { Component, Input } from '@angular/core';
import { CmmEcomSpecialFiltersConfig } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'cmp-cmm-products-filter',
  templateUrl: './cmm-products-filter.component.html',
  styleUrls: ['./cmm-products-filter.component.scss']
})
export class CmmProductsFilterComponent {

  @Input({ required: true }) config!: CmmEcomSpecialFiltersConfig

}
