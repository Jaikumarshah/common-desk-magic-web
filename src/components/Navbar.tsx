
import { useState, useEffect } from "react";
import { MenuIcon, X, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Updated navItems with Gallery link
  const navItems = [
    { label: "Home", href: location.pathname === "/" ? "#home" : "/" },
    { label: "Features", href: location.pathname === "/" ? "#features" : "/#features" },
    { label: "Pricing", href: location.pathname === "/" ? "#pricing" : "/#pricing" },
    { label: "Location", href: location.pathname === "/" ? "#location" : "/#location" },
    { label: "Reviews", href: location.pathname === "/" ? "#reviews" : "/#reviews" },
    { label: "Contact", href: location.pathname === "/" ? "#contact" : "/#contact" },
    { 
      label: "Gallery", 
      href: "/gallery", 
      icon: <Image className="h-4 w-4 mr-1" />,
      isExternal: true 
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50">
            <img 
              src="/lovable-uploads/44d21ec1-4526-40b7-843c-f5eb34817c9f.png" 
              alt="Common Desk Logo" 
              className="h-10 md:h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "flex items-center text-commonGrey hover:text-commonBlue font-medium text-sm transition-colors duration-300",
                    location.pathname === item.href && "text-commonBlue"
                  )}
                >
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-commonGrey hover:text-commonBlue font-medium text-sm transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            ))}
            <BookingDialog 
              trigger={
                <Button className="bg-commonBlue hover:bg-commonBlue/90 text-white">
                  Book a Tour
                </Button>
              }
            />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 text-commonGrey focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <nav className="flex flex-col space-y-8 items-center">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center text-commonGrey hover:text-commonBlue font-medium text-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-commonGrey hover:text-commonBlue font-medium text-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <BookingDialog 
              trigger={
                <Button 
                  className="bg-commonBlue hover:bg-commonBlue/90 text-white mt-4" 
                  onClick={() => setIsOpen(false)}
                >
                  Book a Tour
                </Button>
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
