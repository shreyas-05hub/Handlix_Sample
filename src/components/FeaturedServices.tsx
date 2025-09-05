import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import cleaningImage from "@/assets/service-cleaning.jpg";
import plumbingImage from "@/assets/service-plumbing.jpg";
import electricalImage from "@/assets/service-electrical.jpg";
import groomingImage from "@/assets/service-grooming.jpg";

const FeaturedServices = () => {
  const services = [
    {
      name: "Home Cleaning",
      description: "Professional deep cleaning for your home with eco-friendly products",
      price: "Starting ₹299",
      image: cleaningImage,
      whatsappText: "Hi%20Handlix,%20I'd%20like%20to%20book%20Home%20Cleaning%20service.%20Please%20share%20the%20details."
    },
    {
      name: "Plumbing",
      description: "Expert plumbing solutions for all your pipe and fixture needs",
      price: "Starting ₹199",
      image: plumbingImage,
      whatsappText: "Hi%20Handlix,%20I'd%20like%20to%20book%20Plumbing%20service.%20Please%20share%20the%20details."
    },
    {
      name: "Electrical",
      description: "Licensed electricians for safe and reliable electrical work",
      price: "Starting ₹249",
      image: electricalImage,
      whatsappText: "Hi%20Handlix,%20I'd%20like%20to%20book%20Electrical%20service.%20Please%20share%20the%20details."
    },
    {
      name: "Grooming",
      description: "Professional grooming services in the comfort of your home",
      price: "Starting ₹399",
      image: groomingImage,
      whatsappText: "Hi%20Handlix,%20I'd%20like%20to%20book%20Grooming%20service.%20Please%20share%20the%20details."
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Our most popular services, trusted by thousands of satisfied customers across the city
          </p>
          <Button variant="outline-premium" size="lg" className="group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card rounded-2xl overflow-hidden animate-scale-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-primary">Premium</span>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold gradient-text-accent">
                    {service.price}
                  </span>
                </div>
                <Button 
                  variant="whatsapp" 
                  size="sm" 
                  className="w-full group"
                  onClick={() => window.open(`https://wa.me/919528522358?text=${service.whatsappText}`, '_blank')}
                >
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;