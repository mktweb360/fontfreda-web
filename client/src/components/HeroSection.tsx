import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  children?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  children,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-white mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-lg md:text-xl text-white/95 mb-8 drop-shadow-md font-light">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <Button
              onClick={primaryCTA.onClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
            >
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button
              onClick={secondaryCTA.onClick}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>

        {/* Additional Content */}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
