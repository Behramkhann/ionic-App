/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings: Booking[] = [
    new Booking('xyz', 'p1', 'u1', 'peshawar', 2),
  ];

  get bookings() {
    return [...this._bookings];
  }

  constructor() {}
}
