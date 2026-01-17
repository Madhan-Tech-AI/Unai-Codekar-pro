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

import { useState } from "react";
// @ts-ignore
import LaserFlow from "@/components/LaserFlow";
import { useIsMobile } from "@/hooks/use-mobile";


const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const isMobile = useIsMobile();

  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 text-white bg-black">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <LaserFlow
            color="#a27aff"
            wispDensity={1}
            flowSpeed={0.35}
            verticalSizing={isMobile ? 3 : 2}
            horizontalSizing={isMobile ? 0.8 : 0.5}
            fogIntensity={isMobile ? 0.1 : 0.2}
            fogScale={0.3}
            wispSpeed={15}
            wispIntensity={isMobile ? 2 : 3}
            flowStrength={0.25}
            decay={1.1}
            horizontalBeamOffset={0}
            verticalBeamOffset={-0.5}
          />
        </div>
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
    </main >
  );
};

export default Index;
