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

  /**
   * Configuración del carrusel de bootstrap
   */
  @Input() carouselConfig: {
    bsTouch?: boolean,
    bsPause?: boolean
  } = {
      bsPause: false,
      bsTouch: true
    }

  /**
   * Indica si muestro los indicadores
   */
  @Input() showIndicators: boolean = false

  /**
   * Indica si estoy en un teléfono
   */
  isMobile: boolean = false

  ngOnInit() {

    this.testMobile()

  }

  /**
   * Detecta si estoy en teléfono
   */
  testMobile() {

    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    this.isMobile = regex.test(navigator.userAgent);

  }

}
