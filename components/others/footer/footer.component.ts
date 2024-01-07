import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: "cmm-cmp-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class CmmFooterComponent {
  /**
   * Nombre del entorno
   */
  @Input() envName: string = "";

  /**
   * Versión del proyecto
   */
  @Input() envVersion: string = environment.CC_VERSION;
}
