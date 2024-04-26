import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductDetailGridComponent } from './cmm-product-detail-grid.component';

describe('CmmProductDetailGridComponent', () => {
  let component: CmmProductDetailGridComponent;
  let fixture: ComponentFixture<CmmProductDetailGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductDetailGridComponent]
    });
    fixture = TestBed.createComponent(CmmProductDetailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
