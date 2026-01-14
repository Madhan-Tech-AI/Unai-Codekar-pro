import { useEffect, useState, useRef } from "react";
import { Users, Building2, MapPin, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Total Registrations" },
  { icon: Building2, value: 200, suffix: "+", label: "Colleges Participated" },
  { icon: MapPin, value: 50, suffix: "+", label: "Cities Covered" },
  { icon: Trophy, value: 10, suffix: "L+", label: "Prize Pool" },
];

const CounterAnimation = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> The Hackathon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join the ultimate innovation challenge where brilliant minds come
            together to build, learn, and create solutions for tomorrow.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 card-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create India's largest student-run hackathon ecosystem that
              empowers the next generation of innovators, entrepreneurs, and
              problem-solvers. We believe in the power of collaboration,
              creativity, and technology to solve real-world challenges.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 card-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a platform where students from diverse backgrounds can
              showcase their skills, learn from industry experts, network with
              like-minded individuals, and transform innovative ideas into
              impactful solutions that benefit society.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:card-glow transition-all duration-300 group"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
