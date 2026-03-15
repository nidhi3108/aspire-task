import React, { useState } from 'react';
import { ArrowLeftRight, ChevronDown, ChevronUp, Briefcase, Plane, Megaphone } from 'lucide-react';
import type { Transaction } from '../../types/card';
import clsx from 'clsx';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    merchantName: 'Hamleys',
    merchantIconBackground: 'bg-blue-100/50 text-blue-500',
    date: '20 May 2020',
    type: 'credit',
    amount: 150,
    description: 'Refund on debit card',
    currencyIcon: <Briefcase className="w-4 h-4" />
  },
  {
    id: '2',
    merchantName: 'Hamleys',
    merchantIconBackground: 'bg-emerald-100/50 text-emerald-500',
    date: '20 May 2020',
    type: 'debit',
    amount: 150,
    description: 'Charged to debit card',
    currencyIcon: <Plane className="w-4 h-4" />
  },
  {
    id: '3',
    merchantName: 'Hamleys',
    merchantIconBackground: 'bg-pink-100/50 text-pink-500',
    date: '20 May 2020',
    type: 'debit',
    amount: 150,
    description: 'Charged to debit card',
    currencyIcon: <Megaphone className="w-4 h-4" />
  }
];

export const Transactions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 mb-8 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center space-x-3 text-slate-700">
          <ArrowLeftRight className="w-5 h-5 text-indigo-500" />
          <span className="font-semibold text-[15px]">Recent transactions</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-white">
          <div className="space-y-6 mt-4">
            {mockTransactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-start border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start space-x-4">
                  <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center", tx.merchantIconBackground)}>
                    {tx.currencyIcon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{tx.merchantName}</p>
                    <p className="text-xs text-slate-400 mb-3">{tx.date}</p>
                    <div className="flex items-center space-x-2 text-xs font-medium text-slate-500">
                      <div className="bg-primary rounded-full w-6 h-5 flex items-center justify-center text-[10px] text-white">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" /></svg>
                      </div>
                      <span>{tx.description}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-[15px] font-bold">
                  <span className={clsx(
                    "mr-2",
                    tx.type === 'credit' ? 'text-emerald-500' : 'text-slate-800'
                  )}>
                    {tx.type === 'credit' ? '+' : '-'} S$ {tx.amount}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-300 -rotate-90" />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-4 bg-emerald-50/50 text-emerald-600 font-semibold text-[13px] rounded-lg hover:bg-emerald-50 transition-colors border border-emerald-100">
            View all card transactions
          </button>
        </div>
      )}
    </div>
  );
};
