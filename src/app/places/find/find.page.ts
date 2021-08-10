import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit, OnDestroy {
  loadedPlaces: Place[] = [];
  private subs: Subscription;
  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.subs = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
    });
  }
  onFilterUpdate(event: any) {
    console.log(event.detail);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
