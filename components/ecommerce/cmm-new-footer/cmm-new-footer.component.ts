import { Component, Input } from '@angular/core';
import { whatsappIcon } from 'src/app/common/assets/images/images-routes';
import { CmmEcomFooterConfig } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'cmp-cmm-new-footer',
  templateUrl: './cmm-new-footer.component.html',
  styleUrls: ['./cmm-new-footer.component.scss']
})
export class CmmNewFooterComponent {

  whatsappIcon = whatsappIcon

  @Input() showBusinessQualities: boolean = true

  @Input() showTitle: boolean = true

  /**
   * Información a mostrar en el footer
   */
  @Input({ required: true }) config: CmmEcomFooterConfig = {
    businessInfo: {
      name: 'nature',
      direction: 'Av. Circumbalación del sol, calle 110 con av 62 de El Cafetal, Caracas',
      phone: '+58 0424-5555607',
      mail: 'atencion@nature.com'
    },
    products: [
      'Ropa',
      'Calzado',
      'Accesorios',
      'Damas',
      'Caballeros'
    ],
    aboutUs: [
      'Quienes somos',
      'Ventas al mayor',
      'Ofertas'
    ]
  }

  // icons = icons

}
