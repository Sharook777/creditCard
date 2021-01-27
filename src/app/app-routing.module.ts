import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormComponent } from './create-form/create-form.component';
import { CreditCardComponent } from './credit-card/credit-card.component'


const routes: Routes = [
  {
    path: '',
    component: CreditCardComponent,
  },
  {
    path: 'create',
    component: CreateFormComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
