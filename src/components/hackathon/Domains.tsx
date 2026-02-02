import {
  Brain,
  Globe,
  Wallet,
  Heart,
  Leaf,
  Lightbulb,
} from "lucide-react";

import webAppImg from "@/assets/tracks/web-app.png";
import healthcareImg from "@/assets/tracks/healthcare.png";
import fintechImg from "@/assets/tracks/fintech.png";
import sustainabilityImg from "@/assets/tracks/sustainability.png";
import openInnovationImg from "@/assets/tracks/open-innovation.png";
import aiImg from "@/assets/tracks/ai.png";
import SpotlightCard from "@/components/ui/SpotlightCard";

const domains = [
  {
    icon: Brain,
    title: "Education",
    description:
      "Build intelligent solutions using cutting-edge AI, deep learning, and machine learning technologies.",
    image: aiImg,
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "Create innovative web and mobile applications that enhance user experiences and solve real problems.",
    image: webAppImg,
  },
  {
    icon: Wallet,
    title: "FinTech",
    description:
      "Revolutionize financial services with blockchain, digital payments, and innovative banking solutions.",
    image: fintechImg,
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Develop solutions that improve healthcare accessibility, diagnostics, and patient care systems.",
    image: healthcareImg,
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Address environmental challenges with technology solutions for climate change and sustainability.",
    image: sustainabilityImg,
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "Bring any groundbreaking idea to life. No limits, no boundaries—just pure innovation.",
    image: openInnovationImg,
  },
];

export const Domains = () => {
  return (
    <section id="tracks" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hackathon</span> Tracks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose your domain of interest and build solutions that make a difference
          </p>
        </div>

        {/* Domains grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <SpotlightCard
              key={index}
              className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                  {
                    // @ts-ignore
                    domain.image ? (
                      // @ts-ignore
                      <img src={domain.image} alt={domain.title} className="w-8 h-8 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform" />
                    ) : (
                      <domain.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    )
                  }
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
