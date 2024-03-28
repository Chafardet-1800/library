import { Component, Input } from '@angular/core';
import { logoBlack } from 'src/app/common/assets/images/images-routes';

@Component({
  selector: 'cmm-cmp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class CmmFooterComponent {

  /**
   * Logo de chinchin
   */
  @Input() logo = logoBlack;

}
