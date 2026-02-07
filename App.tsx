
import React, { useState } from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import BeliefBreaker from './components/BeliefBreaker';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import BonusSection from './components/BonusSection';
import OfferSection from './components/OfferSection';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import Authority from './components/Authority';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfUseModal from './components/TermsOfUseModal';

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
