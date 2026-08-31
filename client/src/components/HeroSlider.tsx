import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export interface HeroSlide {
  id: string;
  backgroundImage: string;
  eyebrow?: string;
  title: string;
  titleTag?: "h1" | "h2";
  subtitle: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    label: string;
    onClick?: () => void;
  };
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoplayMs?: number;
}

export default function HeroSlider({ slides, autoplayMs = 7000 }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length, autoplayMs]);

  const goTo = (i: number) => setActive(((i % slides.length) + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => {
        const Heading = (slide.titleTag ?? "h2") as "h1" | "h2";
        const isActive = i === active;
        return (
          <div
            key={slide.id}
            className={
              "absolute inset-0 flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out " +
              (isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")
            }
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
            role="group"
            aria-roledescription="slide"
            aria-hidden={!isActive}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
              {slide.eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
                  {slide.eyebrow}
                </p>
              )}
              <Heading className="text-white mb-4 drop-shadow-lg">{slide.title}</Heading>
              <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-md font-light">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {slide.primaryCTA && (
                  <Button
                    onClick={slide.primaryCTA.onClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
                  >
                    {slide.primaryCTA.label}
                  </Button>
                )}
                {slide.secondaryCTA && (
                  <Button
                    onClick={slide.secondaryCTA.onClick}
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
                  >
                    {slide.secondaryCTA.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Diapositiva anterior"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Siguiente diapositiva"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={i === active}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === active ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80")
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
