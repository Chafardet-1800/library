import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-new-carousel',
  templateUrl: './cmm-new-carousel.component.html',
  styleUrls: ['./cmm-new-carousel.component.scss']
})
export class CmmNewCarouselComponent {

  /**
   * Items del carrusel
   */
  carouselItems = document.getElementsByClassName('carousel_item')

  /**
   * Cantidad de espacio a scrollear
   */
  scrollAmount: number = 300

  /**
   * Indica si se muestran botones personalizados
   */
  @Input() customButtons: boolean = false

  /**
   * Indica si el reset del carrusel es instant o smooth
   */
  @Input() instantReset: boolean = true

  /**
   * Id del carrusel
   */
  @Input({ required: true }) carouselId: string = ''

  /**
   * Indica si los botones son clickeables
   */
  buttonsActive: boolean = true

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    let parent = document.getElementById(this.carouselId) as HTMLElement

    if (window.innerWidth < 567) {

      this.scrollAmount = (parent.scrollWidth - parent.clientWidth) / (this.carouselItems.length - 1)

    } else {
      this.scrollAmount = 300
    }

    //* Regreso al primer item
    parent.scrollTo({
      top: 0,
      left: - (this.carouselItems.length - 1) * this.scrollAmount,
      behavior: this.instantReset ? 'instant' : 'smooth'
    })

  }

  constructor() { }

  ngAfterViewInit() {

    let parent = document.getElementById(this.carouselId) as HTMLElement

    if (window.innerWidth < 567) {

      this.scrollAmount = (parent.scrollWidth - parent.clientWidth) / (this.carouselItems.length - 1)

    }

  }

  /**
   * Me lleva al item siguiente
   */
  nextItem() {

    if (!this.buttonsActive) {
      return
    }

    //* Desactivo el botón por un tiempo para evitar que se dañe el ritmo de scrolleo

    this.buttonsActive = false

    setTimeout(() => {

      this.buttonsActive = true

    }, 500);

    //* Obtengo el elemento padre de los items
    let parent = document.getElementById(this.carouselId) as HTMLElement

    let scrollableAmount = (parent.scrollWidth - parent.clientWidth)

    //* Scrolleo el elemento padre la cantidad necesaria
    if (scrollableAmount == Math.round(parent.scrollLeft) || (scrollableAmount - Math.round(parent.scrollLeft) < this.scrollAmount)) {
      parent.scrollTo({
        top: 0,
        left: - (this.carouselItems.length - 1) * this.scrollAmount,
        behavior: this.instantReset ? 'instant' : 'smooth'
      })
    } else {
      parent.scrollLeft += this.scrollAmount
    }

  }

  /**
   * Me lleva al item anterior
   */
  previousItem() {

    if (!this.buttonsActive) {
      return
    }

    //* Desactivo el botón por un tiempo para evitar que se dañe el ritmo de scrolleo

    this.buttonsActive = false

    setTimeout(() => {

      this.buttonsActive = true

    }, 500);


    //* Obtengo el elemento padre de los items
    let parent = document.getElementById(this.carouselId) as HTMLElement

    //* Scrolleo el elemento padre la cantidad necesaria
    if (0 == parent.scrollLeft || parent.scrollLeft < this.scrollAmount) {
      parent.scrollBy({
        top: 0,
        left: (this.carouselItems.length - 1) * this.scrollAmount,
        behavior: this.instantReset ? 'instant' : 'smooth'
      })
    } else {
      parent.scrollLeft -= this.scrollAmount
    }

  }

}
