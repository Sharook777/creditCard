import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { AppState } from '../app.state';
import { ToastrService } from 'ngx-toastr';
// import { CreditCard } from '../_models/credit-card.model'
import * as CreditCardActions from '../_actions/credit-card.actions';
import { CreditCardService } from '../_services/credit-card.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  creditCardForm: FormGroup;

  months: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  years: Number[] = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];

  constructor(private store: Store<AppState>, private creditCardService: CreditCardService, private toastr: ToastrService, private router: Router) { }

  disablePreviousMonth(month) {
    const date = new Date();
    const { expirationYear } = this.creditCardForm.value?.expirationDate;

    if (expirationYear === date.getFullYear()) {
      return month < (date.getMonth() + 1) ? true : false;
    }
    return false;
  }

  disableYears(year) {
    const { expirationMonth } = this.creditCardForm.value?.expirationDate;
    const date = new Date();

    if (expirationMonth && expirationMonth < date.getMonth() + 1) {
      return year === date.getFullYear() ? true : false;
    }
    return false;
  }

  addCreditCard(formData) {
    const data = {
      creditCardNumber: formData.creditCardNumber,
      cardHolderName: formData.cardHolderName,
      expirationDate: new Date(formData.expirationDate.expirationMonth + '/01/' + formData.expirationDate.expirationYear),
      secuityCode: formData.secuityCode,
      amount: formData.amount
    };

    this.creditCardService.createCreditCard(formData).subscribe(response => {
      this.store.dispatch(new CreditCardActions.AddCreditCard(
        data
      ));

      this.redirectBack();

      this.creditCardForm.reset();
      this.toastr.success("Credit Card Details updated successfully")

    }, error => {
      this.toastr.warning("Something went wrong Please try again")
    })
  }

  ngOnInit(): void {
    this.creditCardForm = new FormGroup({
      creditCardNumber: new FormControl('', Validators.required),
      cardHolderName: new FormControl('', [
        Validators.required
      ]),
      expirationDate: new FormGroup({
        expirationMonth: new FormControl('', [
          Validators.required
        ]),
        expirationYear: new FormControl('', [
          Validators.required
        ]),
      }),
      secuityCode: new FormControl('', [Validators.minLength(3), Validators.maxLength(3)]),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(9)])

    });
  }

  onSubmit() {
    this.addCreditCard(this.creditCardForm.value)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  redirectBack() {
    this.router.navigate(['']);
  }
}
