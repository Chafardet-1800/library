import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmProductCardComponent } from './cmm-product-card.component';

describe('CmmProductCardComponent', () => {
  let component: CmmProductCardComponent;
  let fixture: ComponentFixture<CmmProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmProductCardComponent]
    });
    fixture = TestBed.createComponent(CmmProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
