import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
// import { catchError } from 'rxjs/operators';

import { CreditCard } from '../_models/credit-card.model';


@Injectable({
    providedIn: 'root',
})
export class CreditCardService {

    constructor(private http: HttpClient) { }

    createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
        return this.http.post<CreditCard>('/create', creditCard);
    }
}
