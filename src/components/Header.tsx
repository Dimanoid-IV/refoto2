import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-vintage-cream/80 backdrop-blur-sm border-b border-sepia-light/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-serif font-semibold text-sepia-dark">
            Refoto.eu
          </h1>
          <span className="text-sepia-medium text-sm font-light">
            Photo Restoration
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sepia-medium hover:text-sepia-dark transition-colors">
            Services
          </a>
          <a href="#gallery" className="text-sepia-medium hover:text-sepia-dark transition-colors">
            Gallery
          </a>
          <a href="#process" className="text-sepia-medium hover:text-sepia-dark transition-colors">
            Process
          </a>
          <a href="#contact" className="text-sepia-medium hover:text-sepia-dark transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="restoration">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;