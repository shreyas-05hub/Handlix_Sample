import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/919528522358?text=Hi%20Handlix,%20I'd%20like%20to%20book%20a%20service.%20Please%20share%20the%20details.";

  return (
    <button
      onClick={() => window.open(whatsappUrl, '_blank')}
      className="floating-whatsapp w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
    </button>
  );
};

export default FloatingWhatsApp;