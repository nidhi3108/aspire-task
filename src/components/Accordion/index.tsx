import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import type { Card as CardType } from '../../types/card';

interface AccordionProps {
  card: CardType | null;
}

export const Accordion: React.FC<AccordionProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 mb-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center space-x-3 text-slate-700">
          <FileText className="w-5 h-5 text-indigo-500" />
          <span className="font-semibold text-[15px]">Card details</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {isOpen && (
        <div className="p-6 border-t border-slate-100 bg-white">
          {card ? (
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">Name</span>
                <span className="font-semibold text-slate-800">{card.cardName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">Card Number</span>
                <span className="font-semibold text-slate-800">{card.cardNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">Expiry</span>
                <span className="font-semibold text-slate-800">{card.expiry}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">CVV</span>
                <span className="font-semibold text-slate-800">{card.cvv}</span>
              </div>
            </div>
          ) : (
            <p className="text-slate-500 text-sm text-center">No card selected</p>
          )}
        </div>
      )}
    </div>
  );
};
