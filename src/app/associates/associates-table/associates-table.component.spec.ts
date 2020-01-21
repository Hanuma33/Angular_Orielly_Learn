import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatesTableComponent } from './associates-table.component';

describe('AssociatesTableComponent', () => {
  let component: AssociatesTableComponent;
  let fixture: ComponentFixture<AssociatesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
