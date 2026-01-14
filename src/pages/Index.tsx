import { Navbar } from "@/components/hackathon/Navbar";
import { Hero } from "@/components/hackathon/Hero";
import { About } from "@/components/hackathon/About";
import { Domains } from "@/components/hackathon/Domains";
import { Prizes } from "@/components/hackathon/Prizes";
import { SponsorChallenges } from "@/components/hackathon/SponsorChallenges";
import { JudgesMentors } from "@/components/hackathon/JudgesMentors";
import { Sponsors } from "@/components/hackathon/Sponsors";
import { Gallery } from "@/components/hackathon/Gallery";
import { Team } from "@/components/hackathon/Team";
import { FAQ } from "@/components/hackathon/FAQ";
import { Footer } from "@/components/hackathon/Footer";

import LaserFlow from "@/components/ui/LaserFlow";

import { useState } from "react";
// ... existing imports

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 text-white bg-black">
        <LaserFlow
          color="#5c21b5"
          wispDensity={1}
          flowSpeed={0.35}
          verticalSizing={1.6}
          horizontalSizing={0.4}
          fogIntensity={0.65}
          fogScale={0.3}
          wispSpeed={11}
          wispIntensity={4}
          flowStrength={0.25}
          decay={1.1}
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.5}
        />
      </div>
      <div className="relative z-10">
        {showNavbar && <Navbar />}
        <Hero onIntroComplete={() => setShowNavbar(true)} />
        <About />
        <Domains />
        <Prizes />
        <SponsorChallenges />
        <JudgesMentors />
        <Sponsors />
        <Gallery />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
