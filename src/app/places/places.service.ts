/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    // eslint-disable-next-line max-len
    new Place(
      'p1',
      'Any',
      'Hotel Motel',
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
      1200,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      '2'
    ),
    new Place(
      'p1',
      'Any',
      'Hotel Motel',
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
      1200,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      '2'
    ),
    new Place(
      'p1',
      'Any',
      'Hotel Motel',
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
      1200,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      '2'
    ),
  ]);

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) {}

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return this.places.pipe(
      take(1),
      map((places) => {
        return { ...places.find((p) => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1050),
      tap((places) => {
        setTimeout(() => {
          this._places.next(places.concat(newPlace));
        }, 1000);
      })
    );
  }
}
