const sponsorTiers = [
  {
    tier: "Title Sponsor",
    sponsors: [{ name: "TechGiant Corp", logo: "TG" }],
    size: "large",
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "CloudFirst", logo: "CF" },
      { name: "DataFlow Inc", logo: "DF" },
      { name: "AI Ventures", logo: "AV" },
    ],
    size: "medium",
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      { name: "DevTools Pro", logo: "DP" },
      { name: "SecureNet", logo: "SN" },
      { name: "WebScale", logo: "WS" },
      { name: "CodeCraft", logo: "CC" },
    ],
    size: "small",
  },
  {
    tier: "Community Partners",
    sponsors: [
      { name: "DevCommunity", logo: "DC" },
      { name: "TechTalks", logo: "TT" },
      { name: "CodeClub", logo: "CL" },
      { name: "HackersUnite", logo: "HU" },
      { name: "StartupHub", logo: "SH" },
      { name: "InnovateLab", logo: "IL" },
    ],
    size: "xsmall",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our</span> Sponsors & Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Made possible by our amazing sponsors and community partners
          </p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {tier.tier}
              </h3>
              <div
                className={`flex flex-wrap justify-center gap-4 ${tier.size === "large" ? "gap-8" : ""
                  }`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className={`glass rounded-xl flex items-center justify-center hover:card-glow transition-all duration-300 group border border-border hover:border-primary/50 cursor-pointer ${tier.size === "large"
                      ? "w-48 h-32 md:w-64 md:h-40"
                      : tier.size === "medium"
                        ? "w-36 h-24 md:w-48 md:h-32"
                        : tier.size === "small"
                          ? "w-28 h-20 md:w-36 md:h-24"
                          : "w-24 h-16 md:w-28 md:h-20"
                      }`}
                  >
                    <div
                      className={`font-bold text-muted-foreground group-hover:text-primary transition-colors ${tier.size === "large"
                        ? "text-4xl md:text-5xl"
                        : tier.size === "medium"
                          ? "text-2xl md:text-3xl"
                          : tier.size === "small"
                            ? "text-xl md:text-2xl"
                            : "text-lg"
                        }`}
                    >
                      {sponsor.logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to sponsor our hackathon?
          </p>
          <a
            href="mailto:sponsors@unai.com"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Contact us for sponsorship opportunities
          </a>
        </div>
      </div>
    </section>
  );
};
