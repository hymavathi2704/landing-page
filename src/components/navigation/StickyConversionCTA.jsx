import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/AppIcon';

const StickyConversionCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const waitlistSection = document.getElementById('waitlist');

      if (!heroSection || !waitlistSection) return;

      const heroRect = heroSection?.getBoundingClientRect();
      const waitlistRect = waitlistSection?.getBoundingClientRect();

      const heroScrolled = heroRect?.bottom < 0;
      const waitlistVisible = waitlistRect?.top < window.innerHeight && waitlistRect?.bottom > 0;

      setIsVisible(heroScrolled && !waitlistVisible);
    };

    const detectUserRole = () => {
      const savedRole = localStorage.getItem('equibudx_user_role');
      if (savedRole) {
        setUserRole(savedRole);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    detectUserRole();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRoleSelect = (role) => {
    setUserRole(role);
    localStorage.setItem('equibudx_user_role', role);
  };

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

  const getMessage = () => {
    if (userRole === 'coach') {
      return 'Join as Coach - Fair Fees Guaranteed';
    } else if (userRole === 'client') {
      return 'Join as Client - Authentic Growth Awaits';
    }
    return 'Reserve Your Spot - Limited Beta Access';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-card border-t border-border shadow-cta lg:bottom-6 lg:left-auto lg:right-6 lg:w-auto lg:rounded-lg lg:border">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:px-6">
        {!userRole ? (
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <span className="font-body text-sm text-foreground font-medium">
              I'm joining as:
            </span>
            <div className="flex gap-2 w-full lg:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRoleSelect('coach')}
                iconName="Users"
                iconPosition="left"
                className="flex-1 lg:flex-none"
              >
                Coach
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRoleSelect('client')}
                iconName="User"
                iconPosition="left"
                className="flex-1 lg:flex-none"
              >
                Client
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <Icon
                name={userRole === 'coach' ? 'Users' : 'User'}
                size={20}
                color="var(--color-secondary)"
              />
              <span className="font-body text-sm text-foreground font-medium">
                {getMessage()}
              </span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="default"
                size="sm"
                onClick={scrollToWaitlist}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1 sm:flex-none"
              >
                Join Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setUserRole(null);
                  localStorage.removeItem('equibudx_user_role');
                }}
                iconName="X"
                className="sm:w-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyConversionCTA;