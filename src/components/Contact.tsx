import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MessageSquare, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";
import BookingDialog from "./BookingDialog";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    teamSize: "",
    interestedIn: "",
    peopleUsingSpace: "",
    workPlaceType: "",
    planToMoveIn: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEBHOOK_URL = "https://prod-cb.snap.pe/chatbot/rest/v1/WPFormLead?client_name=CommonDesk&client_key=efcc3b00-e5ac-4ca6-9d7e-a511b6298e76&source=website";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendToWebhook = async (data: any) => {
    try {
      // Convert data to URL-encoded format
      const formBody = new URLSearchParams();
      Object.keys(data).forEach(key => {
        formBody.append(key, data[key]);
      });

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      console.log("Webhook response status:", response.status);
      return response.ok;
    } catch (error) {
      console.error("Webhook error:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        message: formData.message,
        team_size: formData.teamSize || '',
        interested_in: formData.interestedIn || '',
        people_using_space: formData.peopleUsingSpace || '',
        work_place_type: formData.workPlaceType || '',
        plan_to_move_in: formData.planToMoveIn || '',
        form_type: 'contact',
        timestamp: new Date().toISOString(),
      };

      // Send to webhook first
      const webhookSuccess = await sendToWebhook(webhookData);
      
      // Prepare contact data for FormSubmit as backup
      const contactData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        _subject: "New Contact Form Submission - Common Desk",
        _captcha: "false"
      };
      
      // Send data using FormSubmit.co service as backup
      const response = await fetch('https://formsubmit.co/ajax/ca.jai22@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      
      if (!response.ok && !webhookSuccess) {
        throw new Error('Both webhook and backup failed');
      }
      
      console.log("Contact form sent successfully:", { webhookSuccess, formSubmitSuccess: response.ok });
      
      // Show success message
      toast.success("Thank you for your message! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        teamSize: "",
        interestedIn: "",
        peopleUsingSpace: "",
        workPlaceType: "",
        planToMoveIn: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Something went wrong. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-commonLight relative">
      <div className="absolute inset-0 bg-dotted-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm bg-commonGreen/10 text-commonGreen rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-commonBlue">Transform</span> Your Workday?
          </h2>
          <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
            Contact us for more information or to schedule a tour of our space. We're excited to show you what Common Desk has to offer.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection animation="fade-in-left">
            <div className="glass-card p-8 rounded-xl shadow-medium h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-commonGrey">Contact Information</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="bg-commonBlue/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-commonBlue" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-commonGrey">Email Us</h4>
                    <a href="mailto:nudge@commondesk.in" className="text-commonBlue hover:underline">
                      nudge@commondesk.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-commonGreen/10 p-3 rounded-full">
                    <MessageSquare className="w-5 h-5 text-commonGreen" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-commonGrey">Call Us</h4>
                    <a href="tel:+919986888639" className="text-commonBlue hover:underline">
                      +91 9986888639
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-commonGrey/10 p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-commonGrey" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-commonGrey">Book a Tour</h4>
                    <p className="text-commonGrey/80 mb-2">
                      Schedule a visit to experience our workspace firsthand
                    </p>
                    <BookingDialog 
                      trigger={
                        <Button 
                          variant="outline" 
                          className="text-commonBlue border-commonBlue/20 hover:bg-commonBlue/10"
                        >
                          Schedule Now
                        </Button>
                      }
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-commonGrey">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-white p-3 rounded-full shadow-sm transition-transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-commonBlue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849-.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849-.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-white p-3 rounded-full shadow-sm transition-transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-commonBlue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-white p-3 rounded-full shadow-sm transition-transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-commonBlue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right">
            <div className="glass-card p-8 rounded-xl shadow-medium h-full">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-commonGrey">Send Us a Message</h3>
                
                <div className="space-y-4 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-commonGrey mb-1">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-commonGrey mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-commonGrey mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+919986888639"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-commonGrey mb-1">
                        Team Size
                      </label>
                      <Input
                        id="teamSize"
                        name="teamSize"
                        placeholder="e.g., 5 people"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="interestedIn" className="block text-sm font-medium text-commonGrey mb-1">
                        Interested In
                      </label>
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      >
                        <option value="">Select an option</option>
                        <option value="open_desk">Open Desk</option>
                        <option value="dedicated">Dedicated Desk</option>
                        <option value="cabin">Private Cabin</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="peopleUsingSpace" className="block text-sm font-medium text-commonGrey mb-1">
                        People Using Space
                      </label>
                      <select
                        id="peopleUsingSpace"
                        name="peopleUsingSpace"
                        value={formData.peopleUsingSpace}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      >
                        <option value="">Select range</option>
                        <option value="just_me">Just me</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="more_than_10">More than 10</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="workPlaceType" className="block text-sm font-medium text-commonGrey mb-1">
                        Work Place Type
                      </label>
                      <Input
                        id="workPlaceType"
                        name="workPlaceType"
                        placeholder="e.g., Tech Startup, Consulting"
                        value={formData.workPlaceType}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="planToMoveIn" className="block text-sm font-medium text-commonGrey mb-1">
                        When to Move In
                      </label>
                      <Input
                        id="planToMoveIn"
                        name="planToMoveIn"
                        placeholder="e.g., Next month"
                        value={formData.planToMoveIn}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      <label htmlFor="message" className="block text-sm font-medium text-commonGrey mb-1">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="I'm interested in learning more about Common Desk..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-commonBlue focus:ring-1 focus:ring-commonBlue transition-colors resize-none"
                        rows={4}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-commonBlue hover:bg-commonBlue/90 text-white flex items-center justify-center gap-2 py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
