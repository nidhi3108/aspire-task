import type { Card } from '../types/card';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'aspire_cards';

const INITIAL_CARDS: Card[] = [
  {
    id: '1',
    cardName: 'Mark Henry',
    cardNumber: '1234 5678 9012 2020',
    expiry: '12/20',
    cvv: '123',
    frozen: false,
  },
];

export const cardApi = {
  getCards: (): Card[] => {
    try {
      const storedCards = localStorage.getItem(STORAGE_KEY);
      if (!storedCards) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CARDS));
        return INITIAL_CARDS;
      }
      return JSON.parse(storedCards) as Card[];
    } catch (error) {
      console.error('Failed to get cards from localStorage:', error);
      return INITIAL_CARDS;
    }
  },

  saveCards: (cards: Card[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch (error) {
      console.error('Failed to save cards to localStorage:', error);
    }
  },

  addCard: (cardName: string): Card => {
    // Generate random 16 digit number
    const cardNumber = Array.from({ length: 4 })
      .map(() => Math.floor(1000 + Math.random() * 9000).toString())
      .join(' ');

    const month = String(Math.floor(1 + Math.random() * 12)).padStart(2, '0');
    const year = String(Math.floor(24 + Math.random() * 5)); // 24 to 28
    const expiry = `${month}/${year}`;

    const cvv = String(Math.floor(100 + Math.random() * 900));

    const newCard: Card = {
      id: uuidv4(),
      cardName,
      cardNumber,
      expiry,
      cvv,
      frozen: false,
    };

    const currentCards = cardApi.getCards();
    cardApi.saveCards([...currentCards, newCard]);

    return newCard;
  },

  updateCard: (updatedCard: Card): void => {
    const currentCards = cardApi.getCards();
    const updatedCards = currentCards.map((c) =>
      c.id === updatedCard.id ? updatedCard : c
    );
    cardApi.saveCards(updatedCards);
  },
};
