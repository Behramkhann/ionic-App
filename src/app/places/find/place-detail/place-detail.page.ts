/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BookingService } from 'src/app/bookings/booking.service';
import { Place } from 'src/app/models/place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable = false;
  placeSub: Subscription;
  isLoading = false;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.isLoading = true;
      this.placeSub = this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe(
          (place) => {
            this.place = place;
            this.isBookable = place.userId !== this.authService.userId;
            this.isLoading = false;
          },
          (error) => {
            this.alertCtrl
              .create({
                header: 'An error occured',
                message: 'Could not load place try again',
                buttons: [
                  {
                    text: 'okay',
                    handler: () => {
                      this.router.navigate(['/places/tabs/find']);
                    },
                  },
                ],
              })
              .then((alertEl) => alertEl.present());
          }
        );
    });
  }

  onBookPlace() {
    this.actionSheetCtrl
      .create({
        header: 'Choose An action',
        buttons: [
          {
            text: 'select Date',
            handler: () => {
              this.onOpenBookingModal('select');
            },
          },
          {
            text: 'Random Date',
            handler: () => {
              this.onOpenBookingModal('random');
            },
          },
          { text: 'Cancel', role: 'destructive' },
        ],
      })
      .then((actionSheetEl) => {
        actionSheetEl.present();
      });
  }
  onOpenBookingModal(mode: 'select' | 'random') {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resData) => {
        if (resData.role === 'confirm') {
          this.loadingCtrl
            .create({ message: 'Booking Place' })
            .then((loadingEl) => {
              loadingEl.present();
              const data = resData.data.bookingData;
              this.bookingService
                .addBooking(
                  this.place.id,
                  this.place.title,
                  this.place.imgUrl,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  data.startDate,
                  data.EndDate
                ).subscribe(() => {
                  loadingEl.dismiss();
                });
            });
        }
      });
  }
  ngOnDestroy() {
    this.placeSub.unsubscribe();
  }
}
