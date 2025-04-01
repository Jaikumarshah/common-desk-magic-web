
import { MapPin, Wifi, Clock, LeafyGreen, Users, CreditCard } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Features = () => {
  const features = [
    {
      icon: <LeafyGreen className="w-10 h-10 text-commonGreen" />,
      title: "Park & Green Terrace",
      description: "Take refreshing breaks in our green terrace or walk in the adjacent park for a breath of fresh air and renewed creativity."
    },
    {
      icon: <MapPin className="w-10 h-10 text-commonBlue" />,
      title: "Prime Location",
      description: "Located just 400 meters from Indiranagar Metro Station, making your commute convenient and stress-free."
    },
    {
      icon: <Wifi className="w-10 h-10 text-commonBlue" />,
      title: "Unlimited High-Speed Internet",
      description: "Stay connected with our high-speed, reliable internet connection with no data limits or restrictions."
    },
    {
      icon: <Clock className="w-10 h-10 text-commonGrey" />,
      title: "Extended Hours",
      description: "Open 15 hours daily from 7 AM to 10 PM, accommodating early birds and night owls alike."
    },
    {
      icon: <Users className="w-10 h-10 text-commonBlue" />,
      title: "Free Meeting Rooms",
      description: "Complimentary access to meeting rooms when used judiciously, with no extra charges for your team collaborations."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-commonGreen" />,
      title: "Flexible Pricing",
      description: "Choose from daily passes to long-term commitments with reduced rates for longer durations."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-commonLight to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-commonGreen/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm bg-commonGreen/10 text-commonGreen rounded-full mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Designed for <span className="text-commonBlue">Productivity</span> & <span className="text-commonGreen">Comfort</span>
          </h2>
          <p className="text-lg text-commonGreyText max-w-2xl mx-auto">
            Experience a workspace that combines functionality with comfort, featuring amenities that enhance your work life and well-being.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in-up" 
              delay={index * 100}
              className="glass-card p-8 rounded-xl hover-lift"
            >
              <div className="mb-6 p-4 inline-block rounded-lg bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-commonGrey">
                {feature.title}
              </h3>
              <p className="text-commonGreyText">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
