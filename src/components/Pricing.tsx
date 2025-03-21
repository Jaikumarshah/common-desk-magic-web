
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import BookingDialog from "./BookingDialog";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Daily Pass",
      price: "₹500",
      duration: "per day",
      features: [
        "Full access for one day",
        "High-speed internet",
        "Coffee & tea included",
        "Access to common areas",
        "Meeting room access (limited)",
      ],
      popular: false,
      color: "commonGrey",
    },
    {
      title: "Open Desk",
      price: "₹5,000",
      duration: "per month",
      withCommitment: "with 6-month commitment",
      withoutCommitment: "₹6,500 without commitment",
      features: [
        "Flexible seating",
        "24/7 access",
        "High-speed internet",
        "Free coffee & tea",
        "Meeting room access",
        "Business address",
        "Networking events",
      ],
      popular: true,
      color: "commonBlue",
    },
    {
      title: "Private Cabin",
      price: "₹6,000",
      duration: "per month",
      withCommitment: "with 6-month commitment",
      withoutCommitment: "₹8,000 without commitment",
      features: [
        "Dedicated private space",
        "24/7 access",
        "High-speed internet",
        "Free coffee & tea",
        "Priority meeting room access",
        "Business address",
        "Networking events",
        "Mail handling service",
      ],
      popular: false,
      color: "commonGreen",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-commonLight relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm bg-commonBlue/10 text-commonBlue rounded-full mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Perfect <span className="text-commonBlue">Workspace</span> Plan
          </h2>
          <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
            Flexible pricing options to suit your needs, with discounts available for longer commitments.
            All prices are subject to 18% GST and require a one-month security deposit.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-in-up" 
              delay={index * 150}
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? "transform md:-translate-y-4 ring-4 ring-commonBlue/20 shadow-xl" 
                  : "shadow-medium bg-white"
              }`}
            >
              {plan.popular && (
                <div className="bg-commonBlue text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-commonGrey">{plan.price}</span>
                  <span className="text-commonGrey/70 ml-1">{plan.duration}</span>
                </div>
                
                {plan.withCommitment && (
                  <div className="mb-2">
                    <span className="text-sm text-commonGreen font-medium">
                      {plan.withCommitment}
                    </span>
                  </div>
                )}
                
                {plan.withoutCommitment && (
                  <div className="mb-6">
                    <span className="text-sm text-commonGrey/70">
                      {plan.withoutCommitment}
                    </span>
                  </div>
                )}
                
                <div className="h-px bg-gray-200 my-6"></div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 text-${plan.color} mr-2 flex-shrink-0 mt-0.5`} />
                      <span className="text-commonGrey/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <BookingDialog 
                  trigger={
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-commonBlue hover:bg-commonBlue/90" 
                          : plan.color === "commonGreen" 
                            ? "bg-commonGreen hover:bg-commonGreen/90"
                            : "bg-commonGrey hover:bg-commonGrey/90"
                      } text-white py-6`}
                    >
                      Get Started
                    </Button>
                  }
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-12 p-6 rounded-xl bg-white/80 backdrop-blur shadow-sm max-w-3xl mx-auto text-center">
          <p className="text-commonGrey/80">
            All plans require a one-month security deposit, with rent payable in advance monthly.
            18% GST applicable on all prices.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
