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
import LightPillar from "@/components/ui/LightPillar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
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
