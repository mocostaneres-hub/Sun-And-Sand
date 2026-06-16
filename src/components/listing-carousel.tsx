"use client";

import Image from "next/image";
import { useState } from "react";

type ListingCarouselProps = {
  images: string[];
  alt: string;
};

export default function ListingCarousel({ images, alt }: ListingCarouselProps) {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative">
      <Image
        src={images[index]}
        alt={alt}
        width={1024}
        height={683}
        className="h-44 w-full object-cover"
      />
      <button
        type="button"
        onClick={previous}
        aria-label="Previous listing image"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 px-2.5 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next listing image"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 px-2.5 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900"
      >
        ›
      </button>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((image, dotIndex) => (
          <button
            key={image}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to image ${dotIndex + 1}`}
            className={`h-2 w-2 rounded-full ${
              dotIndex === index ? "bg-cyan-300" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
