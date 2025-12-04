import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

const SocialProofSection = () => {
  const [recentSignups, setRecentSignups] = useState([]);
  const [currentNotification, setCurrentNotification] = useState(0);

  const mockSignups = [
    { name: "Sarah M.", role: "Life Coach", location: "New York", time: "2 minutes ago" },
    { name: "David C.", role: "Client", location: "California", time: "5 minutes ago" },
    { name: "Elena R.", role: "Career Coach", location: "Texas", time: "8 minutes ago" },
    { name: "Marcus J.", role: "Business Coach", location: "Florida", time: "12 minutes ago" },
    { name: "Amanda F.", role: "Client", location: "Illinois", time: "15 minutes ago" }
  ];

  const trustBadges = [
    {
      id: 1,
      icon: "Shield",
      title: "SSL Secured",
      description: "Bank-level encryption"
    },
    {
      id: 2,
      icon: "Lock",
      title: "GDPR Compliant",
      description: "Privacy protected"
    },
    {
      id: 3,
      icon: "CheckCircle",
      title: "Verified Platform",
      description: "Trusted by coaches"
    },
    {
      id: 4,
      icon: "Award",
      title: "Quality Assured",
      description: "Certified coaches only"
    }
  ];

  const partnerships = [
    { name: "International Coach Federation", abbr: "ICF" },
    { name: "Professional Coaching Alliance", abbr: "PCA" },
    { name: "Global Coaching Network", abbr: "GCN" },
    { name: "Certified Coaches Association", abbr: "CCA" }
  ];

  useEffect(() => {
    setRecentSignups(mockSignups);
    const interval = setInterval(() => {
      setCurrentNotification(prev => (prev + 1) % mockSignups?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
            <span className="font-body text-sm font-semibold text-success-foreground">Growing Community</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Join Thousands Already
            <span className="block text-primary mt-2">Growing Together</span>
          </h2>
        </div>

        <div className="mb-12">
          <div className="bg-card rounded-lg p-4 shadow-card max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon 
                  name={recentSignups?.[currentNotification]?.role === 'Client' ? 'User' : 'Users'} 
                  size={24} 
                  color="white" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm text-foreground font-semibold truncate">
                  {recentSignups?.[currentNotification]?.name} just joined
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {recentSignups?.[currentNotification]?.role} from {recentSignups?.[currentNotification]?.location} • {recentSignups?.[currentNotification]?.time}
                </p>
              </div>
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges?.map((badge) => (
            <div key={badge?.id} className="bg-card rounded-lg p-6 text-center border border-border hover:border-primary transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={badge?.icon} size={28} color="var(--color-primary)" />
              </div>
              <h3 className="font-headline font-bold text-lg text-foreground mb-2">
                {badge?.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {badge?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
              Trusted Industry Partnerships
            </h3>
            <p className="font-body text-muted-foreground">
              Collaborating with leading coaching organizations worldwide
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-headline font-bold text-2xl text-secondary">
                    {partner?.abbr}
                  </span>
                </div>
                <p className="font-body text-sm text-foreground font-semibold">
                  {partner?.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card rounded-full shadow-card">
            <div className="text-center">
              <p className="font-headline font-bold text-3xl text-primary">1,247+</p>
              <p className="font-body text-sm text-muted-foreground">Waitlist Members</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="font-headline font-bold text-3xl text-secondary">500+</p>
              <p className="font-body text-sm text-muted-foreground">Verified Coaches</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="font-headline font-bold text-3xl text-accent">4.9/5</p>
              <p className="font-body text-sm text-muted-foreground">Beta Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;