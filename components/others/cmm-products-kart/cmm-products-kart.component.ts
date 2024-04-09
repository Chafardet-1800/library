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

}
