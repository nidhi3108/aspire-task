import React from 'react';
import { Snowflake, Gauge, Contact, RefreshCw, Trash2 } from 'lucide-react';
import { useCardStore } from '../../store/useCardStore';

export const CardActions: React.FC = () => {
  const { cards, activeCardId, toggleFreeze } = useCardStore();
  const activeCard = cards.find(c => c.id === activeCardId);

  if (!activeCard) return null;

  const actions = [
    {
      icon: Snowflake,
      label: activeCard.frozen ? 'Unfreeze card' : 'Freeze card',
      onClick: () => toggleFreeze(activeCard.id),
      bgClass: 'bg-indigo-100 text-indigo-700'
    },
    {
      icon: Gauge,
      label: 'Set spend limit',
      onClick: () => { },
      bgClass: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Contact, // placeholder for GPay logo
      label: 'Add to GPay',
      onClick: () => { },
      bgClass: 'bg-green-100 text-slate-700'
    },
    {
      icon: RefreshCw,
      label: 'Replace card',
      onClick: () => { },
      bgClass: 'bg-slate-100 text-slate-600'
    },
    {
      icon: Trash2,
      label: 'Cancel card',
      onClick: () => { },
      bgClass: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <div className=" rounded-2xl  mb-6 flex justify-between md:max-w-md w-full overflow-x-auto no-scrollbar gap-4">
      {actions.map((action, idx) => (
        <button
          key={idx}
          onClick={action.onClick}
          className="flex flex-col items-center justify-start min-w-[72px] group"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${action.bgClass}`}>
            <action.icon className="w-6 h-6" />
          </div>
          <span className="text-xs text-center text-slate-600 font-medium leading-tight max-w-[60px]">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};
