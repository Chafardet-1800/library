import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-carousel',
  templateUrl: './cmm-carousel.component.html',
  styleUrls: ['./cmm-carousel.component.scss']
})
export class CmmCarouselComponent {

  /**
   * Id del carrusel
   */
  @Input() carouselId: string = 'carousel'

  /**
   * Indica si muestro los botones por defecto o no
   */
  @Input() customButtons: boolean = false

}
