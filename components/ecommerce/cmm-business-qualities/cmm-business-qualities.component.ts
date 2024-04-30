import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-cmm-business-qualities',
  templateUrl: './cmm-business-qualities.component.html',
  styleUrls: ['./cmm-business-qualities.component.scss']
})
export class CmmBusinessQualitiesComponent {

  @Input() items: any[] = []

  @Input() config?: {
    widthClass?: string,
    showBorder?: boolean
  } = {
      showBorder: true
    }

}
