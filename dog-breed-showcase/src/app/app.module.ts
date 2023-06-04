import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreedListComponent } from './breed-list/breed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    BreedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
