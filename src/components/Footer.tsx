import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-commonLight to-transparent"></div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-medium hover:shadow-lg transition-shadow hover-lift z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-commonBlue" />
      </button>
      
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img 
              src="/lovable-uploads/2f1b2ee4-c99b-4fa3-b5bf-d00ed8fdfe6f.png" 
              alt="Common Desk Logo" 
              className="h-12 mb-6"
            />
            <p className="text-commonGrey/80 mb-6">
              A premium co-working space designed to inspire creativity and foster collaboration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-commonGrey/60 hover:text-commonBlue transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-commonGrey/60 hover:text-commonBlue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-commonGrey/60 hover:text-commonBlue transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-commonGrey">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#location" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-commonGrey">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-commonGrey/80">
                  <span className="font-medium text-commonGrey">Address:</span> Indiranagar, Bangalore, Karnataka, India
                </span>
              </li>
              <li>
                <a href="mailto:info@commondesk.in" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  <span className="font-medium text-commonGrey">Email:</span> info@commondesk.in
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-commonGrey/80 hover:text-commonBlue transition-colors">
                  <span className="font-medium text-commonGrey">Phone:</span> +91 98765 43210
                </a>
              </li>
              <li className="text-commonGrey/80">
                <span className="font-medium text-commonGrey">Hours:</span> 7:00 AM - 10:00 PM
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-commonGrey">Newsletter</h4>
            <p className="text-commonGrey/80 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:border-commonBlue flex-1"
              />
              <button
                type="submit"
                className="bg-commonBlue hover:bg-commonBlue/90 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-commonGrey/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Common Desk. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-commonGrey/60 hover:text-commonBlue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-commonGrey/60 hover:text-commonBlue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-commonGrey/60 hover:text-commonBlue transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
