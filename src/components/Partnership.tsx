
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Partnership = () => {
  return (
    <section className="bg-commonLight py-16 relative">
      <div className="absolute inset-0 bg-dotted-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm bg-commonBlue/10 text-commonBlue rounded-full mb-4">
            Strategic Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-commonGreen">Exclusive</span> Member Benefits
          </h2>
          <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
            We've partnered with leading businesses to offer our members special advantages and services.
          </p>
        </AnimatedSection>
        
        <div className="glass-card p-6 md:p-8 rounded-xl shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <AnimatedSection animation="fade-in-left">
                <div className="bg-white p-6 rounded-xl shadow-sm max-w-[280px] transition-transform hover:scale-105 duration-300">
                  <img 
                    src="/lovable-uploads/2e39d505-4766-4f29-9ae2-ad6ab9224ddd.png" 
                    alt="Setmycompany logo" 
                    className="h-20 mx-auto mb-4"
                  />
                  <div className="flex justify-center">
                    <a 
                      href="https://setmycompany.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-commonBlue hover:underline"
                    >
                      setmycompany.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-3">
              <AnimatedSection animation="fade-in-right">
                <h3 className="text-2xl font-semibold text-commonGrey mb-4">
                  Setmycompany Partnership
                </h3>
                <p className="text-commonGrey/80 mb-4">
                  Common Desk members get exclusive access to professional CA consulting services from Setmycompany. Benefit from expert guidance on company registration, tax filing, accounting, and compliance matters.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-commonGreen/10 p-2 rounded-full mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-commonGreen"></div>
                    </div>
                    <p className="text-commonGrey/80 text-sm">Special discounted rates for all Common Desk members</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-commonGreen/10 p-2 rounded-full mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-commonGreen"></div>
                    </div>
                    <p className="text-commonGrey/80 text-sm">Priority access to CA consultations for business queries</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-commonGreen/10 p-2 rounded-full mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-commonGreen"></div>
                    </div>
                    <p className="text-commonGrey/80 text-sm">Streamlined company registration and compliance services</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://setmycompany.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-commonBlue/20 text-commonBlue hover:bg-commonBlue/10 transition-all duration-300">
                      Learn More
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button className="bg-commonGreen hover:bg-commonGreen/90 transition-all duration-300">
                      Inquire About Benefits
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
