import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWorkComponent } from './car-work.component';

describe('CarWorkComponent', () => {
  let component: CarWorkComponent;
  let fixture: ComponentFixture<CarWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
