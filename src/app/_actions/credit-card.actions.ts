import { Action } from '@ngrx/store'
import { CreditCard } from '../_models/credit-card.model'

export const ADD_CREDITCARD = '[CREDITCARD] Create'
export const REMOVE_CREDITCARD = '[CREDITCARD] Remove'

export class AddCreditCard implements Action {
    readonly type = ADD_CREDITCARD

    constructor(public payload: CreditCard) { }
}

export class RemoveCreditCard implements Action {
    readonly type = REMOVE_CREDITCARD

    constructor(public payload: number) { }
}

export type Actions = AddCreditCard | RemoveCreditCard