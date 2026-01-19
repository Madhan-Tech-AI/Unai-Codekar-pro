import { Mail, MapPin, Phone, Instagram, Linkedin, X } from "lucide-react";

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
  { icon: X, href: "https://x.com/UnaiTech74505?s=20", label: "X" },
];

export const Footer = () => {
  return (
    <footer className="py-16 relative">
      <div className="container mx-auto px-4">
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
                  <a href="mailto:contact@UNAI.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@UNAI.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <a href="tel:+918428293603" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 84282 93603
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">
                    UNAI Tech,
                    <br />
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CodeKar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            UNAI Crafted by <a href="https://www.linkedin.com/in/anjali-patel-3439b2278" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">Anjali</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
