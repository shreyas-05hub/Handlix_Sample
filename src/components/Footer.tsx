import { MapPin, Mail, Phone, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const whatsappUrl = "https://wa.me/919528522358?text=Hi%20Handlix,%20I'd%20like%20to%20get%20in%20touch.";

  const services = [
    "Home Cleaning",
    "Plumbing",
    "Electrical",
    "Appliance Repair",
    "Grooming",
    "Pet Grooming"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" }
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-whatsapp/5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Handlix</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for all home services. Professional, reliable, and affordable solutions at your doorstep.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-gray-300 text-sm">Mumbai, Delhi, Bangalore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:hello@handlix.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                    hello@handlix.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+919528522358" className="text-gray-300 text-sm hover:text-white transition-colors">
                    +91 9528522358
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-300 text-sm hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <p className="text-gray-300 text-sm mb-6">
                Ready to book a service? Contact us via WhatsApp for instant booking!
              </p>
              
              <Button 
                variant="whatsapp" 
                className="w-full mb-6"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 Handlix Pvt Ltd. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;