import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
// @ts-ignore
import GradientText from "@/components/GradientText";
import TextType from "@/components/ui/TextType";
import { useEffect } from "react";

export const Hero = ({ onIntroComplete, onApplyClick }: { onIntroComplete?: () => void; onApplyClick?: () => void }) => {
  useEffect(() => {
    if (onIntroComplete) onIntroComplete();
  }, [onIntroComplete]);

  const handleApply = () => {
    console.log("Hero: Apply Now clicked");
    if (onApplyClick) onApplyClick();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in pointer-events-none">
      {/* Grid overlay */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in pointer-events-auto">

        {/* Main title */}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={10}
          showBorder={false}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl 4xl:text-[11rem] font-bold font-chakra"
        >
          CODEKAR
        </GradientText>


        {/* Tagline */}
        <div className="text-xl md:text-2xl 3xl:text-4xl text-slate-300 max-w-2xl 3xl:max-w-4xl mx-auto mb-8 3xl:mb-12 animate-fade-in-up animation-delay-400">
          <TextType
            text={["Innovation, Creativity, and Building the Future", "Join 50+ Hackers at CodeKar 2026", "Build solutions that make a difference"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            cursorCharacter="_"
          />
        </div>

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
        <div className="relative z-[100] flex md:hidden flex-col sm:flex-row justify-center gap-4 lg:gap-8 animate-fade-in-up animation-delay-600 w-full px-4 sm:px-0 pointer-events-auto">
          <Button
            size="lg"
            onClick={handleApply}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg lg:text-xl 2xl:text-2xl px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 2xl:px-12 2xl:py-8 shadow-lg shadow-primary/20 cursor-pointer pointer-events-auto relative z-50 transition-transform duration-300 hover:scale-105 active:scale-95"
            style={{ zIndex: 9999 }}
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 2xl:w-8 2xl:h-8" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary/50 text-primary bg-background/80 backdrop-blur-md hover:bg-primary/20 text-lg lg:text-xl 2xl:text-2xl px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 2xl:px-12 2xl:py-8 cursor-pointer pointer-events-auto relative z-50 transition-colors duration-300"
          >
            Join Community
          </Button>
        </div>
      </div>
    </section >
  );
};
