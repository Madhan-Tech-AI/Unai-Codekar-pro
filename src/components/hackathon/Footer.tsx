<<<<<<< HEAD
import { Mail, MapPin, Phone, Instagram, Linkedin, X } from "lucide-react";
=======
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Github, MessageCircle } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
>>>>>>> 4286de09de9cd2dabda1a05e9c16bc4161eaeb63

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },

  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/unai.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/unai-tech-2177072a0/", label: "LinkedIn" },
  { image: "/x-logo.png", href: "https://x.com/UnaiTech74505?s=20", label: "X" },
];

export const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="py-4 relative">
      <div className="container mx-auto px-4">
        <div className="glass rounded-xl p-4 md:p-6">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#" className="flex items-center mb-2">
                <img src="/unai-logo.png" alt="UNAI" className="h-6 w-auto" />
              </a>
              <p className="text-muted-foreground mb-4 max-w-md text-xs">
                Join India's premier student hackathon and build solutions that
                matter. 48 hours of innovation.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {/* @ts-ignore */}
                    {social.icon ? <social.icon className="w-3.5 h-3.5" /> : <img src={social.image} alt={social.label} className="w-3.5 h-3.5 invert" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Quick Links
              </h4>
              <ul className="space-y-1 text-xs">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Contact Us
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary mt-0.5" />
                  <div>
                    <a href="mailto:contact@unai.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@unai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary mt-0.5" />
                  <div>
                    <a href="tel:+918428293603" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 84282 93603
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">
                      UNAI Tech, Chennai
                    </p>
                  </div>
                </li>
              </ul>
=======
    <footer className="py-16 relative border-t border-border mt-20">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="mb-20">
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10 group hover:border-primary/50 transition-colors duration-500">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                Start Exploring
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Animations, Components, Backgrounds - One Click Away
              </p>
              <a
                href="/get-started/index"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Browse Components
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="mb-4 block">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="text-3xl font-bold"
              >
                CodeKar
              </GradientText>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join India's premier student hackathon and build solutions that
              matter. 48 hours of innovation, collaboration, and endless
              possibilities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
>>>>>>> 4286de09de9cd2dabda1a05e9c16bc4161eaeb63
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-[10px] text-muted-foreground">
              © 2026 UNAI. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground">
              UNAI Crafted
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
