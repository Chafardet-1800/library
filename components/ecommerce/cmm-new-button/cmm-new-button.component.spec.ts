import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmNewButtonComponent } from './cmm-new-button.component';

describe('CmmNewButtonComponent', () => {
  let component: CmmNewButtonComponent;
  let fixture: ComponentFixture<CmmNewButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmNewButtonComponent]
    });
    fixture = TestBed.createComponent(CmmNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
