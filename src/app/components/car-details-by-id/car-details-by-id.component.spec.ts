import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsByIdComponent } from './car-details-by-id.component';

describe('CarDetailsByIdComponent', () => {
  let component: CarDetailsByIdComponent;
  let fixture: ComponentFixture<CarDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
