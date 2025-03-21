
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Reviews = () => {
  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Absolutely love working from Common Desk! The ambiance next to the park makes it special, and the high-speed internet is perfect for my video calls.",
      date: "2 months ago",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      comment: "Best co-working space in Indiranagar! The green terrace is my favorite spot for lunch breaks. Staff is friendly and facilities are always well-maintained.",
      date: "1 month ago",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      id: 3,
      name: "Vikram Mehta",
      rating: 4,
      comment: "Great location right next to the metro station. The environment is perfect for focused work, and I love the community events. Would highly recommend!",
      date: "3 weeks ago",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      id: 4,
      name: "Ananya Desai",
      rating: 5,
      comment: "Common Desk has transformed my remote work experience. The ambiance is perfect, and the pricing is reasonable compared to other spaces in the area.",
      date: "2 weeks ago",
      avatar: "https://randomuser.me/api/portraits/women/51.jpg"
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-dotted-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-commonLight to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm bg-commonGreen/10 text-commonGreen rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-commonBlue">Members</span> Say
          </h2>
          <p className="text-lg text-commonGrey/80 max-w-2xl mx-auto">
            Hear from our community of professionals who have experienced the Common Desk difference.
          </p>
          <a 
            href="https://g.co/kgs/xUkvZrS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-commonBlue hover:underline"
          >
            <Star className="w-5 h-5 mr-1 text-yellow-400 fill-yellow-400" />
            View all our Google reviews
          </a>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection 
              key={review.id}
              animation="fade-in-up" 
              delay={index * 150}
            >
              <div className="glass-card p-6 rounded-xl shadow-medium h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-commonGrey">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-xs text-commonGrey/60">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-commonGrey/80 italic">{review.comment}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-12 text-center">
          <a 
            href="https://g.co/kgs/xUkvZrS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-commonGrey font-medium"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google Logo" 
              className="w-5 h-5 mr-2"
            />
            Read more reviews on Google
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;
