
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Update page title and metadata
  useEffect(() => {
    document.title = "Common Desk - Coworking Space in Bangalore";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Common Desk offers modern coworking spaces in Bangalore with high-speed internet, meeting rooms, and a vibrant community.");
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
      <Hero />
      <Features />
      <Pricing />
      <Location />
      <Reviews />
      <Contact />
    </Layout>
  );
};

export default Index;
