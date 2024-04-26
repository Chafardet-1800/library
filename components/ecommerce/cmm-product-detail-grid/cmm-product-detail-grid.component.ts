import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-product-detail-grid',
  templateUrl: './cmm-product-detail-grid.component.html',
  styleUrls: ['./cmm-product-detail-grid.component.scss']
})
export class CmmProductDetailGridComponent {

  /**
   * Imágenes a mostrar
   */
  @Input({ required: true }) images: string[] = []

  currentImageIndex: number = 0

  constructor() { }

  scrollUp() {

  }

  scrollDown() {

  }

}
