import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmNewCarouselComponent } from './cmm-new-carousel.component';

describe('CmmNewCarouselComponent', () => {
  let component: CmmNewCarouselComponent;
  let fixture: ComponentFixture<CmmNewCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmNewCarouselComponent]
    });
    fixture = TestBed.createComponent(CmmNewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
