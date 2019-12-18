import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalloutComponent } from './callout/callout.component';
import { FormComponent } from './form/form.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { AlarmComponent } from './custom-icon/icons/alarm/alarm.component';
import { CityComponent } from './custom-icon/icons/city/city.component';
import { CrimeComponent } from './custom-icon/icons/crime/crime.component';
import { HomeComponent } from './custom-icon/icons/home/home.component';
import { PoliceComponent } from './custom-icon/icons/police/police.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    CalloutComponent,
    FormComponent,
    CustomIconComponent,
    AlarmComponent,
    CityComponent,
    CrimeComponent,
    HomeComponent,
    PoliceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
