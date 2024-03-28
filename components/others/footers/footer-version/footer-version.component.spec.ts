import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVersionComponent } from './footer-version.component';

describe('FooterVersionComponent', () => {
  let component: FooterVersionComponent;
  let fixture: ComponentFixture<FooterVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterVersionComponent]
    });
    fixture = TestBed.createComponent(FooterVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
