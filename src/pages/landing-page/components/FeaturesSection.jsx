import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: "DollarSign",
      title: "Fair Pricing Structure",
      description: "Transparent commission model that respects both coaches and clients",
      details: [
        "10-15% platform fee (vs industry 20-40%)",
        "No hidden charges or surprise fees",
        "Coaches keep 85-90% of earnings",
        "Clients pay fair market rates"
      ],
      comingSoon: true,
      badge: "Revolutionary"
    },
    {
      id: 2,
      icon: "Users",
      title: "Equal Support System",
      description: "Identical resources and assistance for coaches and clients",
      details: [
        "24/7 support for all users",
        "Same response time guarantees",
        "Equal access to platform features",
        "Balanced dispute resolution"
      ],
      comingSoon: true,
      badge: "Unique"
    },
    {
      id: 3,
      icon: "Star",
      title: "Balanced Review Process",
      description: "Fair feedback system that protects both parties",
      details: [
        "Mutual review requirements",
        "Context-aware rating system",
        "Protection against unfair reviews",
        "Growth-focused feedback culture"
      ],
      comingSoon: true,
      badge: "Fair"
    },
    {
      id: 4,
      icon: "Shield",
      title: "Trust & Safety",
      description: "Comprehensive verification and protection measures",
      details: [
        "Coach certification verification",
        "Secure payment processing",
        "Privacy protection for all",
        "Transparent platform policies"
      ],
      comingSoon: true,
      badge: "Secure"
    },
    {
      id: 5,
      icon: "Calendar",
      title: "Flexible Scheduling",
      description: "Smart booking system that works for everyone",
      details: [
        "Automated timezone handling",
        "Cancellation policies for both sides",
        "Rescheduling made simple",
        "Calendar integration"
      ],
      comingSoon: true,
      badge: "Smart"
    },
    {
      id: 6,
      icon: "TrendingUp",
      title: "Growth Analytics",
      description: "Insights that help coaches and clients track progress",
      details: [
        "Session impact metrics",
        "Goal achievement tracking",
        "Progress visualization",
        "Personalized recommendations"
      ],
      comingSoon: true,
      badge: "Insightful"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Zap" size={20} color="var(--color-primary)" />
            <span className="font-body text-sm font-semibold text-primary">Platform Features</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Features Built For
            <span className="block text-secondary mt-2">Perfect Balance</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Every feature designed with equal consideration for coaches and clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              onClick={() => setActiveFeature(activeFeature === feature?.id ? null : feature?.id)}
              className="relative bg-card rounded-2xl p-6 border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-full">
                  <Icon name="Clock" size={14} color="var(--color-accent)" />
                  <span className="font-body text-xs font-semibold text-accent-foreground">
                    Coming Soon
                  </span>
                </span>
              </div>

              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature?.icon} size={28} color="var(--color-primary)" />
                </div>

                <div className="inline-flex items-center gap-2 mb-2">
                  <h3 className="font-headline font-bold text-xl text-foreground">
                    {feature?.title}
                  </h3>
                  <span className="px-2 py-1 bg-secondary/10 rounded text-xs font-body font-semibold text-secondary">
                    {feature?.badge}
                  </span>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature?.description}
                </p>
              </div>

              {activeFeature === feature?.id && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <ul className="space-y-2">
                    {feature?.details?.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                        <span className="font-body text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">
                  {activeFeature === feature?.id ? 'Click to collapse' : 'Click to expand'}
                </span>
                <Icon 
                  name={activeFeature === feature?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  color="var(--color-muted-foreground)"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border border-border">
            <Icon name="Sparkles" size={32} color="var(--color-accent)" />
            <p className="font-body text-foreground max-w-2xl">
              These features are currently in development. Join our waitlist to be among the first to experience the balanced coaching platform revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;