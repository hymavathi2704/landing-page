import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How is Equibudx different from other coaching platforms?",
      answer: "Equibudx is built on the principle of perfect equilibrium. Unlike traditional platforms that charge coaches 20-40% commission, we only take 10-15%, ensuring fair compensation. We treat coaches and clients as equals, providing identical support, resources, and respect to both sides. Our platform prioritizes authentic relationships over profit maximization.",
      category: "Platform"
    },
    {
      id: 2,
      question: "What does the pricing structure look like?",
      answer: "We believe in transparent, fair pricing. Coaches keep 85-90% of their session fees (we charge only 10-15% commission). Clients pay fair market rates without hidden fees. During beta launch, the first 100 coaches receive zero commission for their first month, and early clients get a free first session credit.",
      category: "Pricing"
    },
    {
      id: 3,
      question: "When will the platform launch?",
      answer: "We're launching in three phases: Beta Launch (January 2026) for first 500 waitlist members, Coach Onboarding (February 2026) for verified coaches, and Public Launch (March 2026) for everyone. Join our waitlist now to secure early access and exclusive benefits.",
      category: "Launch"
    },
    {
      id: 4,
      question: "How do you ensure coach quality?",
      answer: "All coaches undergo a comprehensive verification process including credential validation, background checks, and certification review. We partner with leading coaching organizations like ICF to maintain high standards. Our balanced review system protects both coaches and clients while ensuring quality.",
      category: "Quality"
    },
    {
      id: 5,
      question: "What types of coaching are available?",
      answer: "Equibudx supports all coaching specialties including life coaching, business coaching, career coaching, fitness coaching, wellness coaching, and more. Our diverse coach community ensures you'll find the perfect match for your growth journey, whether you're a coach looking to offer services or a client seeking guidance.",
      category: "Services"
    },
    {
      id: 6,
      question: "How does the equal support system work?",
      answer: "Both coaches and clients receive 24/7 support with identical response time guarantees. We provide equal access to platform features, resources, and assistance. Our dispute resolution process is balanced and fair, considering both perspectives equally. No one gets preferential treatment—that's our commitment to equilibrium.",
      category: "Support"
    },
    {
      id: 7,
      question: "Can I join as both a coach and a client?",
      answer: "Absolutely! Many of our community members are both coaches and clients. You can maintain separate profiles for each role and enjoy the benefits of both sides of our balanced ecosystem. This dual perspective often leads to deeper understanding and better coaching relationships.",
      category: "Membership"
    },
    {
      id: 8,
      question: "What are the early access benefits?",
      answer: "Waitlist members receive exclusive benefits including priority beta access, direct founder feedback channels, lifetime early adopter badges, and special launch offers. Coaches get zero commission for the first month, while clients receive free first session credits. Plus, the first 1,000 members join our founder's circle with direct input on platform features.",
      category: "Benefits"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
            <span className="font-body text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Questions About
            <span className="block text-primary mt-2">Balanced Coaching?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Everything you need to know about Equibudx and our fair platform approach
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories?.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary transition-colors duration-200 font-body text-sm text-foreground"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-background rounded-lg border-2 border-border hover:border-primary transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex-1 pr-4">
                  <h3 className="font-headline font-bold text-lg text-foreground mb-1">
                    {faq?.question}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-primary/10 rounded text-xs font-body font-semibold text-primary">
                    {faq?.category}
                  </span>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openFAQ === faq?.id ? 'rotate-180' : ''}`}>
                  <Icon name="ChevronDown" size={24} color="var(--color-foreground)" />
                </div>
              </button>

              {openFAQ === faq?.id && (
                <div className="px-6 pb-5 animate-fade-in">
                  <div className="pt-4 border-t border-border">
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 text-center">
          <Icon name="MessageCircle" size={40} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
            Still Have Questions?
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            Join our waitlist and get direct access to our founder team for personalized answers
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('waitlist');
              if (element) {
                const elementPosition = element?.getBoundingClientRect()?.top + window.pageYOffset;
                const offsetPosition = elementPosition - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-body font-semibold transition-colors duration-200"
          >
            <span>Ask Us Anything</span>
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;