import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authantication/login/login.component';
import { HeaderComponent } from './Components/dashboard/header/header.component';
import { CarncyPipe } from './Pipes/carncy.pipe';
import { DatePipe } from './Pipes/date.pipe';
import { MovieratingComponent } from './Components/movierating/movierating.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CarncyPipe,
    DatePipe,
    MovieratingComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
