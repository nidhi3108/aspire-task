import React from 'react';
import { PlusCircle } from 'lucide-react';
import clsx from 'clsx';

interface BalanceHeaderProps {
  onNewCard: () => void;
  isMobile?: boolean;
}

export const BalanceHeader: React.FC<BalanceHeaderProps> = ({ onNewCard, isMobile = false }) => {
  return (
    <div className="flex  md:flex-row md:items-end justify-between w-full mb-8">
      <div>
        <h2 className={clsx(
          "text-sm md:text-base font-medium mb-2 md:mb-4",
          isMobile ? "text-white" : "text-slate-500"
        )}>
          Available balance
        </h2>
        <div className="flex items-center space-x-3">
          <span className="bg-primary text-white font-bold text-xs md:text-sm px-3 py-1 rounded-md">
            S$
          </span>
          <span className={clsx(
            "text-[28px] md:text-[40px] font-bold leading-none",
            isMobile ? "text-white" : "text-slate-800"
          )}>
            3,000
          </span>
        </div>
      </div>

      <button
        onClick={onNewCard}
        className={clsx(
          "mt-4 md:mt-0 flex items-center px-0 md:px-4 py-2 rounded-md transition-colors font-semibold max-w-fit",
          isMobile ? "text-primary bg-transparent text-[13px] font-bold" : "bg-secondary hover:bg-secondary/90 text-white text-sm"
        )}
      >
        <PlusCircle className={clsx("w-4 h-4 mr-2", isMobile ? "text-primary" : "text-white")} />
        New card
      </button>
    </div>
  );
};
