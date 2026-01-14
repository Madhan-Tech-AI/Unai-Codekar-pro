import {
  Brain,
  Globe,
  Wallet,
  Heart,
  Leaf,
  Lightbulb,
} from "lucide-react";

const domains = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Build intelligent solutions using cutting-edge AI, deep learning, and machine learning technologies.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "Create innovative web and mobile applications that enhance user experiences and solve real problems.",
  },
  {
    icon: Wallet,
    title: "FinTech",
    description:
      "Revolutionize financial services with blockchain, digital payments, and innovative banking solutions.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Develop solutions that improve healthcare accessibility, diagnostics, and patient care systems.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Address environmental challenges with technology solutions for climate change and sustainability.",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description:
      "Bring any groundbreaking idea to life. No limits, no boundaries—just pure innovation.",
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
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:card-glow transition-all duration-300 group cursor-pointer hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <domain.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {domain.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
