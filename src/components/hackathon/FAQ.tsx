import { useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to all college students, high school students (16+), and recent graduates. You can participate individually or in teams of 2-4 members. We encourage diverse teams with different skill sets.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation in the hackathon is completely free! We provide free food, swag, and access to all workshops and mentorship sessions for all registered participants.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, student ID, and any hardware you might need for your project. We'll provide the venue, internet, meals, and all the energy drinks you need to stay awake!",
  },
  {
    question: "Do I need to have a team beforehand?",
    answer:
      "Not necessarily! While you can register with a pre-formed team, we also have team formation activities at the beginning of the event. Solo hackers are welcome to find teammates during the event.",
  },
  {
    question: "What kind of projects can I build?",
    answer:
      "You can build anything! Web apps, mobile apps, hardware projects, AI/ML solutions, games, tools — the possibilities are endless. Just make sure your project fits into one of our hackathon tracks.",
  },
  {
    question: "Will there be food and accommodation?",
    answer:
      "Yes! We provide all meals (breakfast, lunch, dinner, and midnight snacks) throughout the hackathon. Sleeping arrangements with sleeping bags are available at the venue for those who want to rest.",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects are judged based on: Innovation & Creativity (25%), Technical Complexity (25%), Practical Impact (25%), and Presentation & Demo (25%). Our judges look for unique solutions that solve real problems.",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer:
      "No, all code must be written during the hackathon. However, you can come with ideas, designs, and research. Using open-source libraries and APIs is allowed and encouraged!",
  },
];

export const FAQ = () => {
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

  const text1 = "Frequently";
  const text2 = "Asked Questions";

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
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient inline-block">
              {text1.split("").map((char, i) => (
                <motion.span
                  key={`frequently-${i}`}
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
                key={`asked-${i}`}
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
            Everything you need to know about the hackathon
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" rounded-xl border border-border px-6 data-[state=open]:border-primary/50 data-[state=open]:card-glow transition-all"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a
            href="mailto:contact@unai.com"
            className="text-primary hover:underline font-medium"
          >
            Reach out to us at contact@unai.com
          </a>
        </div>
      </div>
    </section>
  );
};
