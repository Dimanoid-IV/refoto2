import showcaseImage from "@/assets/before-after-showcase.jpg";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sepia-dark mb-4">
            Transformation Gallery
          </h2>
          <p className="text-xl text-sepia-medium max-w-2xl mx-auto font-light">
            Witness the remarkable transformation of damaged photographs into restored treasures
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-lg p-8 shadow-photo">
            <img 
              src={showcaseImage}
              alt="Before and after photo restoration comparison showing dramatic improvement"
              className="w-full rounded-lg shadow-soft"
            />
            
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-serif font-medium text-sepia-dark mb-3">
                Professional Results
              </h3>
              <p className="text-sepia-medium mb-6 font-light">
                Each restoration project receives individual attention and care. 
                Our expert techniques can repair even severely damaged photographs, 
                bringing them back to their original beauty and beyond.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif font-bold text-restoration-gold mb-2">500+</div>
                  <div className="text-sepia-medium text-sm">Photos Restored</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-restoration-gold mb-2">15+</div>
                  <div className="text-sepia-medium text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-restoration-gold mb-2">98%</div>
                  <div className="text-sepia-medium text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="elegant" size="lg">
              View More Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;