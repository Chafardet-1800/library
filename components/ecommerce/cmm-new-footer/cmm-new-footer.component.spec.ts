import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmNewFooterComponent } from './cmm-new-footer.component';

describe('CmmNewFooterComponent', () => {
  let component: CmmNewFooterComponent;
  let fixture: ComponentFixture<CmmNewFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmNewFooterComponent]
    });
    fixture = TestBed.createComponent(CmmNewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
