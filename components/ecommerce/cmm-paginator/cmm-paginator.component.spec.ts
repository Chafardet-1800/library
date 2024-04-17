import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmPaginatorComponent } from './cmm-paginator.component';

describe('CmmPaginatorComponent', () => {
  let component: CmmPaginatorComponent;
  let fixture: ComponentFixture<CmmPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmPaginatorComponent]
    });
    fixture = TestBed.createComponent(CmmPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
