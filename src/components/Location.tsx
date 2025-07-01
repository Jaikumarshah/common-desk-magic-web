import { MapPin, Train, Clock, PhoneCall, Coffee, Utensils, Building, Navigation, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const Location = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const mapLink = "https://maps.app.goo.gl/eF4SP482iznX6kQa8";

  useEffect(() => {
    if (mapRef.current) {
      const timeoutId = setTimeout(() => {
        if (!mapLoaded) {
          console.log("Map loading timeout, showing error state");
          setMapError(true);
        }
      }, 10000); // 10 second timeout

      mapRef.current.onload = () => {
        console.log("Map iframe loaded successfully");
        setMapLoaded(true);
        clearTimeout(timeoutId);
      };

      mapRef.current.onerror = () => {
        console.log("Map iframe failed to load");
        setMapError(true);
        clearTimeout(timeoutId);
      };

      return () => clearTimeout(timeoutId);
    }
  }, [mapLoaded]);

  const openGoogleMaps = () => {
    window.open(mapLink, '_blank');
  };

  return (
    <section id="location" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-commonLight to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm bg-commonBlue/10 text-commonBlue rounded-full mb-4">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-commonBlue">Strategic</span> Location
          </h2>
          <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
            Perfectly situated in the heart of Indiranagar, with easy access to public transportation and surrounded by convenience.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-left">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-commonBlue/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-commonBlue" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Our Address</h3>
                  <div className="p-4 bg-commonLight rounded-lg border border-commonBlue/20 mb-3">
                    <p className="text-commonGrey/90 font-medium">
                      Common Desk, 271, 1st Floor, 14th Cross, CMH Road, Indiranagar, Bengaluru - 560038
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Button 
                      onClick={openGoogleMaps}
                      className="bg-commonBlue hover:bg-commonBlue/90 transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4 mr-1.5" /> Common Desk
                    </Button>
                    <a 
                      href={mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-commonGreen hover:underline inline-flex items-center bg-commonGreen/5 px-3 py-1.5 rounded-full transition-all hover:bg-commonGreen/10"
                    >
                      <Navigation className="w-4 h-4 mr-1.5" /> Directions
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-commonGreen/10 p-3 rounded-lg">
                  <Train className="w-6 h-6 text-commonGreen" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Transportation</h3>
                  <p className="text-commonGrey/80">
                    Just 400 meters from Indiranagar Metro Station, providing easy access to all parts of Bangalore. 
                    Only 20 minutes to MG Road and 30 minutes to major tech parks in Whitefield.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-commonGrey/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-commonGrey" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Operating Hours</h3>
                  <p className="text-commonGrey/80">
                    Open daily from 7:00 AM to 10:00 PM, providing extended hours for your work flexibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-commonBlue/10 p-3 rounded-lg">
                  <PhoneCall className="w-6 h-6 text-commonBlue" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Contact</h3>
                  <p className="text-commonGrey/80">
                    Have questions? Reach out to us at nudge@commondesk.in or call us at +91 9986888639.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                {!mapLoaded && !mapError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-commonBlue mb-4"></div>
                    <p className="text-commonGrey">Loading map...</p>
                  </div>
                )}
                
                {mapError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                    <MapPin className="w-12 h-12 text-commonBlue mb-4" />
                    <p className="text-commonGrey mb-4">Map temporarily unavailable</p>
                    <Button 
                      onClick={openGoogleMaps}
                      className="bg-commonBlue hover:bg-commonBlue/90"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                )}
                
                <iframe 
                  ref={mapRef}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.840423928842!2d77.63699707507583!3d12.972236414772708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d9f55dc12d%3A0x8af901c1d4fc2e8b!2sCommon%20Desk!5e0!3m2!1sen!2sin!4v1719196301656!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`w-full h-full absolute inset-0 ${mapError ? 'hidden' : ''}`}
                  title="Google Maps - Common Desk Location"
                ></iframe>
              </div>
              
              <div className="absolute top-3 right-3 z-20">
                <Button 
                  onClick={openGoogleMaps}
                  className="bg-white text-commonBlue hover:bg-commonBlue hover:text-white px-3 py-1.5 rounded-md shadow-md text-sm font-medium flex items-center transition-all duration-300"
                >
                  <img 
                    src="/lovable-uploads/44d21ec1-4526-40b7-843c-f5eb34817c9f.png" 
                    alt="Common Desk Logo" 
                    className="w-5 h-5 mr-2" 
                  />
                  Common Desk
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
              
              <div className="p-3 bg-white border-t border-gray-100 flex justify-between items-center">
                <p className="text-sm text-commonGrey/80">
                  <MapPin className="w-4 h-4 inline-block mr-1" /> Indiranagar, Bengaluru
                </p>
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-commonBlue flex items-center hover:underline"
                >
                  View Larger Map <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="mt-6 glass-card p-4 rounded-lg space-y-4">
              <h4 className="font-medium text-lg text-commonGrey">Neighborhood Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-commonGreen" />
                  <p className="text-sm text-commonGrey/80">Trendy cafés within walking distance</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Utensils className="w-4 h-4 text-commonGreen" />
                  <p className="text-sm text-commonGrey/80">Diverse dining options nearby</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-commonGreen" />
                  <p className="text-sm text-commonGrey/80">Close to major business hubs</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-commonGreen" />
                  <p className="text-sm text-commonGrey/80">Park adjacent for refreshing breaks</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-in-up" className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-6">Finding us is easy</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-commonBlue/5 p-4 rounded-lg max-w-sm">
              <h4 className="font-medium text-commonBlue mb-2">From Indiranagar Metro</h4>
              <p className="text-commonGrey/80 text-sm mb-3">400m walk (5 mins) → Head east on CMH Road → Turn right onto 14th Cross → Find us on your left</p>
              <a 
                href={mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-commonBlue text-sm hover:underline inline-flex items-center"
              >
                <Navigation className="w-3.5 h-3.5 mr-1" /> Get directions
              </a>
            </div>
            <div className="bg-commonGreen/5 p-4 rounded-lg max-w-sm">
              <h4 className="font-medium text-commonGreen mb-2">From Old Airport Road</h4>
              <p className="text-commonGrey/80 text-sm mb-3">Turn onto 100 Feet Road → Continue to CMH Road → Turn onto 14th Cross → Find us on your right</p>
              <a 
                href={mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-commonGreen text-sm hover:underline inline-flex items-center"
              >
                <MapPin className="w-3.5 h-3.5 mr-1" /> View on map
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Location;
