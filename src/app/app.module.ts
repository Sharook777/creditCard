import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatDatepickerModule } from '@angular/material/datepicker';


import { reducer } from './_reducers/credit-card.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreateFormComponent } from './create-form/create-form.component';

import { fakeBackendProvider } from './_mock-api/mock.backend';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    // MatDatepickerModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      creditCard: reducer
    }),
    AppRoutingModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
