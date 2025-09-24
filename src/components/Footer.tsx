const Footer = () => {
  return (
    <footer className="bg-sepia-dark text-vintage-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Refoto.eu
            </h3>
            <p className="text-vintage-cream/80 font-light leading-relaxed">
              Professional photo restoration services preserving your family memories 
              and historical treasures with expert care and attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-vintage-cream/80">
              <li><a href="#" className="hover:text-vintage-cream transition-colors">Damage Repair</a></li>
              <li><a href="#" className="hover:text-vintage-cream transition-colors">Color Restoration</a></li>
              <li><a href="#" className="hover:text-vintage-cream transition-colors">Digital Enhancement</a></li>
              <li><a href="#" className="hover:text-vintage-cream transition-colors">Format Conversion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-vintage-cream/80">
              <p>info@refoto.eu</p>
              <p>+1 (234) 567-8900</p>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-cream/20 mt-8 pt-8 text-center">
          <p className="text-vintage-cream/60 text-sm">
            © 2024 Refoto.eu. All rights reserved. Professional photo restoration services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;