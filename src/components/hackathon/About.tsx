import { useEffect, useState, useRef } from "react";
import { Users, Building2, MapPin, Trophy, Eye, Target } from "lucide-react";
import MagicBento, { BentoItem } from "@/components/ui/MagicBento";

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
            <span className="text-gradient">About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join the ultimate innovation challenge where brilliant minds come
            together to build, learn, and create solutions for tomorrow.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <MagicBento
            items={[
              {
                title: "Our Vision",
                description:
                  "To create India's largest student-run hackathon ecosystem that empowers the next generation of innovators, entrepreneurs, and problem-solvers. We believe in the power of collaboration, creativity, and technology to solve real-world challenges.",
                label: "Vision",
                header: <Eye className="w-8 h-8 text-primary mb-2" />,
              },
              {
                title: "Our Mission",
                description:
                  "To provide a platform where students from diverse backgrounds can showcase their skills, learn from industry experts, network with like-minded individuals, and transform innovative ideas into impactful solutions that benefit society.",
                label: "Mission",
                header: <Target className="w-8 h-8 text-primary mb-2" />,
              },
            ]}
            gridClassName="grid-cols-1 md:grid-cols-2 gap-8"
            spotlightRadius={200}
          />
        </div>

        {/* Stats */}
        {/* Stats */}
        <div>
          <MagicBento
            items={stats.map((stat) => ({
              title: (
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </div>
              ),
              description: stat.label,
              label: "Stats",
              header: (
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              ),
            }))}
            gridClassName="grid-cols-2 md:grid-cols-4 gap-6"
            spotlightRadius={150}
          />
        </div>
      </div>
    </section>
  );
};
