const processSteps = [
  {
    number: "01",
    title: "Assessment",
    description: "We carefully examine your photograph to determine the best restoration approach and provide a detailed quote."
  },
  {
    number: "02", 
    title: "Digital Scanning",
    description: "High-resolution scanning captures every detail of your original photograph for precise digital restoration work."
  },
  {
    number: "03",
    title: "Expert Restoration",
    description: "Our skilled professionals meticulously repair damage, enhance colors, and restore missing elements using advanced techniques."
  },
  {
    number: "04",
    title: "Quality Review",
    description: "Each restored image undergoes thorough quality control to ensure exceptional results that exceed expectations."
  },
  {
    number: "05",
    title: "Delivery",
    description: "Receive your beautifully restored photographs in high-quality digital formats, ready for printing and sharing."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sepia-dark mb-4">
            Our Restoration Process
          </h2>
          <p className="text-xl text-sepia-medium max-w-2xl mx-auto font-light">
            A meticulous five-step process ensures your precious memories receive the care and attention they deserve
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start md:items-center gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-restoration-gold rounded-full flex items-center justify-center shadow-soft group-hover:shadow-photo transition-all duration-300">
                    <span className="text-sepia-dark font-serif font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-medium text-sepia-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sepia-medium font-light leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-sepia-light ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;