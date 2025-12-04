import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTASection = () => {
  const [bloomStage, setBloomStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBloomStage(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-cta relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary transition-all duration-1000 ${
                  bloomStage === 0 ? 'scale-50 opacity-50' :
                  bloomStage === 1 ? 'scale-75 opacity-75' :
                  bloomStage === 2 ? 'scale-100 opacity-100': 'scale-125 opacity-100'
                }`}></div>
                <Icon 
                  name="Flower2" 
                  size={bloomStage === 3 ? 56 : 40} 
                  color="white" 
                  className="relative z-10 transition-all duration-1000"
                />
              </div>

              <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                Ready To Bloom Into
                <span className="block text-primary mt-2">Your Best Self?</span>
              </h2>

              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join the coaching revolution where everyone is treated as equals and authentic growth flourishes naturally
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-background rounded-xl p-6 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Users" size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground">For Coaches</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Keep 85-90% of your earnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Zero commission first month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Equal platform support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 border-2 border-secondary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="User" size={24} color="var(--color-secondary)" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground">For Clients</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Affordable, fair pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Free first session credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Authentic coach connections</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-warning/10 rounded-xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Clock" size={20} color="var(--color-warning)" />
                <p className="font-headline font-bold text-lg text-foreground">
                  Limited Time Offer
                </p>
              </div>
              <p className="font-body text-muted-foreground">
                First 1,000 waitlist members get exclusive founder's circle access with lifetime benefits
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={scrollToWaitlist}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-cta"
              >
                Join Waitlist Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                iconName="ArrowUp"
                iconPosition="left"
              >
                Back to Top
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-center">
              <div>
                <p className="font-headline font-bold text-2xl text-primary">1,247+</p>
                <p className="font-body text-xs text-muted-foreground">Already Joined</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <p className="font-headline font-bold text-2xl text-secondary">45 Days</p>
                <p className="font-body text-xs text-muted-foreground">Until Beta</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <p className="font-headline font-bold text-2xl text-accent">500 Spots</p>
                <p className="font-body text-xs text-muted-foreground">Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;