import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductCardV2Component } from './cmm-product-card-v2.component';

describe('CmmProductCardV2Component', () => {
  let component: CmmProductCardV2Component;
  let fixture: ComponentFixture<CmmProductCardV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductCardV2Component]
    });
    fixture = TestBed.createComponent(CmmProductCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
