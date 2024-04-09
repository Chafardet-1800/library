import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductsKartComponent } from './cmm-products-kart.component';

describe('CmmProductsKartComponent', () => {
  let component: CmmProductsKartComponent;
  let fixture: ComponentFixture<CmmProductsKartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductsKartComponent]
    });
    fixture = TestBed.createComponent(CmmProductsKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
