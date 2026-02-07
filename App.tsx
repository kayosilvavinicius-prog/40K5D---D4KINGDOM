
import React, { useState } from 'react';
import Hero from './components/Hero.tsx';
import PainSection from './components/PainSection.tsx';
import BeliefBreaker from './components/BeliefBreaker.tsx';
import WhatYouWillLearn from './components/WhatYouWillLearn.tsx';
import BonusSection from './components/BonusSection.tsx';
import OfferSection from './components/OfferSection.tsx';
import Guarantee from './components/Guarantee.tsx';
import Testimonials from './components/Testimonials.tsx';
import Authority from './components/Authority.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicyModal from './components/PrivacyPolicyModal.tsx';
import TermsOfUseModal from './components/TermsOfUseModal.tsx';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#60F2E9] selection:text-[#0a0a0a]">
      <Hero />
      <PainSection />
      <BeliefBreaker />
      <WhatYouWillLearn />
      <BonusSection />
      <OfferSection />
      <Guarantee />
      <Testimonials />
      <Authority />
      <FAQ />
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
        onTermsClick={() => setIsTermsOpen(true)}
      />
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />

      <TermsOfUseModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </div>
  );
};

export default App;
