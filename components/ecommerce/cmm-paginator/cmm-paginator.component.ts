import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-paginator',
  templateUrl: './cmm-paginator.component.html',
  styleUrls: ['./cmm-paginator.component.scss']
})
export class CmmPaginatorComponent {

  @Input() posts: any = []

  slice = [1, 2, 3, 4, 5]

  currentPage = 0

  totalPages = 0

}
