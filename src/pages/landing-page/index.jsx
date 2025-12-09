import React, { useEffect, useState } from 'react'; // Added useState
import HeaderNavigation from '../../components/navigation/HeaderNavigation';
import ExitIntentModal from '../../components/navigation/ExitIntentModal';
import HeroSection from './components/HeroSection';
// import PlatformVisionSection from './components/PlatformVisionSection';
// import BenefitsSection from './components/BenefitsSection';
// import FeaturesSection from './components/FeaturesSection';
import WaitlistSection from './components/WaitlistSection';
// import SocialProofSection from './components/SocialProofSection';
// import FAQSection from './components/FAQSection';
// import FinalCTASection from './components/FinalCTASection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const [isRoleSelectionOpen, setIsRoleSelectionOpen] = useState(false); // NEW STATE for initial modal

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
      <ExitIntentModal />
      
      <main>
        {/* Pass the state control down to the WaitlistSection */}
        <WaitlistSection 
          initialOpen={isRoleSelectionOpen} 
          setInitialOpen={setIsRoleSelectionOpen} 
        />
        
        {/* Pass the handler to HeroSection to open the waitlist modal */}
        <HeroSection onOpenWaitlist={() => setIsRoleSelectionOpen(true)} />

      </main>

      <FooterSection />
    </div>
  );
};

export default LandingPage;