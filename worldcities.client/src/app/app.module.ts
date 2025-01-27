import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './cities/cities.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CountriesComponent } from './countries/countries.component';

//Reactiv form module NG
import { ReactiveFormsModule } from '@angular/forms';

//components edits
import { CityEditComponent } from './cities/city-edit.component';
import { CountryEditComponent } from './countries/country-edit.component';

//servivces
import { CityService } from './cities/city.service';
import { CountryService } from './countries/country.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    CitiesComponent,
    CountriesComponent,
    CityEditComponent,
    CountryEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [CityService, CountryService, AuthService,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
