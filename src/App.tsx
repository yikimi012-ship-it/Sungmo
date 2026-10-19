import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { NoticeSection } from './components/NoticeSection';
import { ClinicTourSection } from './components/ClinicTourSection';
import { DirectionsSection } from './components/DirectionsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { BottomNavBar } from './components/BottomNavBar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { OperatingHoursModal } from './components/OperatingHoursModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [termsModalType, setTermsModalType] = useState<'privacy' | 'terms' | null>(null);
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);

  // Sync scroll position with active bottom tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const faqEl = document.getElementById('faq');
      const locationEl = document.getElementById('location');
      const tourEl = document.getElementById('tour');
      const deptEl = document.getElementById('departments');

      if (faqEl && scrollPos >= faqEl.offsetTop) {
        setActiveTab('faq');
      } else if (locationEl && scrollPos >= locationEl.offsetTop) {
        setActiveTab('location');
      } else if (tourEl && scrollPos >= tourEl.offsetTop) {
        setActiveTab('tour');
      } else if (deptEl && scrollPos >= deptEl.offsetTop) {
        setActiveTab('departments');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (url: string, title: string) => {
    setLightboxData({ url, title });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#191c1e] flex flex-col font-sans antialiased">
      {/* Top Fixed Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenHours={() => setIsHoursModalOpen(true)}
      />

      {/* Main Container - carefully sized for premier Korean mobile clinic UI */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 pt-28 pb-36">
        {/* HERO SECTION */}
        <HeroSection onImageClick={handleOpenLightbox} />

        {/* SECTION 2: MEDICAL DEPARTMENTS */}
        <DepartmentsSection />

        {/* SECTION 3: NOTICE & PRE-VISIT CHECKLIST */}
        <NoticeSection onOpenHours={() => setIsHoursModalOpen(true)} />

        {/* SECTION 4: CLINIC TOUR & FACILITY PHOTO PREVIEW */}
        <ClinicTourSection onImageClick={handleOpenLightbox} />

        {/* SECTION 5: DIRECTIONS & LOCATION */}
        <DirectionsSection />

        {/* SECTION 6: FAQ ACCORDIONS */}
        <FaqSection />

        {/* SECTION 7: FINAL CTA BANNER */}
        <FinalCtaSection />

        {/* SECTION 8: LEGAL DISCLAIMERS & REGISTRATION FOOTER */}
        <FooterSection onOpenTerms={(type) => setTermsModalType(type)} />
      </main>

      {/* Fixed Sticky Bottom Navigation Bar */}
      <BottomNavBar
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId)}
      />

      {/* Navigation Drawer Menu */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={(tabId) => setActiveTab(tabId)}
        onOpenHours={() => setIsHoursModalOpen(true)}
      />

      {/* Operating Hours Detailed Modal */}
      <OperatingHoursModal
        isOpen={isHoursModalOpen}
        onClose={() => setIsHoursModalOpen(false)}
      />

      {/* Facility Image Zoom Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxData)}
        imageUrl={lightboxData?.url || null}
        title={lightboxData?.title || null}
        onClose={handleCloseLightbox}
      />

      {/* Privacy Policy & Terms Modal */}
      <TermsModal
        isOpen={Boolean(termsModalType)}
        type={termsModalType}
        onClose={() => setTermsModalType(null)}
      />
    </div>
  );
}
