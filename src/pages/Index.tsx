import { Navbar } from "@/components/hackathon/Navbar";
import { Hero } from "@/components/hackathon/Hero";
import { About } from "@/components/hackathon/About";
import { Domains } from "@/components/hackathon/Domains";
import { Prizes } from "@/components/hackathon/Prizes";
import { SponsorChallenges } from "@/components/hackathon/SponsorChallenges";
import { JudgesMentors } from "@/components/hackathon/JudgesMentors";
import { Sponsors } from "@/components/hackathon/Sponsors";

import { Team } from "@/components/hackathon/Team";
import { FAQ } from "@/components/hackathon/FAQ";
import { Footer } from "@/components/hackathon/Footer";
import { RegistrationForm } from "@/components/hackathon/RegistrationForm";

import { useState, useEffect } from "react";
// @ts-ignore
import LaserFlow from "@/components/LaserFlow";



const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);


  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 text-white bg-black pointer-events-none">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} className="pointer-events-none">
          <LaserFlow
            color="#c37aff"
            wispDensity={1}
            flowSpeed={0.5}
            verticalSizing={2}
            horizontalSizing={0.5}
            fogIntensity={0.45}
            fogScale={0.3}
            wispSpeed={15}
            wispIntensity={5}
            flowStrength={0.25}
            decay={1.1}
            horizontalBeamOffset={0}
            verticalBeamOffset={-0.5}
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

        <Team />
        <FAQ />
        <Footer />
      </div>
      <RegistrationForm isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </main >
  );
};

export default Index;
