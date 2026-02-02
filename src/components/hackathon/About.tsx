import { useEffect, useState, useRef } from "react";
import { Users, Building2, MapPin, Trophy, Eye, Target } from "lucide-react";
import MagicBento, { BentoItem, ParticleCard } from "@/components/ui/MagicBento";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Total Registrations", color: "transparent" },
  { icon: Building2, value: 200, suffix: "+", label: "Colleges Participated", color: "transparent" },
  { icon: MapPin, value: 50, suffix: "+", label: "Cities Covered", color: "transparent" },
  { icon: Trophy, value: 10, suffix: "L+", label: "Prize Pool", color: "transparent" },
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
            CodeKar is a student-focused hackathon platform organized by UNAI TECH, dedicated to fostering innovation through hands-on learning.

            UNAI TECH independently conducts hackathons and workshops while collaborating with esteemed corporate companies and educational institutions to provide students with industry exposure, mentorship, and growth opportunities. Our initiatives are designed to bridge the gap between academic learning and real-world technology applications.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <ParticleCard
                className="magic-bento-card relative h-full min-h-[300px] flex flex-col justify-between p-8 bg-transparent border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="magic-bento-card__header mb-6">
                  <div className="magic-bento-card__label text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Vision</div>
                  <Eye className="w-8 h-8 text-primary mb-2" />
                </div>
                <div className="magic-bento-card__content mt-auto">
                  <h2 className="magic-bento-card__title text-2xl font-bold text-white mb-2">Our Vision</h2>
                  <p className="magic-bento-card__description text-muted-foreground leading-relaxed">
                    To create meaningful opportunities for students by offering hands-on practical experience, real-world project exposure, and internship opportunities with reputed corporate institutions—preparing them for industry-ready careers.
                  </p>
                </div>
              </ParticleCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <ParticleCard
                className="magic-bento-card relative h-full min-h-[300px] flex flex-col justify-between p-8 bg-transparent border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="magic-bento-card__header mb-6">
                  <div className="magic-bento-card__label text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Mission</div>
                  <Target className="w-8 h-8 text-primary mb-2" />
                </div>
                <div className="magic-bento-card__content mt-auto">
                  <h2 className="magic-bento-card__title text-2xl font-bold text-white mb-2">Our Mission</h2>
                  <p className="magic-bento-card__description text-muted-foreground leading-relaxed">
                    To build a future-ready student ecosystem that encourages innovation, skill development, and real-world impact through technology and industry collaboration.
                  </p>
                </div>
              </ParticleCard>
            </motion.div>
          </div>
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
