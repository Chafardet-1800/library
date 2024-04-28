import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'cmp-cmm-new-carousel',
  templateUrl: './cmm-new-carousel.component.html',
  styleUrls: ['./cmm-new-carousel.component.scss']
})
export class CmmNewCarouselComponent {

  currentItemIndex = 0

  carouselItems = document.getElementsByClassName('carousel_item')

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {
    this.setCurrentElement()
  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.setCurrentElement()

  }

  nextItem() {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    if ((parent.scrollWidth - parent.clientWidth) == Math.round(parent.scrollLeft)) {
      parent.scrollTo({
        top: 0,
        left: - (this.carouselItems.length - 1) * 300,
        behavior: 'instant'
      })
    } else {
      parent.scrollLeft += 300
    }

  }

  previousItem() {

    let parent = document.getElementsByClassName('carousel_items_parent')[0]

    if (0 == parent.scrollLeft) {
      parent.scrollBy({
        top: 0,
        left: (this.carouselItems.length - 1) * 300,
        behavior: 'instant'
      })
    } else {
      parent.scrollLeft -= 300
    }

  }

  setCurrentElement() {

    // if (window.innerWidth < 992) {
    //   for (let i = 0; i < this.carouselItems.length; i++) {
    //     const element = this.carouselItems[i];

    //     element.classList.add('item_inactive')
    //     element.classList.remove('item_active')

    //   }

    //   const displayElement = this.carouselItems[this.currentItemIndex]

    //   displayElement?.classList.add('item_active')
    //   displayElement?.classList.remove('item_inactive')
    // } else {

    //   for (let i = 0; i < this.carouselItems.length; i++) {
    //     const element = this.carouselItems[i];

    //     element.classList.remove('item_inactive')

    //   }

    // }

  }

}
