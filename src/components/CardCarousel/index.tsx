import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import { Card as CardComponent } from '../Card';
import type { Card as CardType } from '../../types/card';
import { useCardStore } from '../../store/useCardStore';

export const CardCarousel: React.FC = () => {
  const cards = useCardStore((state) => state.cards);
  const setActiveCardId = useCardStore((state) => state.setActiveCardId);

  return (
    <div className="w-full relative pb-8">
      {cards.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active bg-primary' }}
          onSlideChange={(swiper) => {
            setActiveCardId(cards[swiper.activeIndex].id);
          }}
          className="w-full pb-8"
        >
          {cards.map((card: CardType) => (
            <SwiperSlide key={card.id}>
              <CardComponent card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="bg-white-0 rounded-xl shadow p-8 text-center text-slate-500">
          No cards available. Add a new card to get started.
        </div>
      )}
    </div>
  );
};
