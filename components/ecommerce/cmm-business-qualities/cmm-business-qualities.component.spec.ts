import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmBusinessQualitiesComponent } from './cmm-business-qualities.component';

describe('CmmBusinessQualitiesComponent', () => {
  let component: CmmBusinessQualitiesComponent;
  let fixture: ComponentFixture<CmmBusinessQualitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmBusinessQualitiesComponent]
    });
    fixture = TestBed.createComponent(CmmBusinessQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
