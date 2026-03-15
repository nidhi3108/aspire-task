export interface Card {
  id: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  frozen: boolean;
}

export type TransactionType = 'credit' | 'debit';

export interface Transaction {
  id: string;
  merchantName: string;
  merchantIconBackground: string;
  date: string;
  type: TransactionType;
  amount: number;
  description: string;
  currencyIcon?: React.ReactNode;
}
