import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroupTableComponent } from './app-group-table.component';

describe('AppGroupTableComponent', () => {
  let component: AppGroupTableComponent;
  let fixture: ComponentFixture<AppGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
