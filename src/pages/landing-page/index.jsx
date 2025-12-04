import React, { useEffect } from 'react';
import HeaderNavigation from '../../components/navigation/HeaderNavigation';
import FloatingProgressIndicator from '../../components/navigation/FloatingProgressIndicator';
import StickyConversionCTA from '../../components/navigation/StickyConversionCTA';
import ExitIntentModal from '../../components/navigation/ExitIntentModal';
import HeroSection from './components/HeroSection';
import PlatformVisionSection from './components/PlatformVisionSection';
import TestimonialsSection from './components/TestimonialsSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import WaitlistSection from './components/WaitlistSection';
import LaunchTimelineSection from './components/LaunchTimelineSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  useEffect(() => {
    document.title = 'Equibudx - Where Coaches and Clients Bloom Together';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Join the coaching revolution where everyone is treated as equals. Fair pricing for coaches, affordable growth for clients. Balance. Growth. Connection.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <FloatingProgressIndicator />
      <StickyConversionCTA />
      <ExitIntentModal />
      
      <main>
        <HeroSection />
        <PlatformVisionSection />
        <TestimonialsSection />
        <BenefitsSection />
        <FeaturesSection />
        <WaitlistSection />
        <LaunchTimelineSection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <FooterSection />
    </div>
  );
};

export default LandingPage;