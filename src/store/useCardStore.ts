import { create } from 'zustand';
import type { Card } from '../types/card';
import { cardApi } from '../services/cardApi';

interface CardState {
  cards: Card[];
  activeCardId: string | null;
  loadCards: () => void;
  addCard: (cardName: string) => void;
  toggleFreeze: (cardId: string) => void;
  setActiveCardId: (id: string | null) => void;
}

export const useCardStore = create<CardState>((set, get) => ({
  cards: [],
  activeCardId: null,

  loadCards: () => {
    const cards = cardApi.getCards();
    set({ cards, activeCardId: cards.length > 0 ? cards[0].id : null });
  },

  addCard: (cardName: string) => {
    const newCard = cardApi.addCard(cardName);
    const updatedCards = cardApi.getCards();
    set({ cards: updatedCards, activeCardId: newCard.id });
  },

  toggleFreeze: (cardId: string) => {
    const { cards } = get();
    const cardToUpdate = cards.find((c) => c.id === cardId);
    
    if (cardToUpdate) {
      const updatedCard = { ...cardToUpdate, frozen: !cardToUpdate.frozen };
      cardApi.updateCard(updatedCard);
      
      const updatedCards = cardApi.getCards();
      set({ cards: updatedCards });
    }
  },

  setActiveCardId: (id: string | null) => {
    set({ activeCardId: id });
  },
}));
