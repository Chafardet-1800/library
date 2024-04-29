import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProdutDetailQuantityComponent } from './cmm-produt-detail-quantity.component';

describe('CmmProdutDetailQuantityComponent', () => {
  let component: CmmProdutDetailQuantityComponent;
  let fixture: ComponentFixture<CmmProdutDetailQuantityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProdutDetailQuantityComponent]
    });
    fixture = TestBed.createComponent(CmmProdutDetailQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
