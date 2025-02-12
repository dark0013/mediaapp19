import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './pages/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { MedicComponent } from './pages/medic/medic.component';

@NgModule({
  declarations: [AppComponent, PatientComponent, MedicComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
