import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-handlix.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/919528522358?text=Hi%20Handlix,%20I'd%20like%20to%20book%20a%20service.%20Please%20share%20the%20details.";

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional home services" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-teal/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 trust-badge rounded-full px-6 py-3 mb-8 animate-scale-in">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Trusted by 10,000+ Families</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            <span className="gradient-text block">Handling Life's</span>
            <span className="text-foreground block mt-2">Essentials</span>
            <span className="gradient-text-accent block mt-2">Effortlessly</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional home services at your doorstep. From cleaning to repairs, 
            grooming to maintenance - we handle it all with verified professionals 
            and transparent pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="premium" 
              size="xl" 
              className="min-w-[280px] group relative overflow-hidden"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              📲 Book Now on WhatsApp
            </Button>
            <Button 
              variant="outline-premium" 
              size="xl" 
              className="min-w-[220px]"
            >
              View Services
            </Button>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, text: "Verified Professionals", delay: "0s" },
              { icon: Clock, text: "Doorstep Service", delay: "0.2s" },
              { icon: Star, text: "Sanitized Kits", delay: "0.4s" }
            ].map((item, index) => (
              <div 
                key={index}
                className="premium-card rounded-xl p-6 animate-slide-up hover-lift group"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex items-center justify-center gap-4">
                  <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-foreground text-lg">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;