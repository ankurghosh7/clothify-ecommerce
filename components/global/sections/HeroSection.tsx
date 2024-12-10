"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useDotButton, usePrevNextButtons } from "@/utils/embla-carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  <HeroSlideOne key={1} />,
  <HeroSlideTwo key={2} />,
  <HeroSlideThree key={3} />,
  <HeroSlideFour key={4} />,
];
const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({}), WheelGesturesPlugin({})]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  // const progressNode = useRef<HTMLDivElement>(null);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      className="md:h-[calc(100ch-250px)] w-full overflow-hidden relative rounded-lg"
      ref={emblaRef}
    >
      <div className="flex w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="h-full min-w-0 shrink-0 grow-0 basis-full mr-5"
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute bottom-28 px-10 z-20 w-full flex justify-between items-center ">
        <div className="embla__container flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              className={cn(
                "embla__slide w-4 h-1 bg-zinc-600/50 rounded-md transition-all duration-300",
                {
                  "bg-black w-8": index === selectedIndex,
                }
              )}
              key={index}
              onClick={() => onDotButtonClick(index)}
            ></button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            className="bg-background/70 hover:bg-background rounded-full p-2"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            className="bg-background/70 hover:bg-background rounded-full p-2"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

function HeroSlideOne() {
  return (
    <figure className="w-full h-full bg-gradient-to-b from-rose-400  via-rose-300 to-transparent "></figure>
  );
}

function HeroSlideTwo() {
  return (
    <figure className="w-full h-full bg-gradient-to-b from-orange-400 via-orange-300 to-transparent"></figure>
  );
}

function HeroSlideThree() {
  return (
    <figure className="w-full h-full bg-gradient-to-b from-amber-400 via-amber-300 to-transparent"></figure>
  );
}

function HeroSlideFour() {
  return (
    <figure className="w-full h-full bg-gradient-to-b from-green-400 via-green-300 to-transparent"></figure>
  );
}
