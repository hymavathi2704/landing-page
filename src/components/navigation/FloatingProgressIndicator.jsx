import React, { useState, useEffect } from 'react';

const FloatingProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'vision', label: 'Vision' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'waitlist', label: 'Waitlist' },
    { id: 'faq', label: 'FAQ' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement?.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));

      const sectionElements = sections?.map(section => ({
        id: section?.id,
        element: document.getElementById(section?.id)
      }));

      const currentSectionIndex = sectionElements?.findIndex(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= windowHeight / 2 && rect?.bottom >= windowHeight / 2;
      });

      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
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
    <>
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-[80]">
        <div className="flex flex-col items-center space-y-4">
          {sections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => handleSectionClick(section?.id)}
              className="group relative"
              aria-label={`Navigate to ${section?.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeSection
                    ? 'bg-secondary scale-125' :'bg-muted hover:bg-primary/50'
                }`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-card px-3 py-1 rounded-md shadow-card text-sm font-body text-foreground">
                {section?.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[80] bg-card border-t border-border">
        <div className="relative h-1 bg-muted">
          <div
            className="absolute top-0 left-0 h-full bg-secondary transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex justify-around py-2 px-4">
          {sections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => handleSectionClick(section?.id)}
              className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${
                index === activeSection ? 'text-secondary' : 'text-muted-foreground'
              }`}
              aria-label={`Navigate to ${section?.label}`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  index === activeSection ? 'bg-secondary' : 'bg-muted'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingProgressIndicator;