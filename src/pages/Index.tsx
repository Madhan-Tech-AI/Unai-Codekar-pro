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
import { RegistrationForm } from "@/components/hackathon/RegistrationForm";

import { useState, useEffect } from "react";
// @ts-ignore
import LaserFlow from "@/components/LaserFlow";
import { useIsMobile } from "@/hooks/use-mobile";


const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 text-white bg-black pointer-events-none">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} className="pointer-events-none">
          <LaserFlow
            color="#a27aff"
            wispDensity={1}
            flowSpeed={0.35}
            verticalSizing={isMobile ? 8 : (isTablet ? 5 : 2)}
            horizontalSizing={isMobile ? 1.2 : (isTablet ? 0.8 : 0.5)}
            fogIntensity={isMobile ? 0.3 : (isTablet ? 0.25 : 0.2)}
            fogScale={isMobile ? 0.5 : (isTablet ? 0.4 : 0.3)}
            wispSpeed={15}
            wispIntensity={isMobile ? 4 : 3}
            flowStrength={0.25}
            decay={1.1}
            horizontalBeamOffset={0}
            verticalBeamOffset={isMobile ? -0.2 : (isTablet ? -0.3 : -0.5)}
          />
        </div>
      </div>
      <div className="relative z-10">

        {showNavbar && <Navbar onApplyClick={() => {
          console.log("Navbar Apply Clicked");
          setIsRegistrationOpen(true);
        }} />}
        <Hero
          onIntroComplete={() => setShowNavbar(true)}
          onApplyClick={() => {
            console.log("Hero Apply Clicked - Opening Registration");
            setIsRegistrationOpen(true);
          }}
        />
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
      <RegistrationForm isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </main >
  );
};

export default Index;
