import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restoration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Professional photo restoration workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-sepia-dark mb-6 leading-tight">
            Restore Your
            <span className="block text-sepia-medium italic">
              Precious Memories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sepia-medium mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Expert restoration of vintage photographs, family portraits, and historical images. 
            Bringing damaged memories back to life with meticulous care and professional techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="restoration" size="xl">
              Start Restoration
            </Button>
            <Button variant="subtle" size="xl">
              View Gallery
            </Button>
          </div>
          
          <div className="mt-12 text-sepia-medium/80 text-sm">
            <p>Professional restoration • Family memories • Historical preservation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;