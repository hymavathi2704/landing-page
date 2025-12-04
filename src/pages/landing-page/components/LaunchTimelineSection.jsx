import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

const LaunchTimelineSection = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const milestones = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Beta Launch",
      date: "January 2026",
      status: "upcoming",
      icon: "Rocket",
      description: "Limited beta access for first 500 waitlist members",
      benefits: [
        "Exclusive early access",
        "Direct founder feedback channel",
        "Lifetime early adopter badge"
      ]
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Coach Onboarding",
      date: "February 2026",
      status: "upcoming",
      icon: "Users",
      description: "Opening platform to verified coaches",
      benefits: [
        "Zero commission first month",
        "Featured coach spotlight",
        "Priority support access"
      ]
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Public Launch",
      date: "March 2026",
      status: "upcoming",
      icon: "Globe",
      description: "Full platform launch for everyone",
      benefits: [
        "Complete feature access",
        "Community events",
        "Growth partnerships"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 rounded-full mb-4">
            <Icon name="Clock" size={20} color="var(--color-warning)" />
            <span className="font-body text-sm font-semibold text-warning-foreground">Launch Timeline</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            The Journey To
            <span className="block text-primary mt-2">Balanced Coaching</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Track our progress as we build the platform that will revolutionize coaching
          </p>
        </div>

        <div className="bg-gradient-to-br from-warning/5 to-accent/5 rounded-2xl p-6 lg:p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
              Beta Launch Countdown
            </h3>
            <p className="font-body text-muted-foreground">
              Join the waitlist now to secure your early access spot
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-4 text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-primary mb-1">
                {timeRemaining?.days}
              </div>
              <div className="font-body text-sm text-muted-foreground">Days</div>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-secondary mb-1">
                {timeRemaining?.hours}
              </div>
              <div className="font-body text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-accent mb-1">
                {timeRemaining?.minutes}
              </div>
              <div className="font-body text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <div className="font-headline font-bold text-3xl lg:text-4xl text-foreground mb-1">
                {timeRemaining?.seconds}
              </div>
              <div className="font-body text-sm text-muted-foreground">Seconds</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-ml-px"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.id} className="relative">
                <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-background rounded-2xl p-6 lg:p-8 border-2 border-border hover:border-primary transition-all duration-300">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                        <span className="font-body text-xs font-semibold text-primary">{milestone?.phase}</span>
                      </div>
                      <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
                        {milestone?.title}
                      </h3>
                      <p className="font-body text-secondary font-semibold mb-4">{milestone?.date}</p>
                      <p className="font-body text-muted-foreground mb-6">{milestone?.description}</p>
                      
                      <div className="space-y-2">
                        <p className="font-body text-sm font-semibold text-foreground mb-3">Early Access Benefits:</p>
                        {milestone?.benefits?.map((benefit, idx) => (
                          <div key={idx} className={`flex items-center gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                            <Icon name="Check" size={16} color="var(--color-success)" />
                            <span className="font-body text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 lg:left-1/2 top-8 w-16 h-16 lg:-ml-8 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-cta">
                    <Icon name={milestone?.icon} size={28} color="var(--color-primary)" />
                  </div>

                  <div className="flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl border border-border max-w-2xl">
            <Icon name="Sparkles" size={32} color="var(--color-accent)" />
            <p className="font-body text-foreground">
              <span className="font-semibold">Limited Time Offer:</span> First 1,000 waitlist members receive exclusive founder's circle access with direct input on platform features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchTimelineSection;