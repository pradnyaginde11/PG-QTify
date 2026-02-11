// Carousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftNav from "../NavButton/LeftNav";
import RightNav from "../NavButton/RightNav";

const Carousel = ({ items, renderItem }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 7 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom buttons */}
      <div ref={prevRef}>
        <LeftNav />
      </div>
      <div ref={nextRef}>
        <RightNav />
      </div>
    </div>
  );
};

export default Carousel;