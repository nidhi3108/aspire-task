import React from 'react';
import clsx from 'clsx';
import { Home, CreditCard, ArrowRightLeft, ArrowUpCircle, User } from 'lucide-react';

const Logo = () => (
  <div className="flex flex-col mb-12 hidden md:flex">
    <div className="flex items-center space-x-2 text-primary">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2L2 22h4.5l5.5-11 5.5 11H22L12 2z" />
        </svg>
      </div>
      <span className="text-2xl font-bold text-primary">aspire</span>
    </div>
    <span className="text-white/50 text-sm mt-3 leading-tight max-w-[200px]">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </span>
  </div>
);

const NavItem = ({
  icon: Icon,
  label,
  active = false
}: {
  icon: React.ElementType,
  label: string,
  active?: boolean
}) => {
  return (
    <div className={clsx(
      "flex flex-col md:flex-row items-center md:justify-start justify-center cursor-pointer transition-colors py-2 md:py-4 px-2 md:px-0",
      active ? "text-primary" : "text-slate-400 hover:text-white"
    )}>
      <Icon className="w-6 h-6 mb-1 md:mb-0 md:mr-4" />
      <span className={clsx(
        "text-xs md:text-base font-medium",
        active ? "text-primary font-bold md:font-bold" : "md:font-medium"
      )}>{label}</span>
      {active && <div className="hidden md:block absolute right-0 w-1 rounded-l-full bg-primary h-8" />}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const items = [
    { icon: Home, label: 'Home' },
    { icon: CreditCard, label: 'Cards', active: true },
    { icon: ArrowRightLeft, label: 'Payments' },
    { icon: ArrowUpCircle, label: 'Credit' },
    { icon: User, label: 'Settings' },
  ];

  return (
    <aside className="
      fixed bottom-0 left-0 w-full h-[80px] bg-white border-t border-slate-200 z-50
      md:relative md:h-screen md:w-[340px] md:bg-dark md:px-12 md:py-12 md:flex md:flex-col md:border-none
    ">
      <Logo />
      <nav className="flex flex-row justify-around items-center h-full md:flex-col md:items-stretch md:justify-start md:space-y-4">
        {items.map((item, idx) => (
          <NavItem key={idx} icon={item.icon} label={item.label} active={item.active} />
        ))}
      </nav>
    </aside>
  );
};
