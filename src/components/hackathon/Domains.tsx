import { useEffect, useState, useRef } from "react";
import {
  Brain,
  Globe,
  Wallet,
  Heart,
  Leaf,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";








import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import SpotlightCard from "@/components/ui/SpotlightCard";

const domains = [
  {
    icon: Brain,
    title: "Education",
    description:
      "Build intelligent solutions using cutting-edge AI, deep learning, and machine learning technologies.",
    lottie: "https://lottie.host/0a969d1f-57e0-4dc3-8ef0-2284bca8e509/yqM9TwOa0T.lottie",
  },
  {
    icon: Globe,
    title: "Entertainment",
    description:
      "Design smart entertainment solutions using AI, deep learning, and machine learning to transform gaming, media, music, and digital experiences.",
    lottie: "https://lottie.host/1a55cbbf-48c7-4568-babb-749080daec0d/hkeM7pgAwE.lottie",
  },
  {
    icon: Wallet,
    title: "AI agents and automation",
    description:
      "Develop innovative solutions using Artificial Intelligence and Machine Learning to transform ideas into intelligent systems.",
    lottie: "https://lottie.host/fdd50a0b-4bba-4456-9bef-2fef4bfef0bc/v4gS4RsV95.lottie",
  },
  {
    icon: Heart,
    title: "Big Data and Mass Communication",
    description:
      "Design innovative platforms powered by Big Data to improve information dissemination, media analytics, and large-scale communication systems.",
    lottie: "https://lottie.host/c6550cc5-334c-4b1f-97b1-c9cbb76181b3/v13IgtleyA.lottie",
  },
  {
    icon: Leaf,
    title: "Core AI & ML",
    description:
      "Develop innovative solutions using Artificial Intelligence and Machine Learning to transform ideas into intelligent systems.",
    lottie: "https://lottie.host/6743c0ec-3e83-4905-bf98-1714ef82cdb5/PYnE9DenuY.lottie",
  },
  {
    icon: Lightbulb,
    title: "Cutting Agents & Automation",
    description:
      "Develop cutting-edge agents and automation technologies that transform how tasks are executed and systems interact.",
    lottie: "https://lottie.host/cdc62e12-fc8c-4718-8cb3-065d6d7ffe86/EyiVa619wc.lottie",
  },
];

export const Domains = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const text1 = "Hackathon";
  const text2 = "Tracks";

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <section id="tracks" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient inline-block">
              {text1.split("").map((char, i) => (
                <motion.span
                  key={`hackathon-${i}`}
                  custom={i}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            {" "}
            {text2.split("").map((char, i) => (
              <motion.span
                key={`tracks-${i}`}
                custom={text1.length + i}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={letterVariants}
                className="inline-block"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {`Choose your domain of interest and build solutions that make a difference`
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`word-${i}`}
                  custom={text1.length + text2.length + i}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={letterVariants}
                  className="inline-block mr-[0.25em]"
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
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
                    domain.lottie ? (
                      <DotLottieReact
                        // @ts-ignore
                        src={domain.lottie}
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    ) :
                      // @ts-ignore
                      domain.video ? (
                        <video
                          // @ts-ignore
                          src={domain.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform mix-blend-screen"
                        />
                      ) :
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
