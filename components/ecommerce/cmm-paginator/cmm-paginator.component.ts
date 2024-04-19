import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-paginator',
  templateUrl: './cmm-paginator.component.html',
  styleUrls: ['./cmm-paginator.component.scss']
})
export class CmmPaginatorComponent {

  @Input() posts: any = []

  /**
   * Listado de números de páginas visibles
   */
  slice = [1, 2, 3, 4, 5]

  currentPage = 1

  totalPages = 10

  /**
   * Avanza una página hacia alante
   */
  stepForward() {

    let newFirstPage = this.slice[this.slice.length - 1] + 1

    this.slice.push(newFirstPage)

    this.slice.shift()

  }

  /**
   * Retrocede una página
   */
  stepBack() {

    let newLastPage = this.slice[0] - 1

    this.slice.unshift(newLastPage)

    this.slice.pop()

  }

}
