import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    // eslint-disable-next-line max-len
    new Place(
      'p1',
      'Any',
      'Hotel Motel',
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
      1200
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...this._places.find((p) => p.id === id) };
  }
}
