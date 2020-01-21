import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroupFormComponent } from './app-group-form.component';

describe('AppGroupFormComponent', () => {
  let component: AppGroupFormComponent;
  let fixture: ComponentFixture<AppGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
