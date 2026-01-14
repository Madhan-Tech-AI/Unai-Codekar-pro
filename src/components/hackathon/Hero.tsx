import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import TrueFocus from "@/components/ui/TrueFocus";
import { useEffect } from "react";

export const Hero = ({ onIntroComplete }: { onIntroComplete?: () => void }) => {
  useEffect(() => {
    if (onIntroComplete) onIntroComplete();
  }, [onIntroComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in bg-background pt-20">
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        {/* Main title */}
        <div className="flex flex-col items-center justify-center mb-6 mt-32 md:mt-20 gap-4">
          <div className="scale-90 md:scale-125 origin-center">
            <TrueFocus
              sentence="HACKATHON"
              manualMode={false}
              blurAmount={5}
              borderColor="#40ffaa"
              animationDuration={1}
              pauseBetweenAnimations={0.5}
            />
          </div>
          <div className="scale-90 md:scale-125 origin-center -mt-10 md:-mt-6">
            <TrueFocus
              sentence="CodeKar 2026"
              manualMode={false}
              blurAmount={5}
              borderColor="#40ffaa"
              animationDuration={1}
              pauseBetweenAnimations={0.5}
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl 3xl:text-4xl text-slate-300 max-w-2xl 3xl:max-w-4xl mx-auto mb-8 3xl:mb-12 animate-fade-in-up animation-delay-400">
          Innovation, Creativity, and Building the Future
        </p>

        {/* Event details */}
        <div className="flex flex-wrap justify-center gap-6 3xl:gap-12 mb-10 3xl:mb-16 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-slate-300 3xl:text-2xl">
            <Calendar className="w-5 h-5 3xl:w-8 3xl:h-8 text-primary" />
            <span>February 15-17, 2026</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 3xl:text-2xl">
            <MapPin className="w-5 h-5 3xl:w-8 3xl:h-8 text-primary" />
            <span>Chennai,Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 3xl:text-2xl">
            <Users className="w-5 h-5 3xl:w-8 3xl:h-8 text-primary" />
            <span>50+ Hackers</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 3xl:gap-8 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg 3xl:text-2xl px-8 py-6 3xl:px-12 3xl:py-8 card-glow"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 3xl:w-8 3xl:h-8" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg 3xl:text-2xl px-8 py-6 3xl:px-12 3xl:py-8"
          >
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};
