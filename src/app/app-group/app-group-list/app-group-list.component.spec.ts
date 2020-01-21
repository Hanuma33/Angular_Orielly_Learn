import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroupListComponent } from './app-group-list.component';

describe('AppGroupListComponent', () => {
  let component: AppGroupListComponent;
  let fixture: ComponentFixture<AppGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
