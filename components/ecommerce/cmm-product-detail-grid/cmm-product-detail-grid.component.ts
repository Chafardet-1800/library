import { Component, HostListener, Input } from '@angular/core';

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

  /**
   * Index de la imagen que estoy mostrando
   */
  currentImageIndex: number = 0

  /**
   * Tamaño de las tarjeticas con otras imágenes
   */
  itemSize: number = 0

  /**
  * Indica si se muestran las cajitas con sombra
  */
  @Input() displayShadow: boolean = true

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    this.calculateScrollPortion()

  }

  constructor() { }

  ngOnInit() {

    this.calculateScrollPortion()

  }

  calculateScrollPortion() {

    let totalHeight = document.querySelector('.other_images_column')?.clientHeight as number

    let totalWidth = document.querySelector('.other_images_column')?.clientWidth as number

    let totalChildren = document.querySelector('.other_images_column')?.children.length as number

    if (window.innerWidth > 767) {

      if (totalChildren != 0) {

        this.itemSize = totalHeight / totalChildren
      }


    } else {

      if (totalChildren != 0) {

        this.itemSize = totalWidth / totalChildren
      }


    }

  }

  scrollUp() {

    document.querySelector('.other_images_column')?.scrollBy({ top: -this.itemSize, left: 0, behavior: "smooth" })
  }

  scrollDown() {

    document.querySelector('.other_images_column')?.scrollBy({ top: this.itemSize, left: 0, behavior: "smooth" })

  }

}
