import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmm-cmp-footer-version',
  templateUrl: './footer-version.component.html',
  styleUrls: ['./footer-version.component.scss']
})
export class CmmFooterVersionComponent {

  /**
   * Nombre del entorno
   */
  @Input() envName: string = ''

  /**
   * Versión del proyecto
   */
  @Input() envVersion: string = ''

}
