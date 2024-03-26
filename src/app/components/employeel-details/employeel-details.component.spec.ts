import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelDetailsComponent } from './employeel-details.component';

describe('TutorialDetailsComponent', () => {
  let component: EmployeelDetailsComponent;
  let fixture: ComponentFixture<EmployeelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
