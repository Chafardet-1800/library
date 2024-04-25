import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductDetailV1Component } from './cmm-product-detail-v1.component';

describe('CmmProductDetailV1Component', () => {
  let component: CmmProductDetailV1Component;
  let fixture: ComponentFixture<CmmProductDetailV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductDetailV1Component]
    });
    fixture = TestBed.createComponent(CmmProductDetailV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
