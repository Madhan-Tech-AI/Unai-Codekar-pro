import { useEffect, useState, useRef } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const stats = [
  { icon: null, lottie: "https://lottie.host/54a53bec-d6c0-402f-8474-5049124b3e57/lR3OqzeVjc.lottie", value: 5000, suffix: "+", label: "Total Registrations", color: "transparent" },
  { icon: null, lottie: "https://lottie.host/929d7d37-9260-4c0f-a831-0ad42b25c134/u3uknWnoYo.lottie", value: 200, suffix: "+", label: "Colleges Participated", color: "transparent", lottieClass: "[filter:invert(48%)_sepia(79%)_saturate(3092%)_hue-rotate(230deg)_brightness(99%)_contrast(106%)]" },
  { icon: null, lottie: "https://lottie.host/432d41cd-278d-44b0-ac0d-7edf08362bd8/6BmhPi3b6J.lottie", value: 50, suffix: "+", label: "Cities Covered", color: "transparent", lottieClass: "[filter:invert(48%)_sepia(79%)_saturate(3092%)_hue-rotate(230deg)_brightness(99%)_contrast(106%)]" },
  { icon: null, lottie: "https://lottie.host/1d969f47-16df-4949-85fb-e756f0a08fb4/QaOoBmaaGx.lottie", value: 10, suffix: "L+", label: "Prize Pool", color: "transparent", lottieClass: "[filter:invert(48%)_sepia(79%)_saturate(3092%)_hue-rotate(230deg)_brightness(99%)_contrast(106%)]" },
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
              <div
                className="relative h-full min-h-[300px] flex flex-col justify-between p-8 bg-transparent border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Vision</div>
                  <div className="w-12 h-12 mb-2">
                    <DotLottieReact
                      src="https://lottie.host/a47e918e-29ac-4600-827f-7dde5730c172/kUO9nK7fc3.lottie"
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <h2 className="text-2xl font-bold text-white mb-2">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To create meaningful opportunities for students by offering hands-on practical experience, real-world project exposure, and internship opportunities with reputed corporate institutions—preparing them for industry-ready careers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <div
                className="relative h-full min-h-[300px] flex flex-col justify-between p-8 bg-transparent border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">Mission</div>
                  <div className="w-12 h-12 mb-2">
                    <DotLottieReact
                      src="https://lottie.host/236d65bd-2e0b-4e53-8062-6d0534057809/3RPglDmJjv.lottie"
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a future-ready student ecosystem that encourages innovation, skill development, and real-world impact through technology and industry collaboration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        {/* Stats */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <SpotlightCard
                key={index}
                className="relative p-8 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center group"
                spotlightColor="rgba(0, 229, 255, 0.1)"
              >
                <div className="relative z-10">
                  {/* @ts-ignore */}
                  {stat.lottie ? (
                    <div className="w-16 h-16 mx-auto mb-2">
                      <DotLottieReact
                        // @ts-ignore
                        src={stat.lottie}
                        loop
                        autoplay
                        className={`w-full h-full ${stat.lottieClass || ''}`}
                      />
                    </div>
                  ) : (
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CounterAnimation target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
