import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    {
      id: 1,
      icon: "Scale",
      title: "Equal Treatment",
      shortDesc: "No favorites, no hierarchy—just balanced respect for everyone",
      detailedDesc: "We believe coaches and clients deserve equal support, resources, and attention. Our platform architecture ensures both sides receive identical service quality, response times, and feature access.",
      microTestimonial: "\"Finally, a platform that doesn't play favorites\" - Sarah M., Life Coach",
      metric: "100% parity score",
      color: "primary"
    },
    {
      id: 2,
      icon: "Heart",
      title: "Authentic Connections",
      shortDesc: "Build genuine relationships without platform interference",
      detailedDesc: "We facilitate connections but never control them. Our minimal intervention approach lets coaches and clients develop authentic partnerships based on trust, not algorithmic manipulation.",
      microTestimonial: "\"Real relationships, not just transactions\" - David C., Client",
      metric: "4.9/5 connection quality",
      color: "secondary"
    },
    {
      id: 3,
      icon: "Flower2",
      title: "Transformational Results",
      shortDesc: "Watch growth bloom through balanced partnerships",
      detailedDesc: "When both parties feel valued and supported, transformation accelerates. Our balanced ecosystem creates the perfect conditions for coaches to thrive and clients to bloom into their best selves.",
      microTestimonial: "\"My growth exceeded all expectations\" - Amanda F., Client",
      metric: "85% achieve goals",
      color: "accent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Sparkles" size={20} color="var(--color-accent)" />
            <span className="font-body text-sm font-semibold text-accent-foreground">Core Benefits</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why Equibudx Is
            <span className="block text-primary mt-2">Different By Design</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Three pillars that create the foundation for genuine growth and lasting transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <div
              key={benefit?.id}
              onMouseEnter={() => setHoveredBenefit(benefit?.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
              className={`relative bg-background rounded-2xl p-6 lg:p-8 border-2 transition-all duration-500 cursor-pointer ${
                hoveredBenefit === benefit?.id
                  ? `border-${benefit?.color} shadow-cta scale-105`
                  : 'border-border hover:border-muted'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-full bg-${benefit?.color}/10 flex items-center justify-center mb-6 transition-transform duration-300 ${
                hoveredBenefit === benefit?.id ? 'scale-110' : ''
              }`}>
                <Icon 
                  name={benefit?.icon} 
                  size={32} 
                  color={`var(--color-${benefit?.color})`}
                />
              </div>

              <h3 className="font-headline font-bold text-2xl text-foreground mb-3">
                {benefit?.title}
              </h3>

              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                {hoveredBenefit === benefit?.id ? benefit?.detailedDesc : benefit?.shortDesc}
              </p>

              {hoveredBenefit === benefit?.id && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <p className="font-body text-sm italic text-foreground">
                      {benefit?.microTestimonial}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${benefit?.color} rounded-full transition-all duration-1000`}
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                    <span className={`font-body text-sm font-semibold text-${benefit?.color}`}>
                      {benefit?.metric}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute top-4 right-4">
                <Icon 
                  name={hoveredBenefit === benefit?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  color="var(--color-muted-foreground)"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full">
            <Icon name="Info" size={20} color="var(--color-primary)" />
            <p className="font-body text-sm text-foreground">
              Hover over each benefit to discover the full story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;