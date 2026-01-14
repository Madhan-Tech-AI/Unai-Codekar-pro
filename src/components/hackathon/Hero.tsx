import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}


      {/* Grid overlay */}
      {/* Grid overlay */}


      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Event badge */}


        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-gradient glow">HACKATHON</span>
          <br />
          <span className="text-foreground">CodeKar 2026</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          Innovation, Creativity, and Building the Future
        </p>

        {/* Event details */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>February 15-17, 2026</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Chennai,Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>50+ Hackers</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 card-glow"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
          >
            Join Community
          </Button>
        </div>

        {/* Scroll indicator */}

      </div>
    </section>
  );
};
