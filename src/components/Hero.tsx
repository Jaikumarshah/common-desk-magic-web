
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Wifi, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image preloading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const heroFeatures = [
    {
      icon: <Leaf className="w-5 h-5 text-commonGreen" />,
      text: "Park & Green Terrace",
    },
    {
      icon: <Wifi className="w-5 h-5 text-commonBlue" />,
      text: "High-Speed Connectivity",
    },
    {
      icon: <Clock className="w-5 h-5 text-commonGrey" />,
      text: "Open 7 AM - 10 PM",
    },
  ];

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-commonLight to-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50 z-0"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-commonBlue/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-commonGreen/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection 
            className="text-center lg:text-left" 
            animation="fade-in-left"
          >
            <span className="inline-block px-3 py-1 text-sm bg-commonBlue/10 text-commonBlue rounded-full mb-6">
              Workspace Reimagined
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where <span className="text-commonBlue">Productivity</span> Meets <span className="text-commonGreen">Nature</span>
            </h1>
            <p className="text-lg text-commonGrey/80 mb-8 max-w-lg mx-auto lg:mx-0">
              A premium co-working space in Indiranagar, Bangalore, designed to inspire creativity and foster collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button className="bg-commonBlue hover:bg-commonBlue/90 text-white px-6 py-6 rounded-lg w-full sm:w-auto">
                Book a Tour
              </Button>
              <a 
                href="#pricing" 
                className="flex items-center gap-2 text-commonGrey hover:text-commonBlue transition-colors duration-300 font-medium group"
              >
                Explore Pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {heroFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                >
                  {feature.icon}
                  <span className="text-sm font-medium text-commonGrey">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-in-right" 
            delay={300}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medium min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-commonBlue/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Common Desk Coworking Space" 
                className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                  isLoaded ? "scale-100 blur-0" : "scale-110 blur-md"
                }`}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-8 border-commonGreen/20 z-0 animate-pulse-subtle"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-8 border-commonBlue/20 z-0 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-commonGrey/60 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-commonGrey/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-commonBlue rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
