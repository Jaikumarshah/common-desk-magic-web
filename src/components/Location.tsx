
import { MapPin, Train, Clock, PhoneCall } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Location = () => {
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
                  <p className="text-commonGrey/80">
                    Common Desk, 271, 1st Floor, 14th Cross, CMH Road, Indiranagar, Bengaluru - 560038
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/LVFz9kj59pLcu4hv7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-commonBlue hover:underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.942129341869!2d77.63841397486085!3d12.971869587363053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d9f55dd55f%3A0x8af901c1d4fc2e8b!2sCommon%20Desk!5e0!3m2!1sen!2sin!4v1718537012081!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Maps - Common Desk Location"
              ></iframe>
            </div>
            <div className="mt-6 glass-card p-4 rounded-lg">
              <p className="text-sm text-commonGrey/80">
                <span className="font-medium text-commonGrey">Park Adjacent:</span> Enjoy a refreshing walk in the nearby park during your breaks for a change of scenery and fresh air.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Location;
