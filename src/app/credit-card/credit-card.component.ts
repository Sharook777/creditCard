import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CreditCard } from '../_models/credit-card.model';
import { AppState } from '../app.state';
import * as CreditCardActions from './../_actions/credit-card.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditCards: Observable<CreditCard[]>;

  monthNames: string[] = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
  ];


  constructor(private store: Store<AppState>, private router: Router) {
    this.creditCards = store.select('creditCard');
  }

  ngOnInit(): void {
  }


  redirectBack() {
    this.router.navigate(['/create']);
  }

}
