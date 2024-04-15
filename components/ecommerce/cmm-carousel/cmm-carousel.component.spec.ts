import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmCarouselComponent } from './cmm-carousel.component';

describe('CmmCarouselComponent', () => {
  let component: CmmCarouselComponent;
  let fixture: ComponentFixture<CmmCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmCarouselComponent]
    });
    fixture = TestBed.createComponent(CmmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
