import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Damage Repair",
    description: "Restore torn, cracked, or water-damaged photographs with precision techniques.",
    features: ["Tear reconstruction", "Water damage repair", "Crease removal", "Missing piece restoration"]
  },
  {
    title: "Color Restoration", 
    description: "Revive faded colors and enhance the original beauty of your vintage photos.",
    features: ["Fade correction", "Color enhancement", "Sepia conversion", "Black & white colorization"]
  },
  {
    title: "Digital Enhancement",
    description: "Professional digital techniques to improve clarity, contrast, and overall quality.",
    features: ["Contrast adjustment", "Sharpness enhancement", "Dust & scratch removal", "Background cleanup"]
  },
  {
    title: "Format Conversion",
    description: "Convert your restored photos to modern digital formats for easy sharing and preservation.",
    features: ["High-resolution scanning", "Digital archiving", "Multiple format options", "Print-ready files"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sepia-dark mb-4">
            Restoration Services
          </h2>
          <p className="text-xl text-sepia-medium max-w-2xl mx-auto font-light">
            Professional photo restoration services to preserve your family history and treasured memories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-sepia-light shadow-soft hover:shadow-photo transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-medium text-sepia-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-sepia-medium mb-4 font-light leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-sepia-medium/80 flex items-center">
                      <span className="w-1.5 h-1.5 bg-restoration-gold rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;