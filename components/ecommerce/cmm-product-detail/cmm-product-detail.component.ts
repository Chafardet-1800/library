import { Component, Input } from '@angular/core';
import { CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'cmp-cmm-product-detail',
  templateUrl: './cmm-product-detail.component.html',
  styleUrls: ['./cmm-product-detail.component.scss']
})
export class CmmProductDetailComponent {

  @Input() product!: CmmEcomProductDetailModelv2

  /**
   * Index de la imagen a mostrar
   */
  mainImageIndex: number = 0

  choosenVariant: number = 0

  choosenSize: number = 0

  /**
   * Configuración de apariencia
   */
  @Input() config: { button?: { customBorderRadius?: string, outlined?: boolean, customHeight?: string, customBg?: string }, colorBox?: { colorBoxRounded?: boolean, colorBoxBorder?: boolean } } = {
  }

  constructor() { }

  /**
   * Añade más unidades del producto
   */
  addProductUnit() {

    this.product.quantity += 1

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit() {

    this.product.quantity -= 1

    if (this.product.quantity < 1) {
      this.product.quantity = 1
    }

  }

  /**
   * Cambia la imagen que se está mostrando
   * @param next 
   */
  changeMainImageIndex(next: boolean) {

    if (next) {

      this.mainImageIndex += 1

      if (this.mainImageIndex >= this.product.images.length) {
        this.mainImageIndex = 0
      }

    } else {

      this.mainImageIndex -= 1

      if (this.mainImageIndex < 0) {

        this.mainImageIndex = this.product.images.length - 1

      }

    }

  }

}
