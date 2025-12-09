import React from 'react';
import Icon from '../../../components/ui/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  // All link data is intentionally empty or commented out per user request for simplification.
  const footerLinks = {
    platform: [],
    company: [],
    resources: [],
    // UPDATED: Legal links with hyphenated paths
    legal: [
        { label: 'Privacy Policy', href: '/privacy-policy' }, 
        { label: 'Terms and Conditions', href: '/terms-and-conditions' }, 
        { label: 'Refund and Cancellation Policy', href: '/refund-and-cancellation-policy' } 
    ]
  };

  // Restored social links per user request
  const socialLinks = [
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Instagram', href: '#', label: 'Instagram' }
  ];

  // Anchor click handler is no longer strictly needed but kept for code safety if links are restored
  const handleLinkClick = (e, href) => {
    if (href?.startsWith('#')) {
      e?.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 mb-12">
            
            {/* Branding, Tagline, and Social Links (Left/Center) */}
            <div className="max-w-md text-center md:text-left md:flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Scale" size={20} color="var(--color-primary)" />
                </div>
                <span className="font-headline font-bold text-xl text-primary">Equibudx</span>
              </div>
              <p className="font-headline font-semibold text-sm text-secondary mb-4">
                ONE PLATFORM. ENDLESS POSSIBILITES.
              </p>
              {/* Social Links updated with hover effect */}
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.icon}
                    href={social?.href}
                    aria-label={social?.label}
                    className="w-12 h-12 rounded-full bg-background hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon name={social?.icon} size={28} color="currentColor" />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links Section (Stacked) */}
            <div className="md:w-auto w-full text-center md:text-left pt-6 md:pt-0">
                <h4 className="font-headline font-bold text-lg text-foreground mb-4">
                    Legal
                </h4>
                <div className="flex flex-col items-center md:items-start space-y-3">
                    {footerLinks.legal.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                </div>
            </div>

        </div>

        {/* Copyright and Legal Badges Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Equibudx. All rights reserved. Built with balance in mind.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="font-body text-xs text-muted-foreground">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={16} color="var(--color-success)" />
                <span className="font-body text-xs text-muted-foreground">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;