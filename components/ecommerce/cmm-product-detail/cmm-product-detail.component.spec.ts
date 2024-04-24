import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductDetailComponent } from './cmm-product-detail.component';

describe('CmmProductDetailComponent', () => {
  let component: CmmProductDetailComponent;
  let fixture: ComponentFixture<CmmProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductDetailComponent]
    });
    fixture = TestBed.createComponent(CmmProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
