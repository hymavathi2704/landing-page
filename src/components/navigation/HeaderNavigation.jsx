import React, { useState, useEffect } from 'react';
import Icon from '../ui/AppIcon';
import Button from '../ui/Button';

const HeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigationItems = [
    // { label: 'Platform Vision', anchor: '#vision', offset: 80 }, // Removed per user request
    // { label: 'How It Works', anchor: '#how-it-works', offset: 80 }, // Removed per user request
    // { label: 'FAQ', anchor: '#faq', offset: 80 } // Removed per user request
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationItems?.map(item => ({
        id: item?.anchor?.substring(1),
        element: document.querySelector(item?.anchor)
      }));

      const currentSection = sections?.find(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e, anchor, offset) => {
    e?.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMobileMenuOpen(false);
    }
  };

  const scrollToWaitlist = (e) => {
    e?.preventDefault();
    const element = document.querySelector('#waitlist');
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
        isScrolled ? 'bg-card shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Scale" size={24} color="var(--color-primary)" />
              </div>
              <span className="font-headline font-bold text-xl lg:text-2xl text-primary">
                Equibudx
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <a
                key={item?.anchor}
                href={item?.anchor}
                onClick={(e) => handleAnchorClick(e, item?.anchor, item?.offset)}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  activeSection === item?.anchor?.substring(1)
                    ? 'text-primary' :'text-foreground'
                }`}
              >
                {item?.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              variant="default"
              onClick={scrollToWaitlist}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-cta"
            >
              Join Waitlist
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-4">
              {navigationItems?.map((item) => (
                <a
                  key={item?.anchor}
                  href={item?.anchor}
                  onClick={(e) => handleAnchorClick(e, item?.anchor, item?.offset)}
                  className={`font-body text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === item?.anchor?.substring(1)
                      ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted'
                  }`}
                >
                  {item?.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="default"
                  onClick={scrollToWaitlist}
                  fullWidth
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-cta"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNavigation;