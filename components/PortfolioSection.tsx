"use client";

import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/constants";
import { useWindowSize } from "@/hooks/useWindowsSize";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = ({
  data,
  title,
}: {
  data: typeof projects;
  title: string;
}) => {
  const swiperRef = useRef<SwiperType>();
  const [slidePerView, setSlidePerView] = useState(3);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setSlidePerView(1);
    } else if (width < 1268) {
      setSlidePerView(2);
    } else {
      setSlidePerView(3);
    }
  }, [width]);

  return (

    <section className="max-width">
    {/* // Project section divider */}
    <div className="pb-3 border-b border-peach flex justify-between items-center">
      <p>{title}</p>
      <div className="flex gap-2">
        <button className="bg-peach-200 border border-peach p-1 rounded text-grey-700" onClick={() => swiperRef.current?.slidePrev()}>
          <ChevronLeft />
        </button >
        <button className="bg-peach-200 border border-peach p-1 rounded text-grey-700" onClick={() => swiperRef.current?.slideNext()}>
          <ChevronRight />
        </button>
      </div>
    </div>

    <div className="pt-8">
      <Swiper 
        slidesPerView={slidePerView}
        spaceBetween={20}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {
          data.map((project, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem project={project} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  </section>
  );
};

export default PortfolioSection;
