import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmBreadcrumbComponent } from './cmm-breadcrumb.component';

describe('CmmBreadcrumbComponent', () => {
  let component: CmmBreadcrumbComponent;
  let fixture: ComponentFixture<CmmBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(CmmBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
