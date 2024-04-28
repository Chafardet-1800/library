import { Component, HostListener } from '@angular/core';

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

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    if (window.innerWidth < 567) {

      this.scrollAmount = (parent.scrollWidth - parent.clientWidth) / (this.carouselItems.length - 1)

    } else {
      this.scrollAmount = 300
    }

    //* Regreso al primer item
    parent.scrollTo({
      top: 0,
      left: - (this.carouselItems.length - 1) * this.scrollAmount,
      behavior: 'instant'
    })

  }

  constructor() { }

  ngAfterViewInit() {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    if (window.innerWidth < 567) {

      this.scrollAmount = (parent.scrollWidth - parent.clientWidth) / (this.carouselItems.length - 1)

    }

  }

  /**
   * Me lleva al item siguiente
   */
  nextItem() {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    let scrollableAmount = (parent.scrollWidth - parent.clientWidth)

    if (scrollableAmount == Math.round(parent.scrollLeft) || (scrollableAmount - Math.round(parent.scrollLeft) < this.scrollAmount)) {
      parent.scrollTo({
        top: 0,
        left: - (this.carouselItems.length - 1) * this.scrollAmount,
        behavior: 'instant'
      })
    } else {
      parent.scrollLeft += this.scrollAmount
    }

  }

  /**
   * Me lleva al item anterior
   */
  previousItem() {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    if (0 == parent.scrollLeft || parent.scrollLeft < this.scrollAmount) {
      parent.scrollBy({
        top: 0,
        left: (this.carouselItems.length - 1) * this.scrollAmount,
        behavior: 'instant'
      })
    } else {
      parent.scrollLeft -= this.scrollAmount
    }

  }

}
