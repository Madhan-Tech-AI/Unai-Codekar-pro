import { Navbar } from "@/components/hackathon/Navbar";
import { Hero } from "@/components/hackathon/Hero";
import { About } from "@/components/hackathon/About";
import { Domains } from "@/components/hackathon/Domains";
import { Prizes } from "@/components/hackathon/Prizes";
import { SponsorChallenges } from "@/components/hackathon/SponsorChallenges";

import { Sponsors } from "@/components/hackathon/Sponsors";

import { Team } from "@/components/hackathon/Team";
import { FAQ } from "@/components/hackathon/FAQ";
import { Footer } from "@/components/hackathon/Footer";
import { RegistrationForm } from "@/components/hackathon/RegistrationForm";

import { useState } from "react";



const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background relative">
      {/* Background video removed */}
      {/* <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/background-video-final.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div> */}


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
