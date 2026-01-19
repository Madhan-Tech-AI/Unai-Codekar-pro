import { Trophy, Medal, Award, Users, GraduationCap } from "lucide-react";

const mainPrizes = [
  {
    icon: Trophy,
    position: "Winner",
    color: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: Medal,
    position: "1st Runner-Up",
    color: "from-slate-300 to-slate-500",
    borderColor: "border-slate-400/50",
  },
  {
    icon: Award,
    position: "2nd Runner-Up",
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-700/50",
  },
];

export const Prizes = () => {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Prizes</span> &amp; Rewards
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
              className={`rounded-2xl p-8 text-center hover:card-glow transition-all duration-300 group border ${prize.borderColor} hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                <prize.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {prize.position}
              </h3>
              <p className="text-sm text-muted-foreground">
                Awards and Certificates
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
