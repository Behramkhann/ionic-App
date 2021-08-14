/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Key } from 'protractor';
import { BehaviorSubject } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Booking } from '../models/booking.model';

interface BookingData {
  bookedFrom: string;
  firstname: string;
  guestNumber: number;
  lastName: string;
  placeId: string;
  placeImg: string;
  placeTitle: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([]);

  get bookings() {
    return this._bookings.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImg: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;
    const newBooking = new Booking(
      Math.random.toString(),
      placeId,
      this.authService.userId,
      placeTitle,
      placeImg,
      firstName,
      lastName,
      guestNumber,
      dateFrom,
      dateTo
    );
    return this.http
      .post<{ name: string }>(
        'https://ion-app-e8ff9-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json',
        { ...newBooking, id: null }
      )
      .pipe(
        switchMap((resData) => {
          resData.name;
          return this.bookings;
        }),
        take(1),
        tap((bookings) => {
          newBooking.id = generatedId;
          this._bookings.next(bookings.concat(newBooking));
        })
      );
  }

  fetchBookings() {
    return this.http
      .get<{ [key: string]: Booking }>(
        `https://ion-app-e8ff9-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json?orderBy="userId"&equalTo"${this.authService.userId}"`
      )
      .pipe(
        map((bookingsData) => {
          const bookings = [];
          for (const key in bookingsData) {
            if (bookingsData.hasOwnProperty(key)) {
              bookings.push(
                new Booking(
                  key,
                  bookingsData[key].placeId,
                  bookingsData[key].userId,
                  bookingsData[key].placeTitle,
                  bookingsData[key].placeImg,
                  bookingsData[key].firstname,
                  bookingsData[key].lastName,
                  bookingsData[key].guestNumber,
                  new Date(bookingsData[key].bookedFrom),
                  new Date(bookingsData[key].bookedTo)
                )
              );
            }
          }
          return bookings;
        }),
        tap((bookings) => {
          this._bookings.next(bookings);
        })
      );
  }

  cancelBooking(bookingId: string) {
    return this.bookings.pipe(
      take(1),
      delay(1000),
      tap((bookings) => {
        this._bookings.next(
          bookings.filter((b) => {
            b.id !== bookingId;
          })
        );
      })
    );
  }
}
