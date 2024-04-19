import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-products-kart',
  templateUrl: './cmm-products-kart.component.html',
  styleUrls: ['./cmm-products-kart.component.scss']
})
export class CmmProductsKartComponent {

  /**
   * Productos en el carrito
   */
  @Input() products: any[] = []

  /**
   * Prefactura
   */
  @Input() preBill: any = []

  ngOnInit() {
    console.log(this.products);
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

}
