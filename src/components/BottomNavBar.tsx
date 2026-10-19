import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: '홈', icon: 'home', href: '#' },
    { id: 'departments', label: '진료 안내', icon: 'medical_services', href: '#departments' },
    { id: 'tour', label: '병원 소개', icon: 'local_hospital', href: '#tour' },
    { id: 'location', label: '오시는 길', icon: 'map', href: '#location' },
    { id: 'faq', label: '자주 묻는 질문', icon: 'help_outline', href: '#faq' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tabId: string,
    href: string
  ) => {
    e.preventDefault();
    onTabChange(tabId);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#e0e3e6] shadow-[0_-4px_16px_rgba(23,50,77,0.06)] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="max-w-2xl mx-auto">
        {/* Quick Top Dual CTA */}
        <div className="px-3 pt-2 pb-1.5 flex items-center justify-between gap-2">
          <a
            href="#location"
            onClick={(e) => handleNavClick(e, 'location', '#location')}
            className="flex-1 h-11 rounded-lg bg-[#e6e8eb] hover:bg-[#e0e3e6] text-[#001d36] flex items-center justify-center gap-1.5 text-[13px] font-bold active:bg-[#e0e3e6] transition-colors"
          >
            <span className="material-symbols-outlined text-[17px] text-[#075fae]">
              location_on
            </span>
            <span>위치 확인</span>
          </a>

          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="flex-[1.4] h-11 rounded-lg bg-[#075fae] hover:bg-[#064e8e] text-white flex items-center justify-center gap-1.5 text-[14px] font-bold active:scale-[0.99] shadow-xs transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>전화 문의 (042)</span>
          </a>
        </div>

        {/* 5 Bottom Nav Tab Items */}
        <div className="flex justify-around items-center h-13 px-1 border-t border-[#f2f4f7]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={(e) => handleNavClick(e, tab.id, tab.href)}
                className={`flex flex-col items-center justify-center min-w-[56px] py-1 transition-colors ${
                  isActive
                    ? 'text-[#075fae] font-bold'
                    : 'text-[#43474d] hover:text-[#001d36]'
                }`}
              >
                <span className="material-symbols-outlined text-[21px] leading-none">
                  {tab.icon}
                </span>
                <span className="text-[11px] leading-tight mt-1">
                  {tab.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
