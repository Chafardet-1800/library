import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CmmProductCardV2Component } from '../cmm-product-card-v2/cmm-product-card-v2.component';
import { CmmEcomProductCardDataModel, CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'cmp-cmm-products-kart',
  templateUrl: './cmm-products-kart.component.html',
  styleUrls: ['./cmm-products-kart.component.scss']
})
export class CmmProductsKartComponent {

  /**
   * Productos en el carrito
   */
  @Input() products: CmmEcomProductDetailModelv2[] = []

  /**
   * Prefactura
   */
  @Input() preBill: any = []

  @Input() config: {
    customButtonsBorderRadius?: string
  } = {}

  constructor(
    private router: Router
  ) {

  }

  /**
   * Añade más unidades del producto
   */
  addProductUnit(product: any) {

    product.quantity += 1

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit(product: any) {

    product.quantity -= 1

    if (product.quantity < 1) {
      product.quantity = 1
    }

  }

  /**
   * Elimina el producto del carrito
   */
  removeFromKart(product: any) {

    // xd
    this.products.splice(this.products.indexOf(product), 1)

  }

  /**
   * Me lleva de nuevo a la vista de productos
   */
  navigateBack() {

    this.router.navigate(['/Productos'])

  }

}
