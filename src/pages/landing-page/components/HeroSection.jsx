import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';

// The EquibudxLogoSVG component has been removed for cleaner asset management.

const HeroSection = () => {
  const [waitlistCount, setWaitlistCount] = useState(1247);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  useEffect(() => {
    setIsLogoAnimated(true);
    // Commenting out the interval that updates the waitlist count since we're using static text now
    // const interval = setInterval(() => {
    //   setWaitlistCount(prev => prev + Math.floor(Math.random() * 3));
    // }, 5000);
    // return () => clearInterval(interval);
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

  const scrollToVision = () => {
    const element = document.getElementById('vision');
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background pt-20 lg:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center mb-8 transition-all duration-1000 ${isLogoAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative w-32 h-32 lg:w-40 lg:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full flex items-center justify-center shadow-cta">
                
                {/* LOGO IMAGE: Uses object-cover to fully fill the circle, removing the previous padding. */}
                <img 
                  src="/assets/images/new-logo.png" // ⬅️ Ensure this path points to your uploaded image file (image_67ce59.jpg)
                  alt="Equibudx Logo" 
                  className="w-full h-full object-cover relative z-10 rounded-full" 
                />
                
              </div>
            </div>
          </div>

          <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-tight">
            Where Coaches and Clients
            <span className="block text-primary mt-2">Bloom Together</span>
          </h1>

          <p className="font-body text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            The only platform treating everyone as equals in your growth journey.
            <span className="block mt-2 text-secondary font-semibold">BALANCE. GROWTH. CONNECTION.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToWaitlist}
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-cta w-full sm:w-auto"
            >
              Join the Waitlist
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              onClick={scrollToVision}
              iconName="ChevronDown"
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Learn Our Story
            </Button>
            */}
          </div>

          {/* Modified content to keep human logos but replace count with "Coming Soon" text */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-card">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                <Icon name="Users" size={16} color="var(--color-primary)" />
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-card flex items-center justify-center">
                <Icon name="User" size={16} color="var(--color-secondary)" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-headline font-bold text-2xl text-foreground">Coming Soon</p>
              <p className="font-body text-xs text-muted-foreground">The balanced coaching platform</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="var(--color-muted-foreground)" />
      </div>
    </section>
  );
};

export default HeroSection;