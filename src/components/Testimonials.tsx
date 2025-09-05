import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      service: "Home Cleaning",
      rating: 5,  
      text: "Exceptional service! The cleaning team was professional, thorough, and used eco-friendly products. My home has never looked better. Highly recommend Handlix!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar", 
      location: "Mumbai",
      service: "Plumbing",
      rating: 5,
      text: "Quick response for emergency plumbing. The technician was skilled and fixed the issue within an hour. Transparent pricing with no hidden charges. Excellent work!",
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      location: "Delhi", 
      service: "Electrical Work",
      rating: 5,
      text: "Professional electrician who took care of all safety protocols. Fixed multiple electrical issues efficiently. The booking process was seamless through WhatsApp.",
      avatar: "AP"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card rounded-2xl p-8 relative group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;