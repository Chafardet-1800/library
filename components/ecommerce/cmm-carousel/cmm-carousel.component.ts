import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-carousel',
  templateUrl: './cmm-carousel.component.html',
  styleUrls: ['./cmm-carousel.component.scss']
})
export class CmmCarouselComponent {

  @Input() carouselId: string = 'carousel'

  /**
   * Producto seleccionado
   */
  productSelected: any

  /**
   * Funcion para seleccionar el siguiente elemento del carrucel
   */
  nextElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    // const last: number = this.popularProducts.length - 1;

    // // selecciono la imagen que corresponde
    // const nextImg = ++this.productSelected;
    // if (nextImg > last) {
    //   this.selectTemplate(0);
    // }
    // else {
    //   this.selectTemplate(nextImg);
    // }
  }

  /**
   * Funcion para seleccionar el anterior elemento del carrucel
   */
  prevElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    // const last: number = this.popularProducts.length - 1;

    // // selecciono la imagen que corresponde
    // const nextImg = this.productSelected - 1;
    // if (nextImg < 0) {
    //   this.selectTemplate(last);
    // }
    // else {
    //   this.selectTemplate(nextImg);
    // }
  }

  /**
   * Funcion que selescciona el Templateo que se muestra en detalle segun la imagen que se seleccione
   * @param idImg
   */
  selectTemplate(idImg: number) {

    // Guardo el id de la imagen seleccionada
    this.productSelected = idImg;

  }

}
