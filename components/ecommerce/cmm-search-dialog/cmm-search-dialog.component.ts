import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CmmEcomSearchDialogConfigModel } from 'src/app/common/data/utils/models/ecommerce.models';

@Component({
  selector: 'dlg-cmm-search-dialog',
  templateUrl: './cmm-search-dialog.component.html',
  styleUrls: ['./cmm-search-dialog.component.scss']
})
export class CmmSearchDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CmmSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: CmmEcomSearchDialogConfigModel
  ) {

  }

}
