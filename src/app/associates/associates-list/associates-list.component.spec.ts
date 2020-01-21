import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesListComponent } from './associates-list.component';

describe('AssociatesListComponent', () => {
  let component: AssociatesListComponent;
  let fixture: ComponentFixture<AssociatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
