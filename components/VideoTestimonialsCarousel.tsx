"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Play } from "reicon-react";
import { Button } from "@/components/ui/button";

interface VideoReview {
  id: string;
  handle: string;
  thumbnail: string;
  name: string;
  role: string;
  company: string;
  quote?: string;
}

const videoReviews: VideoReview[] = [
  {
    id: "cameron",
    handle: "@Cameron",
    name: "Cameron Vance",
    role: "Commercial General Contractor",
    company: "Vance Build Group",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVWvG1v7KDUODwmw5ebWw7lXsr4SGv3WbsXYTFart_B9WlImwf9yqk-nVvQ-Fil9cwrsIbGrZ8PqSPMAtYlu9vkAWiIB-E9N-rXGBS4yPkyK-H4A7V1KIqTaomuQ9URUmJ6yuaGThjzfypxbIqu-u3Vcp0rpdB1QdPwzicEPDAxZXR9Le3BvQlxWUBVEpCVdUsLS17RPZCgJ024NDlfHxfAJ4EahFOAOWDikKGaeiRdc6B-EhpPf8kzg",
    quote:
      "Construct Estimates cut our takeoff turnaround in half without missing a single line item.",
  },
  {
    id: "matt-day",
    handle: "@Matt Day",
    name: "Matt Day",
    role: "Managing Director",
    company: "Day Construction Group",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASPQx_of2WKEIRSGcL4aqKsVnV156V781gkkPVmzJY_k9EsyXwII0YCYTjlFTpRHHZA5jW6rRvCi1sbKGROlstSO0g_3QlFIi07hQN-J86KYO_A-lowvCCc8BbWKdl6u4PX70HR3gb0RwjAFvp7qDNakmJxfSMx9l-Vo-foDf1rqd-ofNPlQCi2Pfg-dw6mOP8Zb3c25spGutzXYwD-TGPfdzQuoFe4UXhhXnbpsXbX7rPzKZen7cGoQ",
    quote:
      "We freed up 25+ hours every week during peak bidding season. Their accuracy is unbeatable.",
  },
  {
    id: "dr-boyer",
    handle: "@Dr.-Boyer",
    name: "Dr. Boyer",
    role: "Architect & Builder",
    company: "Boyer Architecture",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5g1LiElUDwlOO2BeKExBsW_XKLSQSSUGNssdloJLHFsTSt6DXlrA8XSbn8i5WcF4XfDDnblhLKH62BJR1xymqKZSVuTiloLuy2xy254sAW8Bdf8C-I8NFl8_5PoECfsWzDFhhOspGb0HMsvYy1JdWDusxhQXujR0leYdPyZz-TCAYfiDgA5R6Up65BcrgbtGAptsqHuVntxRgJLZ53-RZZZlx0nDPN6Ys80m5Lh9HXjJiQo5Oza2goA",
    quote:
      "Superb accuracy on complex MEP and structural takeoffs. Highly recommended.",
  },
  {
    id: "osama",
    handle: "@Osama",
    name: "Osama Al-Mansoor",
    role: "VP of Estimation",
    company: "Gulf Coast Infrastructure",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5OOWC1uHZYPiFRB3sQV1Ng3C58S0O-kXkbDTkKBBmBMqNsVrmm_6-HSA48jZc5jkuAGooQERqbkxJKjAVqkieDi2DyqhxP2xZ0oS20KODw5vPb3Mkb35HszOLkVacfnOK1ieqeligpt37V_RWC5iZNyPeS7s40r_FG4EpUnfExEG0yKcrGYWdi2jCjZBEh8TNo3QesK7RMwywuSgurpKWjowAYTP7M8q2Bm1Lz6z2OVL98CQAJz7Sow",
    quote:
      "When rush deadlines hit, CE delivers without sacrificing an ounce of quality.",
  },
  {
    id: "mick",
    handle: "@Mick",
    name: "Mick Brennan",
    role: "Senior PM",
    company: "Brennan Construction",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3MhwEMWca9LBDIK_5JPaQSOqt2WBH1PPn9DBWOEqxkT3a_mkS3ZZBziCOy3MTQ7pLfoLWpjoYUs7q1oPTSoKH5aH5FwA3UkL5PlsQxKjEQP5SbRAfEQkg-t1vxIQics66s2E1Nl-YQoiUyU5LGOxA7crV0uS6sbUE9BV2g8qwia6EvJpYwjIX4ye_PbRqgTnHMrle1d65lHeUzRhbwyybuzY148nbmwPOavA2PGioaT3-ZWWvju7ZDQ",
    quote:
      "Over $3M in bids won this quarter with their fast and accurate takeoff reports.",
  },
];

const rotations = [-2.5, 1.8, -2.2, 1.9, -1.8];

export default function VideoTestimonialsCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        track.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>(".tilted-card");
    const amount = card ? card.offsetWidth + 24 : 360;
    trackRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 md:py-20 bg-muted/20 relative overflow-hidden border-b border-border/80">
      {/* Navigation Arrow Left */}
      <Button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous"
        variant="outline"
        size="icon"
        className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-xs bg-card/90 backdrop-blur ${
          canScrollLeft
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowLeft size={16} />
      </Button>

      {/* Navigation Arrow Right */}
      <Button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Next"
        variant="outline"
        size="icon"
        className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-xs bg-card/90 backdrop-blur ${
          canScrollRight
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowRight size={16} />
      </Button>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="w-full flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-6 px-6 sm:px-14 md:px-20 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videoReviews.map((item, index) => {
          const rot = rotations[index % rotations.length];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              style={{ transform: `rotate(${rot}deg)` }}
              className="tilted-card flex-shrink-0 w-[290px] sm:w-[350px] md:w-[380px] bg-card rounded-2xl p-4 sm:p-5 shadow-sm relative cursor-pointer z-10 border border-border"
            >
              {/* Top Row: Avatar icon + Username + Quotation Mark Watermark */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground text-xs sm:text-sm tracking-tight">
                    {item.handle}
                  </span>
                </div>

                {/* Subtle Quote Watermark */}
                <div className="text-muted-foreground/20 font-serif text-3xl font-normal leading-none select-none">
                  &rdquo;&rdquo;
                </div>
              </div>

              {/* Video Letterbox Banner */}
              <div className="relative rounded-xl overflow-hidden aspect-[2.3/1] bg-black">
                <Image
                  src="/assets/trades/sitework.svg"
                  alt={item.handle}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 768px) 350px, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                {/* Bottom-left Play CTA */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-2 text-white">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-primary flex items-center justify-center shadow-xs">
                    <Play size={10} weight="Filled" className="ml-0.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-white drop-shadow-sm">
                      WATCH
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-white drop-shadow-sm">
                      THE REVIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Modal Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer"
            >
              <X size={16} />
            </button>
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <Image
                src="/assets/trades/sitework.svg"
                alt={selectedVideo.name}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                  <Play size={28} className="fill-current ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6 text-card-foreground space-y-2">
              <h3 className="font-medium text-base text-foreground">
                {selectedVideo.name}
              </h3>
              <p className="text-xs text-muted-foreground font-normal">
                {selectedVideo.handle} · {selectedVideo.role},{" "}
                {selectedVideo.company}
              </p>
              {selectedVideo.quote && (
                <p className="text-xs sm:text-sm text-muted-foreground italic border-t border-border pt-3 font-normal">
                  &ldquo;{selectedVideo.quote}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
