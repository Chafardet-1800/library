import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductDetailGridV2Component } from './cmm-product-detail-grid-v2.component';

describe('CmmProductDetailGridV2Component', () => {
  let component: CmmProductDetailGridV2Component;
  let fixture: ComponentFixture<CmmProductDetailGridV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductDetailGridV2Component]
    });
    fixture = TestBed.createComponent(CmmProductDetailGridV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
