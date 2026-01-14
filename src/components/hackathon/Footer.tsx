import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Github, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Prizes", href: "#prizes" },

  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

export const Footer = () => {
  return (
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
            <a href="#" className="text-3xl font-bold text-gradient mb-4 block">
              CodeKar
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">
                    contact@codekar.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">
                    CodeKar HQ,
                    <br />
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CodeKar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by the Organizing Team
          </p>
        </div>
      </div>
    </footer>
  );
};
