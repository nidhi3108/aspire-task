import React, { useState } from 'react';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import type { Card as CardType } from '../../types/card';

interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const formatCardNumber = (number: string, show: boolean) => {
    if (show) return number;
    const parts = number.split(' ');
    // Handle parts if length is different, but assuming 4 parts of 4 digits
    return `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${parts[3] || '****'}`;
  };

  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-end mb-2 relative top-2 z-10">
        <button
          onClick={() => setShowCardNumber(!showCardNumber)}
          className="flex items-center text-primary bg-white px-3 py-1.5 rounded-t-lg shadow-sm text-xs font-bold"
        >
          {showCardNumber ? (
            <EyeOff className="w-4 h-4 mr-2" />
          ) : (
            <Eye className="w-4 h-4 mr-2" />
          )}
          {showCardNumber ? 'Hide card number' : 'Show card number'}
        </button>
      </div>

      <div 
        className={clsx(
          "bg-primary rounded-xl p-6 text-white shadow-lg relative overflow-hidden transition-opacity duration-300 min-h-[220px]",
          card.frozen && "opacity-50"
        )}
      >
        {/* Visa and Aspire logos placeholder */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2L2 22h4.5l5.5-11 5.5 11H22L12 2z" />
            </svg>
            <span className="font-bold text-lg">aspire</span>
          </div>
        </div>

        <h3 className="text-[22px] font-bold tracking-wide mb-6">{card.cardName}</h3>

        <div className="flex items-center space-x-6 mb-4">
          <span className="font-bold tracking-[0.2em] text-sm flex items-center h-4">
            {formatCardNumber(card.cardNumber, showCardNumber)}
          </span>
        </div>

        <div className="flex items-center space-x-8 text-[13px] font-bold tracking-wide mb-1">
          <span>Thru: {card.expiry}</span>
          <span className="flex items-center">
            CVV: 
            <span className="ml-2 text-xl tracking-widest flex items-center translate-y-1">
              ***
            </span>
          </span>
        </div>

        <div className="absolute bottom-6 right-6">
          {/* Fake VISA Logo */}
          <span className="text-3xl font-bold italic tracking-wider opacity-90">VISA</span>
        </div>
      </div>
    </div>
  );
};
