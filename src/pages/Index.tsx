
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Partnership from "@/components/Partnership";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Wifi, Users, Clock, Building, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  // Update page title and metadata
  useEffect(() => {
    document.title = "Common Desk – Premier Coworking Space in Bengaluru";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover Common Desk, Bengaluru's leading coworking space offering professional, calm, and collaborative environments with high-speed internet, modern amenities, and complimentary beverages.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Discover Common Desk, Bengaluru's leading coworking space offering professional, calm, and collaborative environments with high-speed internet, modern amenities, and complimentary beverages.");
      document.head.appendChild(metaDescription);
    }
  }, []);

  // Preload images for better user experience
  useEffect(() => {
    const imagesToPreload = [
      "/lovable-uploads/87854a8e-64d2-420d-954b-2bd973ac2b60.png",
      "/lovable-uploads/09dfac7e-c70c-4a63-83a5-1e3c50abb43d.png",
      "/lovable-uploads/8c2f356c-96d1-4fc1-9347-220c65ccb2b7.png",
      "/lovable-uploads/a472980f-2334-467a-be19-710558370b49.png",
      "/lovable-uploads/9fa16b7d-0132-4661-97cb-f8d8a8456e90.png",
      "/lovable-uploads/7e90b9b7-e323-4d17-964b-ec2ae7020715.png"
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Layout>
      <div className="sr-only">
        <h1>Coworking Space in Bengaluru</h1>
      </div>
      
      <Hero />
      
      <section id="why-choose-common-desk" className="py-16 bg-commonLight">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-commonBlue">Common Desk</span>
            </h2>
            <p className="text-lg text-commonGrey/80 max-w-3xl mx-auto">
              Experience a professional workspace designed for productivity in the heart of Bengaluru. 
              Our strategic location in Indiranagar offers easy access to tech parks, startups, and Bangalore's thriving business ecosystem.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <AnimatedSection animation="fade-in-up" className="glass-card p-6 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-commonBlue/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-commonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Indiranagar Location</h3>
                <p className="text-commonGrey/80">
                  Located in the vibrant heart of Indiranagar with excellent connectivity to tech parks in Whitefield, Electronic City, and Koramangala's startup hub.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200} className="glass-card p-6 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-commonGreen/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-commonGreen" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bangalore's Professional Network</h3>
                <p className="text-commonGrey/80">
                  Join a thriving community of Bangalore-based entrepreneurs, tech professionals, and startups in a collaborative environment.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={400} className="glass-card p-6 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-commonBlue/10 p-4 rounded-full mb-4">
                  <Building className="h-8 w-8 text-commonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Designed for Bengaluru's Climate</h3>
                <p className="text-commonGrey/80">
                  Our space is optimized for Bangalore's unique weather with temperature-controlled interiors and power backup for uninterrupted productivity.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="text-center mt-12">
            <Link to="#features">
              <Button className="bg-commonBlue hover:bg-commonBlue/90">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section id="amenities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Amenities You'll <span className="text-commonGreen">Love</span>
            </h2>
            <p className="text-lg text-commonGrey/80 max-w-3xl mx-auto">
              We've thought of everything to make your workday productive, comfortable, and enjoyable.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <AnimatedSection animation="fade-in-left" className="flex items-start space-x-4">
              <div className="bg-commonGreen/10 p-3 rounded-full flex-shrink-0">
                <Wifi className="h-6 w-6 text-commonGreen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Speed Internet</h3>
                <p className="text-commonGrey/80">
                  Enterprise-grade fiber optic internet with redundant connections ensures you're always connected at lightning speeds.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" className="flex items-start space-x-4">
              <div className="bg-commonBlue/10 p-3 rounded-full flex-shrink-0">
                <Coffee className="h-6 w-6 text-commonBlue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complimentary Beverages</h3>
                <p className="text-commonGrey/80">
                  Enjoy unlimited coffee, tea, and filtered water throughout your workday to keep you refreshed and focused.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200} className="flex items-start space-x-4">
              <div className="bg-commonBlue/10 p-3 rounded-full flex-shrink-0">
                <Users className="h-6 w-6 text-commonBlue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Well-Designed Meeting Rooms</h3>
                <p className="text-commonGrey/80">
                  Professional meeting spaces equipped with the latest technology for presentations and client meetings.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200} className="flex items-start space-x-4">
              <div className="bg-commonGreen/10 p-3 rounded-full flex-shrink-0">
                <Clock className="h-6 w-6 text-commonGreen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-commonGrey/80">
                  Access your workspace when you need it, with extended operating hours to accommodate your schedule.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Features />
      <Partnership />
      <Pricing />
      <Location />
      <Reviews />
      <Contact />
    </Layout>
  );
};

export default Index;
