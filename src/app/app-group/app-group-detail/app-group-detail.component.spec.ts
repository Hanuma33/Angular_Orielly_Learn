import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroupDetailComponent } from './app-group-detail.component';

describe('AppGroupDetailComponent', () => {
  let component: AppGroupDetailComponent;
  let fixture: ComponentFixture<AppGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
