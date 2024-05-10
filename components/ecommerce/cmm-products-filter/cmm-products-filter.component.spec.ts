import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductsFilterComponent } from './cmm-products-filter.component';

describe('CmmProductsFilterComponent', () => {
  let component: CmmProductsFilterComponent;
  let fixture: ComponentFixture<CmmProductsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductsFilterComponent]
    });
    fixture = TestBed.createComponent(CmmProductsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
