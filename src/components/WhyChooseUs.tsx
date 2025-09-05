import { Shield, Clock, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "All our service providers are thoroughly verified, background-checked, and trained to deliver exceptional results every time.",
      gradient: "from-primary to-teal"
    },
    {
      icon: Clock,
      title: "Doorstep Service", 
      description: "Book anytime, anywhere. Our professionals come to your location at your preferred time with all necessary equipment.",
      gradient: "from-teal to-purple"
    },
    {
      icon: Award,
      title: "Guaranteed Quality",
      description: "We stand behind our work with a 100% satisfaction guarantee. Not happy? We'll make it right or refund your money.",
      gradient: "from-purple to-accent-green"
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="gradient-text">Handlix</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our premium home services platform, trusted by thousands of families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group premium-card rounded-2xl p-8 text-center relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;