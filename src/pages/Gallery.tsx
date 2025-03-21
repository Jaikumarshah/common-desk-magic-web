
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // All available images in the project
  const galleryImages = [
    {
      src: "/lovable-uploads/87854a8e-64d2-420d-954b-2bd973ac2b60.png",
      alt: "Common Desk Coworking Space",
      category: "Workspace"
    },
    {
      src: "/lovable-uploads/09dfac7e-c70c-4a63-83a5-1e3c50abb43d.png",
      alt: "Common Desk Lounge Area",
      category: "Lounge"
    },
    {
      src: "/lovable-uploads/a472980f-2334-467a-be19-710558370b49.png",
      alt: "Common Desk Work Area",
      category: "Workspace"
    },
    {
      src: "/lovable-uploads/8c2f356c-96d1-4fc1-9347-220c65ccb2b7.png",
      alt: "Common Desk Conference Room",
      category: "Conference"
    },
    {
      src: "/lovable-uploads/9fa16b7d-0132-4661-97cb-f8d8a8456e90.png",
      alt: "Common Desk Amenities",
      category: "Amenities"
    },
    {
      src: "/lovable-uploads/7e90b9b7-e323-4d17-964b-ec2ae7020715.png",
      alt: "Common Desk Exterior",
      category: "Exterior"
    }
  ];

  useEffect(() => {
    // Simulate images loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-commonLight py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection 
            className="text-center mb-16" 
            animation="fade-in-up"
          >
            <span className="inline-block px-3 py-1 text-sm bg-commonBlue/10 text-commonBlue rounded-full mb-4">
              Our Space
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore <span className="text-commonBlue">Common</span> Desk
            </h1>
            <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
              Take a visual tour of our premium coworking space designed to inspire creativity,
              foster collaboration, and enhance productivity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-xl shadow-medium group cursor-pointer hover-lift ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ 
                  transition: "all 0.5s ease", 
                  transitionDelay: `${index * 100}ms` 
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                    <div>
                      <span className="text-xs text-white/80 bg-commonBlue/80 px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                      <h3 className="text-white font-medium mt-2">{image.alt}</h3>
                    </div>
                  </div>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for viewing full size images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl z-50 bg-commonBlue/80 w-10 h-10 rounded-full flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ×
          </button>
          <motion.img 
            src={selectedImage} 
            alt="Enlarged view"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
