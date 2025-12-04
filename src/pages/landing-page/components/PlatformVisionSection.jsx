import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/ui/AppIcon';

const PlatformVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [balancePosition, setBalancePosition] = useState(50);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setBalancePosition(prev => {
          const newPos = prev + (Math.random() - 0.5) * 2;
          return Math.max(45, Math.min(55, newPos));
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="vision" ref={sectionRef} className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Target" size={20} color="var(--color-primary)" />
            <span className="font-body text-sm font-semibold text-primary">Platform Vision</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Redefining Coaching Through
            <span className="block text-primary mt-2">Perfect Equilibrium</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional platforms favor one side. We believe true growth happens when coaches and clients stand as equals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className={`bg-background rounded-2xl p-6 lg:p-8 border-2 border-error/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
                <Icon name="TrendingDown" size={24} color="var(--color-error)" />
              </div>
              <h3 className="font-headline font-bold text-xl text-foreground">Traditional Platforms</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="X" size={20} color="var(--color-error)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-muted-foreground">High commissions burden coaches (20-40%)</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="X" size={20} color="var(--color-error)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-muted-foreground">Clients pay inflated prices for sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="X" size={20} color="var(--color-error)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-muted-foreground">Platform prioritizes profit over people</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="X" size={20} color="var(--color-error)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-muted-foreground">Unequal support and resources</p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 lg:p-8 border-2 border-success transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} color="var(--color-success)" />
              </div>
              <h3 className="font-headline font-bold text-xl text-foreground">Equibudx Approach</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-foreground font-medium">Fair pricing for coaches (10-15% only)</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-foreground font-medium">Affordable sessions for clients</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-foreground font-medium">Equal treatment and respect for all</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" size={20} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <p className="font-body text-foreground font-medium">Balanced support ecosystem</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline font-bold text-2xl lg:text-3xl text-foreground mb-4">
              The Balance Scale Visualization
            </h3>
            <p className="font-body text-muted-foreground">
              Watch how Equibudx maintains perfect equilibrium between coaches and clients
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Icon name="Scale" size={64} color="var(--color-primary)" />
            </div>

            <div className="relative h-32 bg-background rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1 bg-muted"></div>
                <div 
                  className="absolute h-full w-1 bg-primary transition-all duration-500"
                  style={{ left: `${balancePosition}%` }}
                ></div>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Users" size={32} color="var(--color-primary)" />
                  </div>
                  <p className="font-body text-sm font-semibold text-foreground">Coaches</p>
                  <p className="font-body text-xs text-muted-foreground">Fair compensation</p>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="User" size={32} color="var(--color-secondary)" />
                  </div>
                  <p className="font-body text-sm font-semibold text-foreground">Clients</p>
                  <p className="font-body text-xs text-muted-foreground">Affordable growth</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-body text-sm text-success font-semibold">
                ✓ Perfect Balance Maintained
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformVisionSection;