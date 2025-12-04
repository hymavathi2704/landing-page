import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';

// Custom SVG component based on the user's provided logo image
const EquibudxLogoSVG = ({ size = 160, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    {/* Outer Circle Background (Beige/Card) */}
    <circle cx="50" cy="50" r="49" fill="var(--color-card)" />

    {/* Outer Border (Dark Goldenrod / Secondary) */}
    <circle cx="50" cy="50" r="49" stroke="var(--color-secondary)" strokeWidth="3" />
    <circle cx="50" cy="50" r="45" stroke="var(--color-primary)" strokeWidth="1.5" />
    
    {/* Inner X Shape (Teal / Primary) */}
    <path
      d="M20 18 L48 50 M52 50 L80 18 M20 82 L48 50 M52 50 L80 82"
      stroke="var(--color-primary)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Center Flower/Lotus (Dark Goldenrod / Secondary) */}
    {/* Flower Stem/Leaves */}
    <path d="M50 50 L50 70 M45 60 Q48 58 50 56 Q52 58 55 60" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-secondary)" />
    {/* Flower Bud */}
    <path d="M50 30 V50 C45 45 40 40 50 30 C60 40 55 45 50 50 Z" fill="var(--color-secondary)" />

    {/* Balance Scale - Bar (Secondary) */}
    <line x1="33" y1="40" x2="67" y2="40" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="30" x2="50" y2="40" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />

    {/* Balance Scale - Left Pan (Secondary) */}
    <line x1="33" y1="40" x2="33" y2="45" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 48 H36 A3 3 0 0 0 36 48" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" fill="var(--color-card)" />

    {/* Balance Scale - Right Pan (Secondary) */}
    <line x1="67" y1="40" x2="67" y2="45" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M64 48 H70 A3 3 0 0 0 70 48" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" fill="var(--color-card)" />
  </svg>
);


const HeroSection = () => {
  const [waitlistCount, setWaitlistCount] = useState(1247);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  useEffect(() => {
    setIsLogoAnimated(true);
    const interval = setInterval(() => {
      setWaitlistCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
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
                
                {/* Custom SVG Logo component */}
                <EquibudxLogoSVG 
                  size={160} // Matches the w-40 h-40 container (160px)
                  className="relative z-10" 
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
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToVision}
              iconName="ChevronDown"
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Learn Our Story
            </Button>
          </div>

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
              <p className="font-headline font-bold text-2xl text-foreground">{waitlistCount?.toLocaleString()}</p>
              <p className="font-body text-xs text-muted-foreground">coaches and clients already growing together</p>
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