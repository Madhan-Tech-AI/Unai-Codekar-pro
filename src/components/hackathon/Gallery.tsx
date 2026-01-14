const galleryImages = [
  { id: 1, alt: "Hackers collaborating" },
  { id: 2, alt: "Workshop session" },
  { id: 3, alt: "Team presenting" },
  { id: 4, alt: "Mentor guiding students" },
  { id: 5, alt: "Prize ceremony" },
  { id: 6, alt: "Networking event" },
  { id: 7, alt: "Late night coding" },
  { id: 8, alt: "Group photo" },
];

export const Gallery = () => {
  return (
    <section className="py-24 relative bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Event</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Moments captured from our previous hackathon editions
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`glass rounded-xl overflow-hidden group cursor-pointer hover:card-glow transition-all duration-300 ${index === 0 || index === 7 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <div
                className={`bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${index === 0 || index === 7
                  ? "aspect-square md:aspect-auto md:h-full"
                  : "aspect-square"
                  }`}
              >
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            More photos coming soon from our upcoming event!
          </p>
        </div>
      </div>
    </section>
  );
};
