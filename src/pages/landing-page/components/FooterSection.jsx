import React from 'react';
import Icon from '../../../components/ui/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'For Coaches', href: '#waitlist' },
      { label: 'For Clients', href: '#waitlist' },
      { label: 'Pricing', href: '#faq' }
    ],
    company: [
      { label: 'About Us', href: '#vision' },
      { label: 'Our Mission', href: '#vision' },
      { label: 'Launch Timeline', href: '#faq' },
      { label: 'Contact', href: '#waitlist' }
    ],
    resources: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Blog', href: '#waitlist' },
      { label: 'Support', href: '#waitlist' },
      { label: 'Community', href: '#waitlist' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Instagram', href: '#', label: 'Instagram' }
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Scale" size={20} color="var(--color-primary)" />
              </div>
              <span className="font-headline font-bold text-xl text-primary">Equibudx</span>
            </div>
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              The coaching platform built on perfect equilibrium. Where coaches and clients bloom together through balanced, authentic relationships.
            </p>
            <p className="font-headline font-semibold text-sm text-secondary mb-4">
              BALANCE. GROWTH. CONNECTION.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.icon}
                  href={social?.href}
                  aria-label={social?.label}
                  className="w-10 h-10 rounded-full bg-background hover:bg-primary/10 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name={social?.icon} size={20} color="var(--color-foreground)" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks?.platform?.map((link) => (
                <li key={link?.label}>
                  <a
                    href={link?.href}
                    onClick={(e) => handleLinkClick(e, link?.href)}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <a
                    href={link?.href}
                    onClick={(e) => handleLinkClick(e, link?.href)}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.label}>
                  <a
                    href={link?.href}
                    onClick={(e) => handleLinkClick(e, link?.href)}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.label}>
                  <a
                    href={link?.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

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