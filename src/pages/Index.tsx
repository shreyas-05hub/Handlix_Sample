import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <FeaturedServices />
      <Testimonials />
      <CTABanner />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
