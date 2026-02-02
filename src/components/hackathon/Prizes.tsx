import { Trophy, Medal, Award, Users, GraduationCap } from "lucide-react";
import PixelCard from "@/components/ui/PixelCard";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const mainPrizes = [
  {
    icon: null,
    lottie: "https://lottie.host/7911d3c9-bb99-48c4-8e77-2a018c342b5e/eGzZ5mmZgq.lottie",
    position: "Winner",
    color: null,
    borderColor: "border-yellow-500/50",
    variant: "yellow" as const,
  },
  {
    icon: null,
    lottie: "https://lottie.host/a30edad9-e63e-49c3-9329-23928fd4a986/rIrewqZR9O.lottie",
    position: "1st Runner-Up",
    color: null,
    borderColor: "border-slate-400/50",
    variant: "blue" as const,
  },
  {
    icon: null,
    lottie: "https://lottie.host/a30edad9-e63e-49c3-9329-23928fd4a986/rIrewqZR9O.lottie",
    position: "2nd Runner-Up",
    color: null,
    lottieClass: "[filter:invert(56%)_sepia(55%)_saturate(644%)_hue-rotate(345deg)_brightness(96%)_contrast(95%)]",
    borderColor: "border-amber-700/50",
    variant: "pink" as const,
  },
];

export const Prizes = () => {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Prizes</span> &amp; Rewards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compete for exciting prizes and recognition from industry leaders
          </p>
        </div>

        {/* Main prizes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainPrizes.map((prize, index) => (
            <div key={index} className="h-[400px]">
              <PixelCard
                variant={prize.variant}
                className={`rounded-2xl border ${prize.borderColor} transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center" style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
                  <div
                    className={`${prize.color ? `w-20 h-20 rounded-full bg-gradient-to-br ${prize.color}` : 'w-48 h-48'} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {/* @ts-ignore */}
                    {prize.lottie ? (
                      <div className="w-full h-full">
                        <DotLottieReact
                          // @ts-ignore
                          src={prize.lottie}
                          loop
                          autoplay
                          // @ts-ignore
                          className={`w-full h-full ${(prize as any).lottieClass || ''}`}
                        />
                      </div>
                    ) : (
                      <prize.icon className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {prize.position}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Awards and Certificates
                  </p>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
