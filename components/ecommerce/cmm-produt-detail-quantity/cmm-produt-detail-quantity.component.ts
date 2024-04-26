import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cmp-cmm-produt-detail-quantity',
  templateUrl: './cmm-produt-detail-quantity.component.html',
  styleUrls: ['./cmm-produt-detail-quantity.component.scss']
})
export class CmmProdutDetailQuantityComponent {

  /**
   * Cantidad de productos
   */
  @Input() quantity: number = 0

  /**
   * Emite el evento de la cantidad de productos modificada
   */
  @Output() currenQuantity: EventEmitter<number> = new EventEmitter()

  /**
   * Añade más unidades del producto
   */
  addProductUnit() {

    this.quantity += 1

    this.currenQuantity.emit(this.quantity)

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit() {

    this.quantity -= 1

    if (this.quantity < 1) {
      this.quantity = 1
    }

    this.currenQuantity.emit(this.quantity)

  }

}
