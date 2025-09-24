import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sepia-dark mb-4">
            Start Your Restoration
          </h2>
          <p className="text-xl text-sepia-medium max-w-2xl mx-auto font-light">
            Ready to restore your precious memories? Get in touch for a personalized consultation and quote
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-card border-sepia-light shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-medium text-sepia-dark mb-6">
                Get Your Quote
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sepia-dark font-medium mb-2">
                    Full Name
                  </label>
                  <Input 
                    placeholder="Your name"
                    className="bg-vintage-cream border-sepia-light focus:border-restoration-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sepia-dark font-medium mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-vintage-cream border-sepia-light focus:border-restoration-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sepia-dark font-medium mb-2">
                    Project Description
                  </label>
                  <Textarea 
                    placeholder="Tell us about your photos that need restoration..."
                    rows={4}
                    className="bg-vintage-cream border-sepia-light focus:border-restoration-gold resize-none"
                  />
                </div>
                
                <Button variant="restoration" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-vintage-cream border-sepia-light shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-serif font-medium text-sepia-dark text-lg mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3 text-sepia-medium">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:info@refoto.eu" className="hover:text-sepia-dark transition-colors">
                      info@refoto.eu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href="tel:+1234567890" className="hover:text-sepia-dark transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">Hours:</span>
                    <div>
                      <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                      <div>Sat: 10:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sepia-light/30 border-sepia-light shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-serif font-medium text-sepia-dark text-lg mb-3">
                  Quick Response
                </h4>
                <p className="text-sepia-medium font-light leading-relaxed">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent restoration needs, please call us directly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-restoration-gold/20 border-restoration-gold/30 shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-serif font-medium text-sepia-dark text-lg mb-3">
                  Free Consultation
                </h4>
                <p className="text-sepia-medium font-light leading-relaxed">
                  Every project begins with a complimentary assessment. 
                  We'll evaluate your photos and provide detailed restoration recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;