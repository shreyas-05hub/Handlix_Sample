import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const whatsappUrl = "https://wa.me/919528522358?text=Hi%20Handlix,%20I%20need%20a%20service%20today.%20Please%20help%20me%20book%20instantly!";

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-scale-in">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Need a service <span className="text-accent-green-light">today</span>?
            <br />
            Book instantly on WhatsApp!
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Skip the waiting. Get immediate assistance from our verified professionals 
            with just one click. Available 24/7 for emergency services.
          </p>

          <Button 
            size="xl" 
            className="bg-white text-primary hover:bg-white/95 hover:scale-105 shadow-2xl hover:shadow-glow font-bold text-lg px-12 py-4 group"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            📲 Book Now - Get Instant Help
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;