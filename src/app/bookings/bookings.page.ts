import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Booking } from '../models/booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[] = [];
  private bookingSub: Subscription;
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingSub = this.bookingService.bookings.subscribe((bookings) => {
      this.loadedBookings = bookings;
    });
  }

  onCancelBooking(bookingId: string, ionSliding: IonItemSliding) {
    ionSliding.close();
  }

  ngOnDestroy() {
    this.bookingSub.unsubscribe();
  }
}
