/* eslint-disable @typescript-eslint/quotes */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './picker/location-picker/location-picker.component';

@NgModule({
  declarations: [MapModalComponent, LocationPickerComponent],
  imports: [CommonModule, IonicModule],
  exports: [LocationPickerComponent, MapModalComponent],
  entryComponents: [MapModalComponent],
})
export class SharedModule {}
