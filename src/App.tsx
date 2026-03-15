import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { BalanceHeader } from './components/BalanceHeader';
import { CardCarousel } from './components/CardCarousel';
import { CardActions } from './components/CardActions';
import { Accordion } from './components/Accordion';
import { Transactions } from './components/Transactions';
import { AddCardModal } from './components/AddCardModal';
import { useCardStore } from './store/useCardStore';
import { useIsMobile } from './hooks/useWindowDimensions';
import { BottomSheet } from './components/BottomSheet';

function App() {
  const { loadCards, addCard, cards, activeCardId } = useCardStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const activeCard = cards.find(c => c.id === activeCardId) || null;

  if (isMobile) {
    return (
      <div className="min-h-screen bg-dark text-slate-800 font-sans pb-[86px]">

        {/* TOP BLUE AREA */}
        <div className="p-6 pt-10 relative z-20">

          <BalanceHeader onNewCard={() => setIsModalOpen(true)} isMobile />

          <div className="flex space-x-8 mb-6 mt-6">
            <button className="text-white border-b-2 border-primary font-bold pb-1 text-[15px]">
              My debit cards
            </button>

            <button className="text-slate-400 font-medium pb-1 text-[15px]">
              All company cards
            </button>
          </div>

          {/* CARD */}
          <div className="relative z-20">
            <CardCarousel />
          </div>
        </div>

        {/* Bottom sheet trigger */}
        <div className="px-6 mt-6">
          <CardActions />
        </div>

        {/* BOTTOM SHEET */}
        <BottomSheet>
          <CardActions />
          <Accordion card={activeCard} />
          <Transactions />
        </BottomSheet>

        <Sidebar />

        <AddCardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(name) => addCard(name)}
        />
      </div>
    );
  }
  // Desktop format
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white-0 md:bg-dark text-slate-800 font-sans">
      <Sidebar />

      <main className="flex-1 w-full bg-white md:p-14 p-6 pb-28 md:pb-14 shadow-2xl overflow-y-auto min-h-screen no-scrollbar relative ">

        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-10">

          <div className="flex-1 w-full xl:max-w-[450px]">
            <BalanceHeader onNewCard={() => setIsModalOpen(true)} isMobile={false} />

            <div className="flex space-x-8 border-b border-slate-200 mb-8 mt-6">
              <button className="text-slate-900 border-b-2 border-primary font-bold pb-2 text-[15px]">
                My debit cards
              </button>
              <button className="text-slate-400 font-medium pb-2 text-[15px] hover:text-slate-600 transition-colors">
                All company cards
              </button>
            </div>

            <div className="bg-white-0 md:shadow-lg md:border border-slate-100 md:p-8 rounded-xl mb-6">
              <CardCarousel />
              <CardActions />
            </div>
          </div>

          <div className="flex-1 w-full xl:pl-10 xl:pt-[106px]">
            <Accordion card={activeCard} />
            <Transactions />
          </div>

        </div>
      </main>

      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(name) => addCard(name)}
      />
    </div>
  );
}

export default App;
