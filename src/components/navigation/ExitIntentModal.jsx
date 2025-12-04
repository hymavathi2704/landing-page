import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Icon from '../ui/AppIcon';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [userRole, setUserRole] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let exitIntentTriggered = false;
    let lastScrollY = window.pageYOffset;
    let scrollVelocity = 0;

    const handleMouseLeave = (e) => {
      if (e?.clientY <= 0 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        showModal();
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      if (scrollVelocity > 50 && currentScrollY < 100 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        showModal();
      }
    };

    const showModal = () => {
      const hasSeenModal = sessionStorage.getItem('equibudx_exit_intent_shown');
      if (!hasSeenModal) {
        const savedRole = localStorage.getItem('equibudx_user_role');
        setUserRole(savedRole);
        setIsVisible(true);
        sessionStorage.setItem('equibudx_exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const getIncentiveMessage = () => {
    if (userRole === 'coach') {
      return {
        title: 'Coaches Get Zero Commission',
        description: 'Be among the first 100 coaches to join and enjoy lifetime zero commission on all sessions.',
        icon: 'Award'
      };
    } else if (userRole === 'client') {
      return {
        title: 'Free First Session Credit',
        description: 'Join our waitlist and receive a complimentary first session with any coach of your choice.',
        icon: 'Gift'
      };
    }
    return {
      title: 'Exclusive Founder Updates',
      description: 'Get behind-the-scenes access to our platform development and be first to know about launch.',
      icon: 'Sparkles'
    };
  };

  if (!isVisible) return null;

  const incentive = getIncentiveMessage();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card rounded-lg shadow-cta max-w-md w-full mx-4 p-6 animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="Close modal"
        >
          <Icon name="X" size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10">
              <Icon name={incentive?.icon} size={32} color="var(--color-secondary)" />
            </div>

            <h2 className="font-headline font-bold text-2xl text-center text-foreground mb-2">
              Wait! Don't Miss Out
            </h2>

            <p className="font-body text-center text-muted-foreground mb-6">
              {incentive?.title}
            </p>

            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-foreground text-center">
                {incentive?.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
              />

              <Button
                type="submit"
                variant="default"
                fullWidth
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Get Exclusive Access
              </Button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                No thanks, I'll miss out
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-success/10">
              <Icon name="Check" size={32} color="var(--color-success)" />
            </div>
            <h3 className="font-headline font-bold text-xl text-foreground mb-2">
              You're In!
            </h3>
            <p className="font-body text-muted-foreground">
              Check your email for exclusive updates and early access details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;