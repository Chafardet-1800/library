import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmSearchDialogComponent } from './cmm-search-dialog.component';

describe('CmmSearchDialogComponent', () => {
  let component: CmmSearchDialogComponent;
  let fixture: ComponentFixture<CmmSearchDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmSearchDialogComponent]
    });
    fixture = TestBed.createComponent(CmmSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
