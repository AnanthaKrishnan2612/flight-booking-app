import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingnavbarComponent } from './bookingnavbar.component';

describe('BookingnavbarComponent', () => {
  let component: BookingnavbarComponent;
  let fixture: ComponentFixture<BookingnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
