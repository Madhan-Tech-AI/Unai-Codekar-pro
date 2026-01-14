import { Trophy, Medal, Award, Users, GraduationCap } from "lucide-react";

const mainPrizes = [
  {
    icon: Trophy,
    position: "Winner",
    amount: "₹3,00,000",
    color: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: Medal,
    position: "1st Runner-Up",
    amount: "₹1,50,000",
    color: "from-slate-300 to-slate-500",
    borderColor: "border-slate-400/50",
  },
  {
    icon: Award,
    position: "2nd Runner-Up",
    amount: "₹75,000",
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-700/50",
  },
];

const specialPrizes = [
  {
    icon: Users,
    title: "Best All-Girls Team",
    amount: "₹50,000",
    description: "Celebrating women in tech",
  },
  {
    icon: GraduationCap,
    title: "Best High School Team",
    amount: "₹50,000",
    description: "Young innovators category",
  },
];

export const Prizes = () => {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Prizes</span> & Rewards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compete for exciting prizes and recognition from industry leaders
          </p>
        </div>

        {/* Main prizes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainPrizes.map((prize, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 text-center hover:card-glow transition-all duration-300 group border ${prize.borderColor} hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                <prize.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {prize.position}
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">
                {prize.amount}
              </p>
              <p className="text-sm text-muted-foreground">
                + Goodies, Swags & Certificates
              </p>
            </div>
          ))}
        </div>

        {/* Special prizes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {specialPrizes.map((prize, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 flex items-center gap-6 hover:card-glow transition-all duration-300 group border border-primary/20 hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <prize.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  {prize.title}
                </h4>
                <p className="text-xl font-bold text-primary mb-1">
                  {prize.amount}
                </p>
                <p className="text-sm text-muted-foreground">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
