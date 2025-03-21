
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "fade-in-up" 
    | "fade-in-left" 
    | "fade-in-right";
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.2,
  id,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Add initial state classes
    section.style.opacity = "0";
    if (delay) {
      section.style.transitionDelay = `${delay}ms`;
    }

    // Create observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay the animation for staggered effect
            setTimeout(() => {
              section.style.opacity = "1";
              section.classList.add(`animate-${animation}`);
            }, delay);
            
            // Unobserve after animation starts
            observerRef.current?.unobserve(section);
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(section);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [animation, delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn("transition-opacity duration-700", className)}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
