export interface CreditCard {
    creditCardNumber: string,
    cardHolderName: string,
    expirationDate: Date,
    secuityCode?: string,
    amount: number
}