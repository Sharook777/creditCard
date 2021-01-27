import { CreditCard } from './../_models/credit-card.model'
import * as CreditCardActions from '../_actions/credit-card.actions'

const INIT_DATA: CreditCard = {
    creditCardNumber: '1223232323',
    cardHolderName: 'asgdjhasd jsagdg',
    expirationDate: new Date(),
    secuityCode: '345',
    amount: 3456
}

export function reducer(state: CreditCard[] = [INIT_DATA], action: CreditCardActions.Actions) {
    switch (action.type) {
        case CreditCardActions.ADD_CREDITCARD:
            return [...state, action.payload];

        case CreditCardActions.REMOVE_CREDITCARD:
            // state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}